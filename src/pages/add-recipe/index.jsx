import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import Stack from '@mui/material/Stack';
import { Margin } from '@mui/icons-material';




export default function BasicTextFields() {
    const [country, setCountry] = React.useState('');
    const handleChange = (event) => {
            setCountry(event.target.value);
           };
           const VisuallyHiddenInput = styled('input')({
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: 1,
          });

  return (
   <div>
    <p >Form Goes Here</p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '120ch', padding:''},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title" variant="outlined" /> <br/>
        <TextField height="" id="outlined-basic" label="Description" variant="outlined" /> <br/>
      
      
      <div>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={''}>Ghana</MenuItem>
          <MenuItem value={''}>Nigeria</MenuItem>
          <MenuItem value={''}>Senegal</MenuItem>
        </Select>
      </FormControl> <br/>
      </div>

      <div>

    <Stack spacing={2} direction="row">
      <Button 
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload image
      <VisuallyHiddenInput type="file" />

    </Button>
     
      <Button  variant="contained">Submit</Button>
     
    </Stack>
      </div>

 

      
    </Box>

    
   </div>
  );
}




  
   






// export default function InputFileUpload() {
//   return (
    
//   );
// }



// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
      
//     </Box>
//   );
// }
    
