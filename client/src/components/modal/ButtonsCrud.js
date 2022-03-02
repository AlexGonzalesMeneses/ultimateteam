import { Box, Button } from '@mui/material';
import React from 'react';

function ButtonsCrud({
  addDataForm,
  updateDataForm,
  cloneDataForm,
  closeDataForm,
  shareDataForm,
  action,
}) {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {action == 'Add' && (
        <Button
          sx={{
            bgcolor: 'tertiary.main',
            color: 'quaternary.light',
            width: '40%',
            margin: '20px auto',
            '&:hover': {
              bgcolor: 'tertiary.dark',
            },
          }}
          variant="contained"
          onClick={addDataForm}
        >
          Add
        </Button>
      )}
      {action == 'Edit' && (
        <Button
          sx={{
            bgcolor: 'tertiary.main',
            color: 'quaternary.light',
            width: '40%',
            margin: '20px auto',
            '&:hover': {
              bgcolor: 'tertiary.dark',
            },
          }}
          variant="contained"
          onClick={updateDataForm}
        >
          Save
        </Button>
      )}
      {action == 'Clone' && (
        <Button
          sx={{
            bgcolor: 'tertiary.main',
            color: 'quaternary.light',
            width: '40%',
            margin: '20px auto',
            '&:hover': {
              bgcolor: 'tertiary.dark',
            },
          }}
          variant="contained"
          onClick={cloneDataForm}
        >
          Clone
        </Button>
      )}
      {action == 'Share' && (
        <Button
          sx={{
            bgcolor: 'tertiary.main',
            color: 'quaternary.light',
            width: '40%',
            margin: '20px auto',
            '&:hover': {
              bgcolor: 'tertiary.dark',
            },
          }}
          variant="contained"
          onClick={shareDataForm}
        >
          Share
        </Button>
      )}

      <Button
        sx={{
          bgcolor: 'tertiary.main',
          color: 'quaternary.light',
          width: '40%',
          margin: '20px auto',
          '&:hover': {
            bgcolor: 'tertiary.dark',
          },
        }}
        variant="contained"
        onClick={closeDataForm}
      >
        Close
      </Button>
    </Box>
  );
}

export default ButtonsCrud;