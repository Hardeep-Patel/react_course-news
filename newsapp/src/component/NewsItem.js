import React, { Component } from 'react'
import { data } from 'react-router-dom';

export class NewsItem extends Component {
  
  render() {
      let {title, description , imageUrl ,newsUrl , author ,data} = this.props;

    return (
      <div>
        <div className="card my-2">
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author} on {data}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
