import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="stricky z-[100] h-14 inset-x-0 top-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <div className="flex h-14 items-center justify-between">
                    <Link className='flex z-40 font-semibold' to="/">หน้าแรก</Link>

                    <div className="h-full flex items-center space-x-4">
                        <Link to="/fingerpain">ปวดนิ้วมือ</Link>
                        <Link to="/bodypain">ปวดหน้าท้อง</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
