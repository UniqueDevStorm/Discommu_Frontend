import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className = 'flex flex-col mt-16'>
                <footer className = 'bg-gray-900 text-gray-300 px-6 lg:px-8 py-12 select-none mt-auto'>
                    <div className = 'max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8'>
                        <div className = 'col-span-2'>
                            <h5 className = 'text-xl font-semibold text-white'>
                                Discommu
                            </h5>
                            <nav className = 'mt-4'>
                                <ul className = 'space-y-2'>
                                    <li>
                                        <Link href = '/about'>
                                            <div className = 'font-normal text-base hover:text-gray-100'>
                                                About
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <h5 className = 'text-xl font-semibold text-white'>
                                Menu
                            </h5>
                            <nav className = 'mt-4'>
                                <ul className = 'space-y-2'>
                                    <a href = './sans' className = 'font-normal text-base hover:text-gray-100'>
                                        Login
                                    </a>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <h5 className = 'text-xl font-semibold text-white'>
                                Links
                            </h5>
                            <nav className = 'mt-4'>
                                <ul className = 'space-y-2'>
                                    <li>
                                        <a target = '_blank' href = './api_sans' className = 'font-normal text-base hover:text-gray-100'>
                                            API
                                        </a>
                                    </li>
                                    <li>
                                        <a target = '_blank' href = 'https://teamkat.tk' className = 'font-normal text-base hover:text-gray-100'>
                                            Team Kat
                                        </a>
                                    </li>
                                    <li>
                                        <a target = '_blank' href = 'https://discord.com/api/oauth2/authorize?client_id=761495487215042570&permissions=0&scope=bot' className = 'font-normal text-base hover:text-gray-100'>
                                            Bot
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className = 'max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-6 lg:mt-8 pt-8 '>
                        <div className = 'text-sm space-y-4 md:space-y-1 text-center md:text-left'>
                            <p>&copy;{new Date().getFullYear()} Team Kat. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}