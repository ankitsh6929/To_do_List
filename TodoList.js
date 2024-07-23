import React,{useState} from 'react'

function TodoList() {
    const [activity,setActivity]=useState("");
    const [listData,setList]=useState("");

    function addActivity(){
        // setList([...list,activity]);
        // console.log(list);
         setList((listData)=>{
            const updatedList=[...listData,activity]
            console.log(updatedList);
            setActivity(''); // to empty the input box
            return updatedList
         })
   }

     function removeActivity(i){
              const updatedList = listData.filter((elem,id)=>{return i!=id})
              setList(updatedList);
     }

     function removeAll(){
        setList([])
     }

  return (
    <>
       <div className='container'>
        <div className='header'>Todo List</div>
         <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
         <button onClick={addActivity}>ADD</button>
         <p> Here is my List</p>
         <div className='x'>
            {listData!=[] && listData.map((data,i) => {
                return(
                    <>
                    <p key={i}>{data}</p>
                    <div><button onClick={()=>removeActivity(i)}>Remove</button></div>
                    </>
                )
            })}

            {listData.length>0 && <button onClick={removeAll}>removeAll</button>}
         </div>
         
       </div>
    </>
  )
}

export default TodoList
