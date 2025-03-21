import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const { user } = useSelector((s: any) => s.user);
  return (
    <div>
      <h1>ABOUT</h1>
      <div>{JSON.stringify(user, null, 2)}</div>
    </div>
  );
};

export default About;
