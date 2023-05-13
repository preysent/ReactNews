import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    // props in class based components
    let {title, description, Url, imgUrl}=this.props;
    return (
      <div>
        <div className="card my-2" style={{width: '18rem'}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={Url} target='_blank' className="btn btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
