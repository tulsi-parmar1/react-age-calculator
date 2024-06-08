import UserDate from "./UserDate";
const Age=()=>{
    const date=new Date();
    const fulldate= date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    return(
        <>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <UserDate fulldate={fulldate}></UserDate>
        </div>
        </>
    )
}
export default Age;