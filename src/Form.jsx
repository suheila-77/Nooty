import React, { useState } from 'react';

const Form = ({ isClose, handle }) => {
  const [close, setClose] = useState(false);

  const [title, setTitle] = useState("")
  const[description, setDescription]= useState("")
  const[error, setError] = useState("false")

  const handleForm = () => {
    event.preventDefault()
   if(title == "" && description== ""){
    setError(true)

    setTimeout(()=>{
        setError(false)
    },2000)
   }
  };

  return (
    <div
      style={{ display: isClose === false ? 'none' : 'block' }}
      className='bg-black h-full absolute w-full top-0'>
    
      <div className='flex justify-center items-center h-full'>
        <form className='w-full sm:w-[450px] rounded-lg h-auto sm:h-[600px] bg-white mt-4 sm:mt-0 ml-4 sm:ml-0 p-4 relative'>
          <i onClick={handle} className='fa-solid fa-x text-3xl absolute top-4 right-10 cursor-pointer'></i>

          {
     error == true ? <p className=' text-red-500 text-3xl'>please fill the form</p> : ""
     
          }
          <br />
          <br />
          <input value={title} onChange={(event)=>
            setTitle(event.target.value)
          } 
          className='w-full sm:w-[400px] h-[50px] mb-5 px-4 py-2 border-2 border-black rounded-md mt-4' type='text' placeholder='Enter your name'
          />
         
          <textarea value={description} 
          onChange={(event)=>
            setDescription(event.target.value)
          }
          className='w-full sm:w-[400px] h-[200px] sm:h-[300px]
           resize-none border-2 border-black rounded-md px-4 py-2 mb-5' rows={6}  placeholder='Enter title'></textarea>
          <button onClick={handleForm} className='bg-thirdColor w-full sm:w-[400px] text-xl sm:text-3xl mt-3 p-2 rounded-md'>  Submit</button>
         
        </form>
      </div>
    </div>
  );
};

export default Form;
