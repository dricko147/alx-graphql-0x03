import React, { useEffect } from 'react';

const ErrorProneComponent: React.FC = () => {
  useEffect(() => {
    throw new Error('This is a test error!');
  }, []);

  return <div>This component will throw an error.</div>;
};

export default ErrorProneComponent;