import { SetStateAction, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Table from './components/Table';
import {expensePrpos} from "./module"



function App() {
  const [dataa,setdata]=useState<expensePrpos[]>([{description:"milk",amount:"20",category:"Groceries",id:1},
  {description:"egg",amount:"20",category:"Groceries",id:2}])

  // const [data2,setdata2]=useState(dataa)
  const [scat,crtcat] =useState("");

  //const origArr = [...dataa];

  function addexpense(data:expensePrpos){
    console.log("form clicked")
    let id1:number
    if(dataa.length == 0){
      id1=1
    }else{
      id1=dataa[dataa.length-1].id+1
    }
    setdata([...dataa,{description:data.description,amount:data.amount,category:data.category,id:id1}])

  }
  console.log(dataa)
  // const total =dataa.reduce(( start,crt)=>{return start+ Number(crt.amount)},0);
  const delete1 =(btid:number)=>{
    console.log("del",btid)
    const deleted_data=dataa.filter( list=>{
      return list.id !== btid
    })

    console.log("deleted_data",deleted_data)

   setdata(deleted_data)
   // ftr(scat)


  }
  const ftr=(cat:string)=>{

     console.log("On change", cat)
    //crtcat(cat);

    const ft_data =dataa.filter(
      expensePrpos=> (expensePrpos.category === cat)
        
      );
      setdata(ft_data)
      
    }

    // useEffect(() =>{
    //   setdata2([...dataa])

    // },[dataa]
      

    // )


  return (
    <div className="App">
      <Form  addlist={addexpense}/>
      <Table tabellist={dataa} deletefn={delete1} filter={ftr} tot={0} />
      
  
      
     
    </div>
  )
}

export default App

