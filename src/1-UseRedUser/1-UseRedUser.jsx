import React, { useReducer } from 'react'

const reducer=(state,action)=>{
   if(action.type==='DELETE_USER'){
   const person=state.data.filter((eachuser)=>{
    return eachuser.id!==action.payload
   })
  return{
    data:person
  }
}
else  if(action.type === "ADD_NEW_USER"){
 return{
  dispatch:action.paylode
  
 }
  

}
return {...state,...action.payload}

}
const UseRedUser = () => {
  const initialState = {
    data: [
        {id: '0',name:"John",age:'25'},
        {id: '1',name:"Mary",age:'36'},
        {id: '2',name:"Tom",age:'47'},
        {id: '3',name:"srikanth",age:'25'},
      ],
  };
 //dispatch action to delete user by ID
 console.log(initialState);

  const[state, dispatch]=useReducer(reducer, initialState)
  const handelDelete = (id) =>{
   dispatch({
    type:'DELETE_USER',
    payload: id
   }
   )
  }
  const handelInput=(e)=>{
   dispatch({
    type:'ADD_NEW_USER',
    payload : e.target.value

   })

  }
  return (
    <div>
      <input type="text"
      placeholder='Enter name' 
      value=''
      onChange={(e)=>handelInput(e)}
      
      
      />

      <h1>current Users:{state.data.length}</h1>
     { state.data.map((eachItem) => {
        const {id,name,age}=eachItem;
        return(
<div key={id}> 
<h2>{name}</h2>
<p>{age}</p>
<button onClick={()=>handelDelete(id)}>Delete</button>
</div>
        )
        })}
    </div>
  )
}

export default UseRedUser;