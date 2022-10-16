import Product from "./Product";
import './App.css';
import {useState} from "react";
import Navigation from "./Navigation";

function App() {
    let details=[
        {   
            stock:"sale",
            productimage:"https://images.pexels.com/photos/19090/pexels-photo.jpg",
            productname:"Shoe",
            productreview:"2",
            productmopprice:"",
            productprice:"$40.00 - $80.00",
            Lastprice:200,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"https://www.verywellfit.com/thmb/skyzt0IopPTbvAMsTK1lxDBSAnQ=/614x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VW-Fit-9-best-stainless-steel-water-bottles-4584294-f8feaef5eaf9473a88317672d559a4f9.jpg",
            productname:"Water bottles",
            productreview:"3",
            productmopprice:"$20.00",
            productprice:"$18.00",
            Lastprice:100,
            addtocart:"Add to cart"
        }, 
         {
            stock:"sale",
            productimage:"https://wallpapercave.com/wp/wp7556190.gif",
            productname:"Chiken biriyani",
            productreview:"2",
            productmopprice:"$50.00",
            productprice:"$25.00",
            Lastprice:140,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"https://images.news18.com/ibnlive/uploads/2020/12/1608104013_xiaomi_mi_qled_tv_4k.jpg",
            productname:"Smart TV",
            productreview:"5",
            productmopprice:"5",
            productprice:"$40.00",
            Lastprice:34000,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"https://www.pouted.com/wp-content/uploads/2013/10/wholesale-phone-case-iphone4s-5-diamond-mobile-phone-shell-protective-cover-apple_s-5th-generation-diamond-studded.jpg",
            productname:"Mobile cover",
            productreview:"5",
            productmopprice:"$50.00",
            productprice:"$25.00",
            Lastprice:100,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"https://i.pinimg.com/736x/bc/e4/5d/bce45dc5fa5ad5697b3f93a139911598--cheap-ray-ban-sunglasses-wayfarer-sunglasses.jpg",
            productname:"Cooling glass",
            productreview:"1",
            productmopprice:"",
            productprice:"$120.00 - $280.00",
            Lastprice:100,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"https://image.made-in-china.com/2f0j00PBDTClHzanot/School-Bags-01.jpg",
            productname:"School bag",
            productreview:"2", 
            productmopprice:"$20.00",
            productprice:"$18.00",
            Lastprice:300,
            addtocart:"Add to cart"
        },
        {
            stock:"sale",
            productimage:"https://i5.walmartimages.com/asr/df3cece1-4a45-4c06-bfd9-ea2f5fd28319_1.192d9e0450e409282558b6013bda03b0.jpeg",
            productname:"Laptop cover",
            productreview:"3",
            productmopprice:"",
            productprice:"$40.00",
            Lastprice:1000,
            addtocart:"Add to cart"
        }]

        let increase =(e)=>
        {
            setCart(cart+1);
            e.target.innerText="Remove From Cart";
            e.target.classList.value="btn btn-outline-danger mt-3"
        }

         let decrease =(e)=>
         {
            if(cart>0){
            setCart(cart-1);
            e.target.innerText="Add to cart";
            e.target.classList.value="btn btn-outline-dark mt-3"
            }
            else{
                alert("CART IS EMPTY")
            }
        }
         
         let func=(e)=>
         {
           if(e.target.innerText==="Add to cart")
           {increase(e)}
           else if(e.target.innerText==="Remove From Cart")
           {decrease(e)}
         }   
  
        let [cart,setCart]=useState(0);
       
    return <>
       <Navigation value={{cart,setCart}} />
      
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        
        <section className="py-5">  
             <div className="container px-4 px-lg-5 mt-5">
                 <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 {details.map((e,i)=> {
                 return <>
                  <Product details={e} key={i} func={func}/>
                 </>
                 })}
                 </div>
            </div>
        </section>

        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
  </>
}

export default App;
