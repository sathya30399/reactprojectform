
import style from "./Form.module.css"
import { useForm ,Controller} from "react-hook-form";
import {expensePrpos} from "../module"
import { ChangeEvent, useState } from "react";
interface Props{
    tabellist:expensePrpos[],
    tot:number,
    deletefn:(btid:number)=>void,
    filter:(data:string)=>void

}

const Table = ({tabellist,tot,deletefn,filter}:Props) => {

    const [filterval,setFilterval]=useState<string>("All")

    function flv(e:ChangeEvent<HTMLSelectElement>){
        setFilterval( e.target.value)
    }
    


    const filterd_val= filterval=="All"? tabellist: tabellist.filter((val)=>{ return val.category==filterval}) ;

    const total =filterd_val.reduce(( start,crt)=>{return start+ Number(crt.amount)},0);

  return (<>
  <form action=""  className={style.form_head}>

  
    <div className={style.mb_3}>
        <div className={style.label}>
            <label htmlFor="category" className={style.form_label}>Filter</label>
        </div>
        <select  className={style.form_select}  onChange={(e)=>flv(e)}>
                <option value="All">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
        </select>
        
    </div>
    </form>
    <table   className={style.table_head}>
        
        <thead  className={style.table_head_head}>
            <tr>
                <th className={style.table_head_th}>Description </th>
                <th className={style.table_head_th}>Amount</th>
                <th className={style.table_head_th}>Category</th>
                <th className={style.table_head_th}></th>
            </tr>
            </thead>
            <tbody>
            {
                filterd_val.map((list)=>(<tr key={list.id}>
                    <td className={style.table_head_td}>{list.description}</td>
                    <td className={style.table_head_td}>{list.amount}</td>
                    <td className={style.table_head_td}>{list.category}</td>
                    <td className={style.table_head_td}><button onClick={()=>deletefn(list.id)}>Delete</button></td>
                </tr>))
            }
            </tbody>
            <tfoot>
            <tr>
                <td className={style.table_head_td}>Total</td>
                <td className={style.table_head_td}>{total}</td>
            </tr>
            </tfoot>
            
            
       
        
    </table>
    </>
    )
  
}

export default Table