import React from "react";

const NewsItem=(props)=> {

 

    let {title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-4 ">
        <div className="card text-bg-dark mb-3" >
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span className="badge rounded-pill text-bg-info">{source}</span></h5>
            <p className="card-text">
             {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank"  className="btn btn-sm btn-primary btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
        
    );
  
}
export default NewsItem