import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
 import styles from './Charts.module.css'

function Charts({data,country}) {

    const [dailydata,setDailyData]=useState([]);
    useEffect(()=>{
       const fetchApi=async()=>{
        setDailyData(await fetchDailyData());
       } 
    //    console.log(dailydata);
       fetchApi();

    },[]);
    const lineChart=(
        dailydata.length?( <Line data={{
        labels:dailydata.map(({date})=>date),
        datasets: [{
           data:dailydata.map(({confirmed})=>confirmed),
           label:'Infected',
           borderColor:'#3333ff',
           fill:true

        },{
            data:dailydata.map(({deaths})=>deaths),
           label:'Deaths',
           borderColor:'red',
           backgroundColor:'rgba(255,0,0,0.5)',
           fill:true

        }]
        }}/> ):null
    );
    const barcharts=(
       data.confirmed?<Bar
       data={{
          labels:['Infected','Recovered','Deaths'],
          datasets:[{
             label:'people',
             backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
             data:[data.confirmed.value,data.recovered.value,data.deaths.value]

          }]
       }}
       />:null
    )

    
    return (
        <div className={styles.container}>
           {country?barcharts:lineChart}
        </div>
    )
}

export default Charts
