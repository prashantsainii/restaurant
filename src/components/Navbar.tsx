import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

export default function Navbar() {
    const user = false;
    return (
        <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>

            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href='/' >Home</Link>
                <Link href='/menu' >Menu</Link>
                <Link href='/' >Contact</Link>
            </div>

            {/* LOGO */}
            <div className='text-xl font-bold flex-1 md:text-center'>
                <Link href='/'>Saian</Link>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                <Menu/>
            </div>

            {/* RIGHT LINKS */}
            <div className="hidden md:flex items-center gap-4 flex-1 justify-end">

                <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 bg-orange-300 cursor-pointer px-1 rounded-md">
                    <Image src='/phone.png' alt='phone icon' width={20} height={20}/>
                    <span>123 456 789</span>
                </div>

                {!user ?
                    <Link href='/login' >Login</Link>
                :
                    <Link href='/orders' >Orders</Link>
                }
                
                <Link href='/cart'>
                    <CartIcon/>
                </Link>
            </div>

        </div>
    )
}