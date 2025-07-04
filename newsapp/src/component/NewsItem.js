import React from 'react';

const NewsItem = (props) => {
  
  
      let {title, description , imageUrl ,newsUrl , author ,data , name} = props;

    return (
      <div>
        <div className="card my-2">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>{name}</span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title ">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(data).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
