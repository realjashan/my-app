import React ,{useState} from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function PopUp(props) {
    const [show, setShow] = useState(true);
// const capitalize = (word)=>{
// const lower= word.tolowerCase();
// return lower.charAt(0).toUpperCase()+ lower.slice(1);

// }

  return ( props.alert &&
    <>
    <Alert show={show} variant= {`${props.alert.type}`} >
     
     <p>
      <strong>{props.alert.type}</strong> {props.alert.msg}
      </p>
      
      <div className="d-flex justify-content-end">
      
      </div>
    </Alert>

    
  </>
  )
}
 