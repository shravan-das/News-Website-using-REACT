import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from "prop-types"
export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize:8,
    category:"general"

  }
 static propTypes ={
   country:PropTypes.string,
   pageSize:PropTypes.number,
   category:PropTypes.string,
 }

  constructor(){
    super();
    console.log("This is contsructor of news component");

    this.state = {
      articles:[],
      loading:false,
      page:1,

      
    }
  }
   async componentDidMount(){
      console.log("cdm");
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=39f68b64e1624426979c12c60a0d43f4&page =1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(data);
      this.setState({articles:parseddata.articles,
        totalResults:parseddata.totalResults,
        loading:false,
      });
  }
  handlepreviousclick  = async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=39f68b64e1624426979c12c60a0d43f4&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(data);
    
    
    
    this.setState({
      page:this.state.page - 1,
      articles:parseddata.articles,
      loading:false,

    })
    

  }

  handlenextclick = async()=>{

    if(!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))){
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=39f68b64e1624426979c12c60a0d43f4&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(data);
    
      this.setState({
      page:this.state.page + 1,
      articles:parseddata.articles,
      loading:false,

    })
  }

  }
  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center'>Shrav-news - Top headlines</h2>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url}>
            <Newsitem  title={element.title?element.title:""} description={element.description?element.description : ""} imageUrl={element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
          </div>
        })}
          
          
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button"  class="btn btn-dark" onClick={this.handlepreviousclick}>&larr;PREVIOUS</button>
        <button disabled = {this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>NEXT &rarr;</button>

        </div>


      </div>
    )
  }
}

export default News