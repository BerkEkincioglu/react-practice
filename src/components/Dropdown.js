import React, { useState, useEffect, useRef, Fragment } from 'react';

const Dropdown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);
  const [currentOption, setCurrentOption] = useState(options[0]);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;

    return (
      <div
        key={option.value}
        className='item'
        onClick={() => {
          onSelectedChange(option);
          setCurrentOption(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  const dropdown = (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );

  const onSelectedChange = (option) => {
    setSelected(option);
  };

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? dropdown : null}

      <h1 style={{ color: currentOption.value }}>
        This text is {currentOption.value}
      </h1>
    </div>
  );
};

export default Dropdown;
