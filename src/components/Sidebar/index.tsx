import { Paper } from '@material-ui/core'
import styled from "styled-components"

const Side = styled(Paper)`
    width: 240px;
    border-radius: 0;
    height: calc(100vh - 60px);
    background-color: white;
`


const Sidebar = () => {
    return (
        <Side elevation={3}>
            
        </Side>
    )
}

export default Sidebar
