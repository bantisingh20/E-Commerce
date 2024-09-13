import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import { Link ,useLocation  } from "react-router-dom";
import "react-rater/lib/react-rater.css";
import React ,{ useState, useEffect } from 'react';
import queryString from 'query-string';

const ProductOverview = () => {

  const location = useLocation();
  const queryParams = queryString.parse(location.search); 
  const { id } = queryParams;
  const [productDetailItemnew,setproductDetailItem] = useState([])
  console.log(id)
  let url = `https://dummyjson.com/products/${id}`;
  
  
  useEffect(() => {
    fetch(url)
      .then((res) => { return res.json();        }) 
      .then((data) => { setproductDetailItem(data); });
  }, []);

  console.clear();
   
  if (Array.isArray(productDetailItemnew.images)) {
    productDetailItemnew.images.forEach((image, index) => {
        console.log(`Image ${index}:`, image);
    });
} else {
    console.log('productDetailItemnew.images is either undefined or not an array');
}


  const productDetailItem = {
    images: [
           
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
     
             
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
          
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
             
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600"
      
    ],
    title: "BIG ITALIAN SOFA",
    reviews: "150",
    availability: true,
    brand: "apex",
    category: "Sofa",
    sku: "BE45VGTRK",
    price: 450,
    previousPrice: 599 
    
  };
  
  //console.log(productDetailItem);

  
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* image gallery */}
      <div className="container mx-auto px-4">
        {/* <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        /> */}

        <img  src={productDetailItemnew && productDetailItemnew.images && productDetailItemnew.images[0] ? productDetailItemnew.images[0] : 'default-image-url.jpg'} alt="Product" />
        
        
      </div>
      {/* description  */}

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItemnew.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={false}
              rating={3.5}
            />

            <p className="ml-3 text-sm text-gray-400">
              ({productDetailItem.reviews})
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
          Availability:{" "}
          <span className= {productDetailItemnew.availabilityStatus == "Low Stock" ? "text-red-600" :"text-green-600" } >{productDetailItemnew.availabilityStatus}</span>
          {/* {productDetailItemnew.availability ? (
            <span className="text-green-600">productDetailItemnew.availability </span>
          ) : (
            <span className="text-red-600">{productDetailItemnew.availability}</span>
          )} */}
        </p>
        <p className="font-bold">
          Brand: <span className="font-normal">{productDetailItemnew.brand}</span>
        </p>
        <p className="font-bold">
          Cathegory:{" "}
          <span className="font-normal">{productDetailItemnew.category}</span>
        </p>
        <p className="font-bold">
          SKU: <span className="font-normal">{productDetailItemnew.sku}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${productDetailItemnew.price}{" "}
          <span className="text-xs text-gray-400 line-through">
            ${productDetailItem.previousPrice}
          </span>
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItemnew.description}
        </p>
        {/* <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Size</p>
          <div className="flex gap-1">
            {productDetailItem.size.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })}
          </div>
        </div> */}
        
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              1
            </div>
            <button className={`${plusMinuceButton}`}> +</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;