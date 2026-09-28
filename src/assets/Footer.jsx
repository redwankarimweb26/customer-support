import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black'>
            
                 <div className='w-11/12 mx-auto max-w-[1600px] border-1 border-b-gray-800'>
                <div className='flex md:flex-row flex-col justify-between gap-7 text-white py-20'>
                    <div className='space-y-3'>
                        <h2 className='font-bold text-2xl'>CS — Ticket System</h2>
                        <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of  the <br />printing and typesetting industry. Lorem<br /> Ipsum has been the industry's  standard<br /> dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and<br />  scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-medium text-xl' >Company</h1>
                        <ul className='text-[#A1A1AA] space-y-3'>
                            <li >About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Sled</li>
                        </ul>
                    </div>
                    <div className='space-y-3'>
                        <h1 className=' font-medium text-xl' >Services</h1>
                        <ul className='text-[#A1A1AA] space-y-3'>
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                       
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-medium text-xl'>Information</h1>
                        <ul className='text-[#A1A1AA] space-y-3'>
                            <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                        </ul>
                        
                    </div>
                    <div className='space-y-3'>
                        <h1 className='font-medium text-xl'>Social Links</h1>
                        <ul className='text-[#A1A1AA] space-y-3'>
                            <li>@CS — Ticket System</li>
                        <li>@CS — Ticket System</li>
                        <li>@CS — Ticket System</li>
                        <li>support@cst.com</li>
                        </ul>
                        
                    </div>
                </div>
                
           
            </div>
           
            <div className='text-white text-center p-6'>
                    <p >© 2025 CS — Ticket System. All rights reserved.</p>
                </div>
        </div>
    );
};

export default Footer;
