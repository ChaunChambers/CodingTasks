import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useRef } from 'react';

function Products({ price, addedPrice, products, totalPrice }) {
  const [color, setColor] = useState('');
  // const [totalPrice, setTotalPrice] = useState(0);
  const inputRef = useRef(null);

  function handleClick() {
    addedPrice(price);
  }

  return (
    <>
      <h1>Products</h1>
      <div>
      <div style={{position:"relative"}}><div style={{position:"absolute", top:"-50px",right:"16px", font:"white"}}>Total Price : £{totalPrice}</div></div>
        {products.map((product) => (
          <Card style={{ width: '18rem' }} key={product.title}>

            <Card.Img
              src={product.image}
              variant="top"
              style={{ width: '100px', height: '100px' }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text />
              {product.description}
              <Card.Text />
              <Button variant="primary" onClick={handleClick}>
                Buy
              </Button>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ color: color }}
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setColor('red')}>
                    Red
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setColor('blue')}>
                    Blue
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setColor('green')}>
                    Green
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              £{product.price}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Products;
