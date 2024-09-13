import React, { useState, useEffect } from 'react';   
import Cards from '../Cards/Cards'; 
import { useNavigate } from 'react-router-dom';

function CategoryPage({}){

    const navigate = useNavigate();
    const handleClick = (title) => {
        navigate(`/category/product/?title=${encodeURIComponent(title)}`);
    };
    
  const [AllCategory, setMenu] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => {
        return res.json();
      })
      .then((data) => {     
        setMenu(data);
      });
  }, []);

  console.log(AllCategory);
    return(
        <>
           
             <div className='container'>
             <div className='row'>

                {AllCategory.map((Category) =>(
                    <div className="col-md-3" key={Category.slug}>
                    <Cards Title={Category.name} Url={`/category-wise/product/search?Filter=true&title=${Category.slug}`} />
                    </div>
                ))}
                 </div>
             </div>
        </>
    );
}


export default CategoryPage;