import React, { useState } from 'react';
import Form from './Form';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleForm = () => {
    setIsOpen(true);
  };

  const handleOpen = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="bg-primaryColor flex justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-bold text-white">Nooty</h1>
        <button
          onClick={handleForm}
          className="flex gap-4 text-xl text-center bg-thirdColor p-3 rounded-lg hover:bg-blue-100"
        >
          Add note
        </button>
      </div>

      {isOpen && <Form isClose={isOpen} handle={handleOpen} />}
    </div>
  );
};

export default Header;
