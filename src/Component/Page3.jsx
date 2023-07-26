import React from 'react';
import { useLocation } from 'react-router-dom';

const Page3 = () => {
  const location = useLocation();
  const { name, age } = location.state || {};

  return (
    <div>
      <h1>Your name {name} aged {age} has been added to the student system.</h1>
      <p>You may now exit.</p>
    </div>
  );
};

export default Page3;

