import React, { Component } from 'react'
import NewsItem from './NewsItem'
import arr from './exampleRes'

export default class News extends Component {


// seting state in class based Component

  constructor() {
    super();
    this.state = {       
      articals:arr.slice(0,9),
      loading:false,
      st:0,
    }
  };

  nextButton=()=>{
   
    this.setState({
      st : this.state.st+9,
      articals : arr.slice(this.state.st,this.state.st+9)
    })
  }
  privButton=()=>{
    if(this.state.st<9){

    }
    else{
      this.setState({
      st : this.state.st-9,
      articals : arr.slice(this.state.st-9,this.state.st)
    })
    }
    
  }

//  this function will run after render
  async componentDidMount(){

      // let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3bf5fc929c224dee98e4cdf51e86db5d")

      // let parsedData = await data.json()
      // this.setState({articals:parsedData.articles}) 
  }


  render() {   
        
      
        return (
      <div className="container my-3 ">
        <h1>News Menia-top Headlines</h1>

        <div className='row'> 
          {this.state.articals.map((elm)=>{
            return <div className='col-md-4' key={elm.url} >
            <NewsItem title={elm.title}  description = {elm.description} Url = {elm.url} imgUrl={elm.urlToImage} />
            </div>
          })}               
        </div> 

        <div className='d-flex justify-content-between'>


          <button type="button" className="btn btn-info" onClick={this.privButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
           <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
           </svg>Priv</button>


          <button type="button" className="btn btn-info" onClick={this.nextButton}>
            Next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg></button>
        </div>
      </div>
    )
  }
}
