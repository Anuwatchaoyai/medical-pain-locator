import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className='mx-auto my-10 flex flex-col items-center justify-center w-full max-w-screen-xl px-2.5 md:px-20'>
                <h1 className="text-3xl font-bold mb-8">เลือกบริเวณที่คุณปวด</h1>
                <div className="relative w-full max-w-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/fingerpain">
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <img src="/images/main-finger.png" alt="finger" className="w-full h-auto rounded-md" />
                                <p className="mt-2 text-center text-gray-700">นิ้วมือ</p>
                            </div>
                        </Link>
                        <Link to="/bodypain">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <img src="/images/main-abs.png" alt="abs" className="w-full h-auto rounded-md" />
                            <p className="mt-2 text-center text-gray-700">หน้าท้อง</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
