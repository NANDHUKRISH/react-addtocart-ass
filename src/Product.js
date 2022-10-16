import React from 'react'

function Product(props) {
  const printStars=(count)=>{
    const starlist=[];
    for(let i=0; i<count;i++)
    {
        starlist.push( <div className="bi-star-fill" key={i}></div>)
    }
  return starlist;
  }
  return <>
     <div className="col mb-5">
                        <div className="card h-100">
                        
                            <div className="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right: '0.5rem'}}>{props.details.stock}
                            </div>
                       
                            <img className="card-img-top" src={props.details.productimage} alt="..." />
                        
                            <div className="card-body p-4">
                                <div className="text-center">
                                     <h5 className="fw-bolder">{props.details.productname}</h5>
                                     <div className="d-flex justify-content-center small text-warning mb-2">
                                          {printStars(props.details.productreview)}
                                      </div>       
                                     <span className="text-muted text-decoration-line-through">{props.details.productmopprice}</span>
                                     {props.details.productprice}
                                </div>
                            </div>
                            <h4 style={{display:"flex",justifyContent: "center"}}>MRP:{props.details.Lastprice}/-</h4>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <button 
                                    className="btn btn-outline-dark mt-3" 
                                    onClick={props.func} >
                                    {props.details.addtocart}
                                    </button>
                                </div>
                            </div>
                        </div>
       </div>
    </>
  
}

export default Product