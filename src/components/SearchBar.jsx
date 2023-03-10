import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [controlSearch, setControlSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (controlSearch.length > 0) {
      navigate(`/search/${controlSearch}`);
      setControlSearch('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={controlSearch}
        onChange={(e) => setControlSearch(e.target.value)}
      />
      <IconButton
        type='submit'
        sx={{
          p: '10px',
          color: 'red',
        }}
        onClick={() => console.log(controlSearch)}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
