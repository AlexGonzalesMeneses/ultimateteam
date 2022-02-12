import React from 'react';
import { Box } from '@mui/system';
import Item from '../list/Item';

const items = [
  {
    id: 1,
    name: 'credit card fake',
    container: 'root',
    type: 'creditCard',
    isFavorite: 'false',
    description: 'this is a description',
    tags: 'jala friends work',

    info: 'another Name',
    number: '123131231',
    expiration: '10/12/2022',
    cvv: '123',
  },
  {
    id: 2,
    name: 'key 1',
    type: 'key',
    container: 'keys',
    serial: 'asd',
    urls: 'www.url.com',
    isFavorite: 'false',
    description: 'key pro',
  },
  {
    id: 3,
    name: 'Lionel Messi',
    type: 'contact',
    container: 'contact',
    isFavorite: 'true',
  },
  {
    id: 4,
    name: 'credential',
    type: 'credential',
    container: 'credential',
    isFavorite: 'true',
  },
  {
    id: 5,
    name: 'note',
    type: 'note',
    container: 'note',
    isFavorite: 'true',
  },
];

function List() {
  const namelist = 'Key1';

  return (
    <Box sx={{ width: '80%', padding: '30px 0', margin: 'auto' }}>
      <Box>
        {items.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
}

export default List;
