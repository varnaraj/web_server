const request =require("request")

//http://api.weatherstack.com/current?access_key=c1c76a4d1c54c17505a50cb32882694d&query=9.6615,80.0255&units=f

const forecast=(lattitude,longtitide,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=c1c76a4d1c54c17505a50cb32882694d&query="+longtitide+","+lattitude+"&units=m"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect weather services",undefined)
        }else if(response.body.error){
            callback(response.body.error.info,undefined)
               
        }else{
            callback(undefined,response.body.current.temperature)
        }
        
       // console.log("It is currently "+response.body.current.temperature+" farahnit out. It feels like "+response.body.current.feelslike+" faranit out.");
       // console.log(response.body.current.weather_descriptions[0])
    })

}
module.exports=forecast