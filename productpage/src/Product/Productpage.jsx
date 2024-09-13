import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../NavBar/Navbar';
import { Link ,useLocation  } from "react-router-dom";
import Cards from '../Cards/Cards';
import queryString from 'query-string';

const Productpage = () => {
  const [Products, setPhotos] = useState([]);
  const location = useLocation();
  const queryParams = queryString.parse(location.search); 
  const { title,Filter } = queryParams;
 console.log(title);
  let url;
  if (Filter) {
    url = `https://dummyjson.com/products/category/${title}`;
    console.log('1');
  } else {
    url = 'https://dummyjson.com/products'; 
    console.log('2');
  }
  
    useEffect(() => {
      fetch(url)
        .then((res) => { return res.json();        })
        .then((data) => { console.log(data.products);  setPhotos(data.products); });
    }, []);
    
   
 //console.log(Urlnew);

  
   

  
  //const { filter } = queryParams;
  // Convert to JSON
  //const jsonProducts = JSON.stringify(Products, null, 2); // The `null, 2` arguments format the JSON with 2 spaces of indentation
   
 
  return (


    <>
        

        <div className='container'>
            <div className='row'>
              <br />
                {Products.map((product) => (
                  <div className="col-md-3" >
                    <Cards Title={product.title} Description= {product.description} Url={`/product-details/?id=${product.id}`} Image={product.images.length > 0 ? product.images[0] : product.images}/>
                  </div>
                           
                ))}
            </div>
        </div>

    </>
    
  );
};
export default Productpage;