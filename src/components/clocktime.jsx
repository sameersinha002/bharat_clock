let Clocktime=()=>{
    let time=new Date();

    return <p className="lead">This the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
}
export default Clocktime;