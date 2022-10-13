const request=require("request")
const geocode=(address,callback)=>{
    
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidmFybmFyYWoiLCJhIjoiY2w4c2FwMHJrMGZkZTN3cWo4cDF6ZWo1ayJ9.JA-_n3C7ifsCOL69DoeOdA&limit=1"
    //console.log(url)
    request({url:url,json:true},(error,response)=>{
        //console.log(response.body.features.length)
        if(error){
            callback("unable to connect",undefined)
        }else if(response.body.features.length===0){
            callback("unable to find location , Try an other search",undefined)
        }else{
            callback(undefined,{
                lattitude: response.body.features[0].center[1],
                longtitide: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })

            //console.log(undefined,response.body.features[0].center[0])
        }
    })
}
module.exports=geocode