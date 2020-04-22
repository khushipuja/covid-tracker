import axios from 'axios';

const url='https://covid19.mathdro.id/api';
export const fetchData=async(country)=>{
    let changeableUrl=url;
    if(country)
    {
        changeableUrl=`${url}/countries/${country}`;
        console.log(changeableUrl);
    }

try{

    const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableUrl);

    const newdata={ confirmed, recovered, deaths, lastUpdate}
    return newdata
}
catch(err){
console.log(err);
}

}
export const fetchDailyData=async()=>{

try{
const {data}=await axios.get(url+"/daily");
// console.log(data);
const modifiedData=data.map((dailydata)=>({
    confirmed:dailydata.confirmed.total,
    deaths:dailydata.deaths.total,
    date:dailydata.reportDate



}));
return modifiedData;


}
catch(err){
console.log(err);
}

}
export const fetchCountries=async()=>{
    try{

        const {data:{countries}}=await axios.get(url+'/countries');
        
         return countries.map((country)=>country.name);
    }catch(err){
        console.log(err);
    }
}
