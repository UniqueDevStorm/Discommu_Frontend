import Link from "next/link";
import React from "react";

export default function Navbar({ data }) {
    return (
        <nav className='select-none'>
            <div className='float-left flex p-5'>
                <Link href='./'>
                    <a className='font-bold px-5 pt-1 text-xl' href='./'>
                        DISCOMMU
                    </a>
                </Link>
                <Link href='./commu'>
                    <a className='sm:flex hidden px-3 pt-1 text-lg' href='./commu'>
                        게시판
                    </a>
                </Link>
                <Link href='./category'>
                    <a className='sm:flex hidden px-3 pt-1 text-lg' href='./category'>
                        카테고리
                    </a>
                </Link>
            </div>
            <div className='float-right'>
                {
                    data === null || data === undefined
                    ? <div className='p-5 mt-1 text-lg'>
                        <a className='px-3 pt-1' href={process.env.API_URI}>로그인</a>
                    </div>
                    : <div className='p-2'>
                        <div className='flex'>
                            <div className='sm:mt-4 mt-6 font-semibold sm:text-xl text-sm sm:pr-4 pr-1'>
                                {
                                    data.username.length > 10
                                        ? <h1>{data.username.slice(0, 10)}..#{data.discriminator}</h1>
                                        : <h1>{data.username}#{data.discriminator}</h1>
                                }
                            </div>
                            <img className='rounded-full' alt={data.username} src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`} height={60} width={60} />
                        </div>
                    </div>
                }
            </div>
            <div className='border h-20 h-16 w-full border-gray-200' />
        </nav>
    )
}