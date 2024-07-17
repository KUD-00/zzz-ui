import { useState } from 'react';

const Menu = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <button
          className={`relative z-10 bg-gray-950 italic font-black py-2 px-16 rounded-l-full ${selected == 0 ? 'animate-pulse bg-lime-600 slanted-right z-20 text-black' : 'text-white'}`}
          onClick={() => handleSelect(0)}
        >
          推送
        </button>
        <button
          className={`relative z-10 bg-gray-950 italic font-black py-2 px-16 ${selected == 1 ? 'animate-pulse bg-lime-600 z-20 slanted-both text-black' : 'text-white'}`}
          onClick={() => handleSelect(1)}
        >
          日程
        </button>
        <button
          className={`relative z-10 bg-gray-950 italic font-black py-2 px-16 rounded-r-full ${selected == 2 ? 'animate-pulse bg-lime-600 z-20 slanted-left text-black' : 'text-white'}`}
          onClick={() => handleSelect(2)}
        >
          绳网等级
        </button>
        <div className={`absolute inset-0 bg-gray-950 rounded-full ${selected == 0 ? '' : ''}`} />
      </div>
    </div>
  );
};

export default Menu;
