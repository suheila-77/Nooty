import  { useEffect, useState } from 'react'
import {toast,Toaster} from "react-hot-toast"

const Note = () => {
  // const allNotes = JSON.parse(localStorage.getItem("data"));
  // console.log(allNotes);

  const [data, setData] = useState([])

  useEffect(()=>{
    const allNotes = JSON.parse(localStorage.getItem("data"));
    if(allNotes){

      setData(allNotes)
    }

    // console.log(data)
  })

  //Delete note starts here

  const handleDeleteNote=(id)=>{
    const findNote = data.findIndex((note)=> note.id == id)

    if(findNote){
      data.splice(findNote,1)
      localStorage.setItem("data",JSON.stringify(data))
    }

    toast.success("note has been deleted sucessfully",{
      position: "top-right"
    })



  }
  return (
    <div>
      <h1 className="text-center text-2xl">This is the note</h1>
      <div className=' sm:grid gap-2 grid-cols-[300px_300px_300px] justify-center py-5 px-1'>
        
        {
        
        data.length > 0 ?  data.map((note) => {
            return (
              <div id='box' className=' w-[300px] ml-10 sm:w-full rounded h-[200px] border-2 mt-5  border-black'>
                <h1 className='text-2xl '>{note.title}</h1>
                <p>{note.description}</p>


                <button onClick={ () => handleDeleteNote(note.id) } id='btn' className=' bg-red-600 text-white mt-10 ml-2 p-2 rounded hidden'>Delete</button>
                
              </div>
            );
          })

        :
        <p>there is no notes yet</p>
        }
      </div>
      <Toaster/>

    </div>
  );
}

export default Note;
