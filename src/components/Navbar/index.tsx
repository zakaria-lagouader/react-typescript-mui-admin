import { IconButton, Paper, Typography } from "@material-ui/core"
import styled, { css } from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface Props {
    fixed?: boolean
}

const Nav = styled(Paper)<{$fixed?: boolean}>`
    width: 100%;
    height: 60px;
    background-color: #1976d2;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    border-radius: 0;

    ${props => props.$fixed && css`
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
    `}
`

const Spacer = styled.div`
    flex-grow: 1;
`

const NavbarHeight = styled.div`
    height: 60px;
`

const Navbar: React.FC<Props> = ({ fixed }) => {
    return (
        <>
        <Nav $fixed={fixed} elevation={5} >
            <IconButton style={{ color: "white" , marginRight: "1rem" }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">Logo</Typography>
            <Spacer />
            <IconButton style={{ color: "white" , marginRight: "1rem" }}>
                <NotificationsIcon />
            </IconButton>
        </Nav>
        { fixed && <NavbarHeight /> }
        </>
    )
}

export default Navbar
