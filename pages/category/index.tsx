import Navbar from "@components/Navbar";
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export async function getServerSideProps(ctx) {
    let key = null;
    try {
        const cookies = cookie.parse(ctx.req.headers.cookie);
        const user = cookies.user;
        key = jwt.verify(user, process.env.JWT_KEY);
    } catch {
        key = null
    }
    return {
        props: {
            user: key
        }
    }
}

export default function Category({ ...key }) {
    return (
        <div>
            <Navbar data={key.user} />
        </div>
    )
}