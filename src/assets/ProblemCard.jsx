import { Calendar } from 'lucide-react';
import React from 'react';



const ProblemCard = ({item, handleSolvingProblem}) => {
// bg-green-200 px-3 py-1.5 rounded-full flex gap-2 justify-between items-center
   
    return (
        <div>
            <div onClick={()=> handleSolvingProblem(item)} className='bg-white cursor-pointer rounded-[4px] p-4 '>
                
                <div className='flex justify-between '>
                    <h1 className='font-medium text-[18px]'>{item.title}</h1>
                    <button className={` px-3 py-1.5 rounded-full flex gap-2 justify-between items-center ${
        item.status === "Open"
          ? "bg-[#B9F8CF]"

          : "bg-[#F8F3B9]"
           
      }`}> 
                        <div className={`w-5 h-5 rounded-full ${
                            item.status === "Open"
                                ? "bg-[#02A53B]"

                                : "bg-[#FEBB0C]"
           
                        }`}>
                        </div> <p className={`${item.status === "Open"
                                ? "text-[#0B5E06]"

                                : "text-[#9C7700]"}`}>{item.status}</p> </button>
                </div>
                <p className='text-[#627382]'>{item.description}</p>
                <div className='flex justify-between items-center mt-3'>
                    <div className='flex gap-4'>
                            <p className='text-[#627382] text-[14px]'>#{item.id}</p>
                        <p className={`text-[14px] ${
            item.priority === "HIGH PRIORITY"
              ? "text-red-600"
              : item.priority === "MEDIUM PRIORITY"
              ? "text-yellow-500"
              : "text-green-600"
          }`}
        > {item.priority}</p>
                    </div>
                    <div className='flex gap-5'>
                    <p className='text-[#627382] text-[14px]'>{item.customer}</p>
                        <div className='flex gap-2 items-center'> <Calendar/>
                        <p className='text-[#626482] text-[14px]'>{item.createdAt}</p></div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default ProblemCard;