import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Cards( {Title ,Description, Url, Image} ) {

  const navigate = useNavigate();
 
  const handleClick = (Url) => {
    navigate(Url);
};


  return (
    <Card style={{ width: '18rem' ,marginBottom: '10px'}}>
      <Card.Img variant="top" src={Image || 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg'} style={{ height: '100px', width: '200px', objectFit: 'contain' }}/>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
           {/* {Description} */}
        </Card.Text>
        <Button variant="primary" onClick={() => handleClick(Url)}>View</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;