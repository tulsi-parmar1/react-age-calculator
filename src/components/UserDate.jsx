import { useState } from "react";

const UserDate=({fulldate})=>{
    const [date,setdate]=useState(null);
    const [result,setresult]=useState(null);
    const handleonchange=(e)=>{
        setdate(e.target.value);
    }
    const handleonclick=()=>{
       const [year,month,day]=fulldate.split('-').map(Number);
       const [UserDate,userMonth,userDay]=date.split('-').map(Number);
       if(UserDate>year || (UserDate===year && userMonth>month) || (UserDate===year && userMonth===month && userDay>day))
        {
        setresult('')
        alert('Incorrect date');
        return;
        }
        else{
          const p=(year-UserDate) + ' '+'years' + ' '+ (month-userMonth)+ ' ' +'Month' + (day-userDay) + ' '+ 'days Old';
            setresult(p);
        }
    }
    return(
        <>
        <div style={{border:'2px solid gray',padding:'40px',width:'300px'}}>
        <h1>Age Calculator</h1>
        <input type="date" onChange={handleonchange} className='date'/><br />
        <input type="submit" onClick={handleonclick} className='submit'></input>
        <h1>{result}</h1>
        </div>
      
        </>
    )
}
export default UserDate;