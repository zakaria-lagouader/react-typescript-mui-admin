import Navbar from './components/Navbar'
import { Button, Typography } from '@material-ui/core'
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import MaterialTable from "material-table"
import { useQuery } from 'react-query';
import { getData } from './api/api-routes';
import { mapUsersToTable } from './utils/mapdata';
import Sidebar from './components/Sidebar';

const HeaderSection = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageTitle = styled(Typography)`
  font-weight: bold;
`

const Layout = styled.div`
  display: flex;
  overflow: hidden;
  height: calc(100vh - 60px);
`

const Content = styled.div`
  flex: 1;
  padding: 0 2rem;
  overflow-y: scroll;
`

const Footer = styled.div`
  text-align: center;
  padding: 25px;
  font-size: 1rem;
  color: #383838;
`

const columns = [
  {title: 'Full Name', field: 'fullName'},
  {title: 'Phone', field: 'phone'},
  {title: 'Email', field: 'email'},
  {title: 'Adress', field: 'adress'},
  {title: 'IBAN', field: 'iban'},
  {title: 'BIC', field: 'bic'},
]

const App = () => {
  
  const {data, isLoading} = useQuery("getusers", getData, {
    refetchOnWindowFocus: false, //refetch when window comes to focus
    refetchOnReconnect: false, //refetch when browser reconnects to server
    refetchOnMount: false //refetch when component mounts
  })

  return (
    <>
      <Navbar fixed />
      <Layout>
        <Sidebar />
        <Content>
            <HeaderSection>
              <PageTitle variant="h3">Clients info</PageTitle>
              <Button variant="outlined" color="primary" endIcon={<AddIcon />}>Add client</Button>
            </HeaderSection>
            <MaterialTable
              columns={columns}
              isLoading={isLoading}
              data={mapUsersToTable(data?.data)}
              options={{
                search: false,
                showTitle: false,
                toolbar: false,
                draggable: false,
                emptyRowsWhenPaging: false,
                pageSizeOptions: [15, 30, 50, 100],
                pageSize: 15
              }}
            />
            <Footer><b>LOGO</b>  &copy; 2021</Footer>
        </Content>
      </Layout>
    </>
  )
}

export default App
