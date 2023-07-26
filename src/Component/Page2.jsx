import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
function Page2() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showChatbot, setShowChatbot] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
    const steps=[
    {
      id:'Greet',
      message:'Hello, Welcome to student info system!',
      trigger:'got'

    },
     {
      id:'got',
      options: [
        {value:'Got it!', label:'Got it!', trigger:'got it'},
        
      ],
    },
    {
      id:'got it',
      message:'Enter Your Name',
      trigger:'Name'

    },
    {
      id:'Name',
      user:true,
      
      trigger:'myName',
      validator: (value) => {
        setName(value); // Set the name using useState
        return true;
      },

    },
    {
      id:'myName',
      message:'Enter Your Age',
      trigger:'Age'

    },
    {
      id:'Age',
      user:true,
      trigger:'myAge',
      validator: (value) => {
        setAge(value); // Set the age using useState
        setShowChatbot(false);
        setTimeout(() => {
          setShowChatbot(true);
        }, 5000);
        return true;
      },
    },
     {
      id:'myAge',
      message:'Thank You',
      end:true,

    },
];


  useEffect(() => {
    if (!showChatbot) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        setShowChatbot(false);
        clearInterval(timer);
        // Redirect to Page 3 after 5 seconds
        // window.location.replace('/page3', { name, age });
         navigate('/page3', { state: { name, age } });
      }, 5000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [showChatbot, name, age, navigate]);

  return (
     <div className="d-flex align-items-center justify-content-center vh-100">
      {showChatbot && (
        <Segment >
          <ChatBot steps={steps} />
        </Segment>
      )}
      {!showChatbot && (
        <div>
          <h1>Your name {name} aged {age} has been added to the student system.</h1>
          <p>Thank you. In {countdown} second{countdown !== 1 ? 's' : ''}, you will be redirected to Page 3.</p>
        </div>
        // <div>
          
        //   <h1>Your name {name} aged {age} has been added to the student system.</h1>
        //   <p>You may now exit.</p>
        //   <Link to="/page3">
        //     <button>Continue</button>
        //   </Link>
        // </div>
      )}
    </div>
  //   <Segment style={{float:'right','margin-left': '50%',
  //     transform: 'translateX(-50%)',  
  //    }}>
  //   <ChatBot steps={steps}/>
    
  //  </Segment>
  )
}

export default Page2;