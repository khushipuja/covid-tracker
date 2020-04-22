import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
function CountryPicker({handleCountryChange}) {

    const [fetchedCountries,setfetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            setfetchedCountries(await fetchCountries());
        }
        fetchApi();
    },[setfetchedCountries]);
    
    console.log(fetchedCountries);
    return (
        
           <FormControl className={styles.formControl} defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
               <NativeSelect>
                   
                    <option value="global">Global</option>
                  { fetchedCountries.map((country,i)=>{ return <option key={i} value={country}>{country}</option>})}
                   
               </NativeSelect>
           </FormControl>
        
    )
}

export default CountryPicker
