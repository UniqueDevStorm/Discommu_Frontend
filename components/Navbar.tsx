import Link from "next/link";

export default function Navbar() {
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
            <div className='float-right p-5 text-lg'>
                <a className='px-3 pt-1 text-lg' href='./sans'>
                    로그인
                </a>
            </div>
            <div className='border h-20 h-16 w-full border-gray-200' />
        </nav>
    )
}