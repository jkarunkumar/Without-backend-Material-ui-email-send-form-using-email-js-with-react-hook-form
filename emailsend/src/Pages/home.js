import React,{useRef,createRef} from 'react';
import { Box } from '@mui/material';
import UsingEmail from './usingEmail';
import WithoutEmail from './withoutEmail';

const Home = () => {
    return (
        <React.Fragment>
            <Box sx={{ typography:'h3', color: '#000', textAlign: 'center', paddingBottom:5,paddingTop:5  }} >Material ui email send form using react hook form</Box>

            <UsingEmail/>
            <WithoutEmail/>
            </React.Fragment>
    );
};

export default Home;