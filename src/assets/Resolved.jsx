import { Check } from 'lucide-react';
import React from 'react';

const Resolved = ({item}) => {
    return (
        <div className=' border-1 border-green-600 bg-green-100 rounded-[4px] p-3'>
            <h2 className='font-medium text-[18px] pb-2'>{item.title}</h2>
            <div className='flex gap-3'>
        
                <p className='text-green-600 font-medium'><Check/></p>
                <p className='text-green-600 font-medium'>Completed</p>
            </div>
        </div>
    );
};

export default Resolved;