import React, { useState } from 'react';

import { Link } from 'react-router-dom';



const menu = [

  {

    name: '대메뉴1', id: 'main1', subMenu: [

      { name: '중메뉴1-1', id: 'sub1-1', subMenu: [

        { name: '소메뉴1-1-1', id: 'sub1-1-1', url: '/sub1-1-1' },

        { name: '소메뉴1-1-2', id: 'sub1-1-2', url: '/sub1-1-2' }

      ]},

      { name: '중메뉴1-2', id: 'sub1-2', url: '/sub1-2' }

    ]

  },

  {

    name: '대메뉴2', id: 'main2', subMenu: [

      { name: '중메뉴2-1', id: 'sub2-1', url: '/sub2-1' },

      { name: '중메뉴2-2', id: 'sub2-2', url: '/sub2-2' }

    ]

  }

];



const MenuItem = ({ item, level = 0 }) => {

  const [isOpen, setIsOpen] = useState(false);



  const toggleSubMenu = () => {

    setIsOpen(!isOpen);

  };



  return (

    <div key={item.id} className="menu-item" style={{ paddingLeft: `${level * 20}px` }}>

      {item.url ? (

        <Link to={item.url}>{item.name}</Link>

      ) : (

        <span onClick={toggleSubMenu} style={{ cursor: 'pointer' }}>{item.name}</span>

      )}

      {item.subMenu && isOpen && (

        <div className="sub-menu">

          {item.subMenu.map(subItem => (

            <MenuItem key={subItem.id} item={subItem} level={level + 1} />

          ))}

        </div>

      )}

    </div>

  );

};



const MenuList = () => {

  return (

    <div>

      {menu.map(item => (

        <MenuItem key={item.id} item={item} />

      ))}

    </div>

  );

};



export default MenuList;
