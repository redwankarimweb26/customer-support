import React from 'react';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto md:max-w-[1600px] md:flex justify-between items-center py-3 space-y-4 '>
            <div>
                <h1 className='font-bold text-[24px]'>CS — Ticket System</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-8  items-center'>
                <ul className='flex justify-between gap-3  md:gap-8 items-center'> 
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                    
                </ul>
                <button className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-4 text-white rounded-[4px] font-semibold'> <span className='mr-4'>+</span>New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;