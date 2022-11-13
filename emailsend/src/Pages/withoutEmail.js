import React, { useState, useRef } from 'react';
import { Box, Container, Grid, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
export default function WithoutEmail() {
  const [value, setValue] = useState({
    subject: '',
    message: '',
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <Container maxWidth={false} disableGutters sx={{
      background: "#fff",
    }}>
        <Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
          <Box sx={{ typography: 'h5', color: '#000', textAlign: 'center', paddingBottom: 10 }} >
            Simple send mail with Mailto function</Box>
          <Box sx={{
            flexGrow: 1,
          }}>  <Grid container spacing={2} className='checkGriud'
          >
              <Grid container spacing={0}
                className='expertise'
                direction="column"
                sx={{ display: 'flex', }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    color="warning"
                    sx={{ width: '100%' }}
                    id="outlined-basic"
                    label="Subject"
                    fullWidth
                    autoComplete="Subject"
                    autoFocus
                    {...register("Subject", {
                      required: true,
                      onChange: (e) => { setValue({ ...value, subject: e.target.value }) }
                    })}
                    margin="normal"
                    error={!!errors?.Subject}
                    helperText={errors?.Subject ? "Subject is required" : null}
                    variant="outlined"
                  />
                  <TextField
                    color="warning"
                    sx={{ width: '100%' }}
                    id="outlined-basic"
                    label="Message"
                    fullWidth
                    autoComplete="Message"
                    autoFocus
                    multiline
                    rows={4}
                    {...register("Message", {
                      required: true,
                      onChange: (e) => { setValue({ ...value, message: e.target.value }) }
                    })}
                    margin="normal"
                    error={!!errors?.Message}
                    helperText={errors?.Message ? "Message is required" : null}
                    variant="outlined"
                  />
                  <Button
                    href={`mailto:email@example.com?subject=${value.subject}&body= ${value.message}`}
                    type="submit" className='buttonProject' variant="contained" >Submit</Button></form>
              </Grid></Grid>
          </Box>
        </Container>
      </Container>
  );
}