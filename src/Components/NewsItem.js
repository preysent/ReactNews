import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    // props in class based components
    let {title, description, Url, imgUrl, author, publishedAt}=this.props;
    return (
      <div>
        <div className="card my-2" >
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">by  {author} at {publishedAt}</small></p>
                <a href={Url} target='_blank' className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
