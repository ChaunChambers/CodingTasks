import Products from './Products.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import BrowserRouter from './BrowserRouter.jsx';
import NavBar from './NavBar.jsx';
import Route from './Route.jsx';
import { useRef, useState } from 'react';
import image1 from './product-1.svg';
import image2 from './product-2.svg';
import image3 from './product-3.svg';
import image4 from './product-4.svg';
import image5 from './product-5.svg';
import image6 from './product-6.svg';
import image7 from './product-7.svg';
import image8 from './product-8.svg';
import image9 from './product-9.svg';
import image10 from './product-10.svg';

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      title: 'title1',
      description: 'description1',
      image: image1,
      price: 1.99,
    },
    {
      title: 'title2',
      description: 'description2',
      image: image2,
      price: 1.99,
    },
    {
      title: 'title3',
      description: 'description3',
      image: image3,
      price: 1.99,
    },
    {
      title: 'title4',
      description: 'description4',
      image: image4,
      price: 1.99,
    },
    {
      title: 'title5',
      description: 'description5',
      image: image5,
      price: 1.99,
    },
    {
      title: 'title6',
      description: 'description6',
      image: image6,
      price: 1.99,
    },
    {
      title: 'title7',
      description: 'description7',
      image: image7,
      price: 1.99,
    },
    {
      title: 'title8',
      description: 'description8',
      image: image8,
      price: 1.99,
    },
    {
      title: 'title9',
      description: 'description9',
      image: image9,
      price: 1.99,
    },
    {
      title: 'title10',
      description: 'description10',
      image: image10,
      price: 1.99,
    },
  ]);
  // This function is adding all of the products price!
  // function addedPrice(price) {
  //   products.map((product) => {
  //     setTotalPrice((prevPrice) => prevPrice + product.price);
  //   });

  //   return totalPrice;
  // }

  function addedPrice(price) {
    setTotalPrice((prevPrice) => prevPrice + price);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar totalPrice={totalPrice} />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          {products.map((product, index) => {
            return (
              <Products
                key={index}
                price={product.price}
                addedPrice={addedPrice}
                products={products}
                totalPrice={totalPrice}
              />
            );
          })}
        </Route>
        <Route path="/about">
          <About totalPrice={totalPrice}  />{' '}
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
