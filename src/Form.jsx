import React, { useState } from 'react';

const Form = ({ isClose, handle }) => {
  const [close, setClose] = useState(false);

  const handleForm = () => {
    setClose(true);
  };

  return (
    <div
      style={{ display: isClose === false ? 'none' : 'block' }}
      className='bg-black h-[800px]  absolute w-full top-0'>
    
      <div className='flex justify-center pt-10'>
        <form className='w-full sm:w-[500px] rounded-lg h-auto sm:h-[650px] bg-white mt-4 sm:mt-0 ml-4 sm:ml-0 p-4'>
          <i onClick={handle} className='fa-solid fa-x text-3xl ml-[400px]'></i>
          <br />
          <input
            className='w-full sm:w-[420px] h-[50px] mb-5 px-4 py-2 border-2 border-black rounded-md ml-2 mt-4'
            type='text'
            placeholder='Enter your name'
          />
          <input
            className='w-full sm:w-[420px] h-[50px] mb-5 px-4 py-2 border-2 border-black rounded-md ml-2'
            type='password'
            placeholder='Enter your password'
          />
          <textarea
            className='w-full sm:w-[400px] h-[300px] ml-[10px] resize-none'
            placeholder='Enter title'
          ></textarea>
          <button className='bg-thirdColor w-full sm:w-[400px] text-3xl mt-5 ml-2 p-2'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;