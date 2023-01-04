
import { useEffect } from "react";
import { useState } from "react";
const Testing=()=>{

    const [data,setData]=useState([])
    const [search,setSearch]=useState("")
    const searchTheCountry=(event)=>{
         setSearch(event.target.value)
    }
    const url=`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?&rapidapi-key=4588b9ad84msh21d60197d89bb8dp1efc76jsn7a4fb7938338&country=${search}`

    const getdetails=async()=>{
      const response=await fetch (url)
      const newdata=await response.json()
      console.log(newdata)
      setData(newdata.data.covid19Stats)


    }



useEffect(()=>{


getdetails()

});
return <>

<div className="container-expand-lg">
    <div className="row">
        <h1 className="text-center mt-3">COVID-19 Coronavirus Statistics </h1>
        <div className="container mt-3">
        <div className="row ">
            <input type="search" value={search} onChange={searchTheCountry} className="p-3 mx-auto" placeholder="Enter your Country name" style={{width:500}}></input>
        </div>
        <div className="row bg-dark mt-3">
            <div className="col-md-3 col-sm-3">
                <h4 className="mt-3 text-center ">State Name</h4>
            </div>
            <div className="col-md-3 col-sm-3">
                <div className="row">
                <h4 className="mt-3 text-center">Confirmed Case</h4>
                </div>
            </div>
            <div className="col-md-3 col-sm-3">
                <div className="row">
                <h4 className="mt-3 text-center">Deaths</h4>
                </div>
            </div>
            <div className="col-md-3 col-sm-3">
                <div className="row">
                <h4 className="mt-3 text-center">LastUpdate</h4>
                </div>
            </div>

        </div>
    </div>

    </div>
    
</div>

   {

   data.map((element)=>{

      return (
              <>
           <div className="container-expand-lg">
            <div className="row bg-success">
                <div className="col-md-3 col-sm-3 ">
                    <div className="row ">
                     <p className="text-center">{element.keyId}</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3">
                    <div className="row ">
                        <p className="text-center">{element.confirmed}</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3">
                    <div className="row ">
                        <p className="text-center">{element.deaths}</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3">
                    <div className="row">
                        <p className="text-center">{element.lastUpdate}</p>
                    </div>
                </div>
            </div>
           

           </div>
           </>






      )






   })






}

</>


}
export default Testing;