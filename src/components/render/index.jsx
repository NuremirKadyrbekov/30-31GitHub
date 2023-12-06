import React, { useEffect, useState } from 'react'
function Button() { 
const [type,SetType] =useState("users")
  const [data,SetData] =useState([])

useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => SetData(json))
    .catch(error => <h1>'Ошибка при загрузке данных:',</h1>,);
}, [type])

  return (
    <div>
        <h1>status:{type}</h1>
        <button onClick={()=>SetType('users')}>Колдонуучулар</button>
        <button onClick={()=>SetType('posts')}>Posts</button>
        <button onClick={()=>SetType('photos')}>Photos</button>


        <pre>{
            data.map((el,id)=>{
                if(el.name){
                  return <div>{el.name} <p>{id}</p></div>
                }else if(el.body){
                  return <h6>{el.body}<p>{id}</p></h6>
                }else if(el.email){
                  return <h6>{el.email}<p>{id}</p></h6>
                }else if(el.thumbnailUrl){
                  return <img src={el.thumbnailUrl} alt="" style={{width:'130px'}} />
                }
            })
            }</pre>
        
    </div>
  )
}

export default Button