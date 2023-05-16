import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';

// import arr from './exampleRes'

export default class News extends Component {

  // set default props
  static defaultProps = {
    category:"general"
  };


// seting state in class based Component

  constructor() {
    super();
    this.state = {       
      // articles:arr.slice(0,5),
      arr:[],
      articles:[],
      loading:false,
      noOfNews:0,
      st:0,
    }
  };

  nextButton=()=>{

    
    
    if(this.state.noOfNews<=this.state.st){

    }
    else{
      
        this.setState({
          st : this.state.st+5,
          articles : this.state.arr.slice(this.state.st,this.state.st+5),
        })
    } 
  }

  privButton=()=>{
    
    if(this.state.st<5){

    }
    else{
          this.setState({
          st : this.state.st-5,
          articles : this.state.arr.slice(this.state.st-5,this.state.st)
        })

    }      
  }

//  this function will run after render
  async componentDidMount(){
       
    this.props.ProgressFn(5)

    this.setState({ loading:true})

    // updating the title of the page
    document.title=`${this.props.category} - NewsMeniya`
     
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}`)


      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        articles:     parsedData.articles.slice(0,5),
        arr:          parsedData.articles,
        noOfNews:     parsedData.articles.length,
        loading:      false
      }) 
      console.log(this.state.noOfNews)

      this.props.ProgressFn(100)
  } 

  
  render() {       
        
        return (
      <div className="container my-3 ">
        <h1 className='text-center my-4'>NewsMeniya-Top {`${this.props.category}`} headlines</h1>

        
        {this.state.loading&&<Spiner/>}
        <div className='row'> 
          {!this.state.loading && this.state.articles.map((elm)=>{
            return <div className='col-md-4' key={elm.url} >

            <NewsItem 
            title={elm.title}  
            description={elm.description ? elm.description.slice(0,85) : ''} 
            Url = {elm.url} 
            author = {elm.author}
            publishedAt={new Date(elm.publishedAt).toUTCString()}
            imgUrl={elm.urlToImage?elm.urlToImage:"https://www.cnet.com/a/img/resize/1be52ac19451681b1a741ee9156e9a8bebe9fa48/hub/2021/05/08/fdb5e889-9e48-4394-91b1-f83832f0b59f/yt-airtag-vs-tile-5.jpg?auto=webp&fit=crop&height=630&width=1200"}
            />
            
            </div>
          })}               
        </div> 

        <div className='d-flex my-3 justify-content-between'>


          <button type="button" className="btn btn-info" onClick={this.privButton} disabled={this.state.st?false:true}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
           <path d="m3.86 8.753 5.482 4.756c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.655-.753l-5.48 4.756a1 1 0 0 0 0 1.506z"/>
           </svg>Back</button>


          <button type="button" className="btn btn-info" onClick={this.nextButton} disabled={(this.state.st<this.state.noOfNews)?false:true} >
            Next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.756c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.655-.753l5.48 4.756a1 1 0 0 1 0 1.506z"/>
            </svg></button>
        </div>
      </div>
    )
  }
}
