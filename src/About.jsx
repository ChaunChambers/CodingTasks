import Figure from 'react-bootstrap/Figure';
import imageStore1 from './store-1.svg';
import imageStore2 from './store-2.jpg';
import imageStore3 from './store-3.jpg';

function About({totalPrice}) {
  return (
    <>
      <h1>About</h1>
      <div style={{position:"relative"}}><div style={{position:"absolute", top:"-50px",right:"16px", font:"white"}}>Total Price : £{totalPrice}</div></div>
      <Figure>
        <Figure.Image width={171} height={180} src={imageStore1} />
        <Figure.Caption>
          This is a store. We sell products. Click to purchase.
          <h2>Contact info</h2>
          email@email.com Address here
        </Figure.Caption>
        <Figure.Image width={600} height={300} src={imageStore2} />
        <Figure.Image width={600} height={300} src={imageStore3} />
      </Figure>
    </>
  );
}

export default About;
