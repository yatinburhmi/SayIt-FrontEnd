import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid, Button, Modal, Box} from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts} from './actions/posts';
import sayIt from './images/sayit.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpenModal] = useState(false)

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Say It!</Typography>
                <img className={classes.image} src={sayIt} alt="facebook" height={60} /> 
                <Button onClick={handleOpenModal} type="primary">Create Post</Button>
            </AppBar>
            <Grow in>
                <Container>
                    <Modal
                        open={open}
                        onClose={handleCloseModal}>
                            <Box className={classes.modal}>
                            <Form/>
                            </Box>
                        </Modal>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Posts />
                    </Grid>
                </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;