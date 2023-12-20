import React from 'react';

interface CustomFilterProps {
  title: string;
}

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  // Your component logic here

  return (
    <div>
      {/* Use the title prop in your component */}
      <h3>{title}</h3>
      {/* Additional content */}
    </div>
  );
};

export default CustomFilter;