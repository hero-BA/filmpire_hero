import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness7, Brightness4 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { Sidebar } from '..'
import useStyles from './styles';

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const isAuthenticated = true;

    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton color="inherit" edge="start" style={{ outline: "none" }}
                            onClick={() => setMobileOpen((prevState) => !prevState)} className={classes.menuButton} >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
                        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && "Search… "}
                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => { }}>
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : (
                            <Button color="inherit" component={Link} to={`/profile/:id`} className={classes.linkButton} onClick={() => { }}>
                                {!isMobile && <>My Movies &nbsp; </>}
                                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                            </Button>

                        )}
                    </div>
                    {isMobile && "Search… "}
                </Toolbar>
            </AppBar>
            <div>
                <nav className={classes.drawer}>
                    {isMobile ? (
                        <Drawer variant='temporary' anchor='right' open={mobileOpen} classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true }} onClose={() => setMobileOpen((prevState) => !prevState)}>
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer variant='permanent' open classes={{ paper: classes.drawerPaper }}>
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    )

}

export default NavBar;
