import React from 'react';

import { Link } from 'react-router-dom';



const menu = [

  {name : '홈', id: '/home', url: '/home'},

  {name : '소개', id: '/about', url: '/about'},

  {name : '서비스', id: '/services', url: '/services'},

  {name : '연락처', id: '/contact', url: '/contact'},

  {name : '블로그', id: '/blog', url: '/blog'}

];



const MenuList = () => {

  return (

    <div>

      {menu.map(item => (

        <div key={item.id} className="menu-item">

          <Link to={item.url}>{item.name}</Link>

        </div>

      ))}

    </div>

  );

};



export default MenuList;
