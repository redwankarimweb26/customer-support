import React, { use, useState } from 'react';
import ProblemCard from './ProblemCard';
import States from './states';
import SolvingProblem from './SolvingProblem';
import Resolved from './Resolved';
import { toast } from 'react-toastify';

const CardContainer = ({problemPromise}) => {
    const problems = use(problemPromise)
    const [problem, setProblem] = useState(problems)
    const [solvingProblem, setSolvingProblem] = useState([]) 
     const [problemSolved, setProblemSolved] = useState([]) 

     const handleSolvingProblem=(item) =>{
       
        const isExit =solvingProblem.find((problem) => problem.id == item.id)
    if (isExit){
        toast.error("Already In Progressed ")
        return;
    }toast.info("Problem is In-Progress !")
        const newSolvingProblem = [...solvingProblem, item]
        setSolvingProblem(newSolvingProblem);

}

const handleProblemSolved = (item) =>{
     toast.success("Resolved Successful !")
    const newProblemSolved = [...problemSolved, item];
    setProblemSolved(newProblemSolved);
    const remaining = solvingProblem.filter( (solved) => solved.id !== item.id);
    setSolvingProblem(remaining)

    const remainingItem = problem.filter( (problem) => problem.id !== item.id);
    setProblem(remainingItem)
}

    return (
        <div className='bg-gray-200' >
            <States
             solvingProblemTotal = {solvingProblem.length}
             problemSolvedTotal={problemSolved.length}
             ></States>
            <div className='w-11/12 mx-auto max-w-[1600px] grid md:grid-cols-12 pb-10 gap-8'>
        <div className='md:col-span-9'>
            <div className=''>
                <div >
                <h1 className='font-semibold text-2xl py-2'>Customer Tickets</h1>
                <div className='grid md:grid-cols-2 gap-6'>

                  {
                    problem.map(item => <ProblemCard handleSolvingProblem={handleSolvingProblem} key={item.id}  item={item}></ProblemCard>)
                  }   
                 
                </div>
                
            </div>
            </div>
            
        </div>
            
            <div className='md:col-span-3 col-span-1'>
                <div>
                    <h1  className='font-semibold text-2xl py-2'>Task Status</h1>
                    <div className='space-y-5'>
                        {
                            solvingProblem.map((item) => <SolvingProblem handleProblemSolved={handleProblemSolved}  key={item.id} item={item}></SolvingProblem>
                             )
                        }
                       
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-2xl py-2'>Resolved Task</h1>
                    <div className='space-y-4'>
                        {
                          problemSolved.map((item)=> <Resolved key={item.id} item={item}></Resolved>) 
                        }
                    </div>
                </div>
            </div>
            
       </div>
        </div>
       
            
    )         
        
};

export default CardContainer;