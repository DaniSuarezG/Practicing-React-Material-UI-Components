import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

const routes = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/about',
    text: 'About'
  }
]


export default function BasicBreadcrumbs() {
  
  const location = useLocation()
  console.log(location)
  
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Breadcrumbs onClick={ handleClick }>
      {
        routes.map((route, idx) => {
          return <Link key={ idx } to={ route.path }>
            {route.text}
          </Link>
        })
      }
    </Breadcrumbs>
  )
}