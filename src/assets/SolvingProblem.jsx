import React from 'react';

const SolvingProblem = ({item,handleProblemSolved}) => {
    return (
        <div>
            <div className='bg-white p-4 rounded-[4px]'>
                            <h1 className='font-medium text-[18px]'>{item.title}</h1>
                            <button onClick={() => handleProblemSolved(item)} className='cursor-pointer btn p-4 w-full bg-[#02A53B] font-semibold text-[18px] rounded-[4px] text-white mt-4'>Complete</button>
                        </div>
        </div>
    );
};

export default SolvingProblem;