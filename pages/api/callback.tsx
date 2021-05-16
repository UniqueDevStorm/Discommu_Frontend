import process from "process";
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';

export default async (req, res) => {
    const code = req.query.code;
    const request = (await (await fetch('https://discord.com/api/v8/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            code,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: 'authorization_code',
            scope: 'identify'
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })).json())
    const token = request['access_token'];
    const info = (await (await fetch('https://discord.com/api/v8/users/@me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).json());
    const user = jwt.sign(info, process.env.JWT_KEY);
    const cookies = new Cookies(req, res);
    cookies.set('user', user, {
        httpOnly: false
    })
    res.redirect('../../')
}