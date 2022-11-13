import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
export default function UsingEmail() {
    const [loadingForm, setLoadingForm] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (event) => {
        console.log({ ...event });
        setLoadingForm(true)
        const serviceId = 'yourServiceID';
        const templateId = 'yourTemplateID';
        const userId = 'youUserID';
        const templateParams = {
            ...event
        };
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((result) => {
                setLoadingForm(false)
                console.log(result.text);
            }, (error) => {
                setLoadingForm(false)
                console.log(error.text);
            });
    }
    return (
        <Container maxWidth={false} disableGutters sx={{
            background: "#fff",
        }}>
                <Container sx={{ paddingTop: 5, paddingBottom: 5 }}>
                    <Box sx={{ typography: 'h5', color: '#000', textAlign: 'center', paddingBottom: 10 }} >Send email using Email js</Box>
                    <Box sx={{
                        flexGrow: 1,
                    }}>  <Grid container spacing={2} className='checkGriud'
                    >
                            <Grid container spacing={0}
                                direction="column"
                                sx={{ display: 'flex', }}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                        color="warning"
                                        sx={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="Name"
                                        fullWidth
                                        name='user_name'
                                        autoComplete="user_name"
                                        autoFocus
                                        {...register("user_name", { required: true })}
                                        margin="normal"
                                        error={!!errors?.user_name}
                                        helperText={errors?.user_name ? "Name is required" : null}
                                        variant="outlined"
                                    />
                                    <TextField
                                        color="warning"
                                        variant="outlined"
                                        label="Email"
                                        id="outlined-basic"
                                        fullWidth
                                        autoComplete="Email"
                                        // autoFocus
                                        name='user_email'
                                        margin="normal"
                                        {...register("user_email", {
                                            required: "Required field",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                        error={!!errors?.user_email}
                                        helperText={errors?.user_email ? errors.user_email.message : null}
                                    />
                                    <TextField
                                        color="warning"
                                        sx={{ width: '100%' }}
                                        id="outlined-basic"
                                        label="Subject"
                                        fullWidth
                                        autoComplete="Subject"
                                        // autoFocus
                                        {...register("Subject", { required: true, })}
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
                                        autoComplete="message"
                                        //  autoFocus
                                        name='message'
                                        multiline
                                        rows={4}
                                        {...register("message", { required: true, })}
                                        margin="normal"
                                        error={!!errors?.message}
                                        helperText={errors?.message ? "Message is required" : null}
                                        variant="outlined"
                                    />
                                    <Button loading={loadingForm} loadingIndicator="Loading…" type="submit" className='buttonProject' variant="contained" >Submit</Button></form>
                            </Grid></Grid>
                    </Box>
                </Container>
            </Container>
    );
}