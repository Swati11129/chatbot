import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-center mt-5">
        <h1 >Enter into Student Info System</h1>
        <Link to="/page2" className="d-block mt-3">
          <button type="button" className="btn btn-primary btn-lg">Enroll Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;