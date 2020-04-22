import React, { Component } from 'react'

import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api'

import styles from './App.module.css';
import coronaImage from './images/covid.png'


export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:{},
             country:''
        }
    }
    

    async componentDidMount(){
        const data= await fetchData();
        this.setState({data:data});
        // console.log(data);
    }

    handleCountryChange=async(country)=>{
        const fetchedData= await fetchData(country);
        this.setState({
            data:fetchedData,
            country:country
        })
        // console.log(fetchedData);
        // console.log(country);

    }
    render() {
        return (
            <div>
            <div><img className={styles.image} src={coronaImage} alt="covid-img"></img></div>
            <div className={styles.container}>
                {/* <h1>App</h1> */}
                
                
                <Cards data={this.state.data}></Cards>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={this.state.data} country={this.state.country}/>
            </div>
            </div>
        )
    }
}

export default App
