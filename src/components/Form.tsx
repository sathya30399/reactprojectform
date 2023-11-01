import React, { FormEvent, SetStateAction, useRef, useState ,} from 'react'
import style from "./Form.module.css"
import { useForm ,Controller} from "react-hook-form";

interface UserInput{
  description:string,
  amount:string,
  category:string;
  id:number
}

interface Prpos{

  addlist: (data:UserInput)=>void
}

const Form = ({addlist}:Prpos) => {
  
  
 

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInput>(
  );

  // console.log(errors);

  const handleForm = (values:UserInput) => {
    // event.preventDefault();
    console.log("submitted");
    addlist(values)
  };
  return (<>
 <form action=""  onSubmit={handleSubmit(data=>{handleForm(data)})} className={style.form_head}>
  <div className={style.mb_3}>
    <div className={style.label}>
    <label htmlFor="" className={style.form_label}>
        Description
    </label>
    </div>
    <div  className={style.input}>
    <input {...register("description",{required:true,minLength:3})}  type="text" className={style.form_control} />
    {errors.description?.type === "required" && <p>Please enter username</p>}
          {errors.description?.type === "minLength" &&
            <p>Description should be  atleast 3 character</p>}
    </div>
  </div>
  <div className={style.mb_3}>
    <div  className={style.label}>
    <label htmlFor="" className={style.form_label}>
        Amount
    </label>
    </div>
    <div  className={style.input}>
    <input
    {...register("amount", { required: true })} 
       type="text" className={style.form_control} placeholder='$' />
        {errors.amount?.type === "required" &&  <p>Amount is required</p>}
    </div>
  </div>
  
  <div className={style.mb_3}>
      <div className={style.label}>
         <label htmlFor="category" className={style.form_label}>Category</label>
      </div>
      <Controller
          name="category"
          control={control}
          rules={{ required: 'Please select an option' }}
          render={({ field }) => (
            <select {...field} className={style.form_select} >
              <option value="">Select an option</option>
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          )}
        />
        {errors.category && <p>category is required</p>}
      </div>

        
    
  
  
  <button className={style.submit_btn} >submit</button>
  
  
  </form>
  
   
  
  
  </>
    
  )
}

export default Form


