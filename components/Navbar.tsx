import Link from "next/link";

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
            <div className='float-right text-lg p-2'>
                {
                    data === null || data === undefined
                    ? <a className='p-5 px-3 pt-1 text-lg' href={process.env.API_URI}>로그인</a>
                    : <img className='rounded-full' alt={data.username} src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`} height={60} width={60} />
                }
            </div>
            <div className='border h-20 h-16 w-full border-gray-200' />
        </nav>
    )
}