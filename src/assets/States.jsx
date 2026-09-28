import React from 'react';


const States = ({solvingProblemTotal, problemSolvedTotal}) => {
    
    return (
        <div className=' bg-gray-200'>
            <div className='flex flex-col md:flex-row bg-gray-200 gap-4 py-10 w-11/12 mx-auto max-w-[1600px]' >
                <div
                    className=" w-full box-1
                    rounded-xl text-white p-16 flex flex-col items-center justify-center"
                    
                    >
                    
                    <h2 className="text-2xl mb-2">In-Progress</h2>
                    <p className="text-6xl font-bold">{solvingProblemTotal}</p>
                </div>
                <div
                    className=" box-2
                    w-full rounded-xl text-white p-16 flex flex-col items-center justify-center">
                    
                    <h2 className="text-2xl mb-2">Resolved</h2>
                    <p className="text-6xl font-bold">{problemSolvedTotal}</p>
                </div>
            </div>
             
        </div>
    );
};

export default States;