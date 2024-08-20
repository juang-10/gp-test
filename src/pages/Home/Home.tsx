import { People } from '@/data';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Home = () => {
  const pageSize = 5;
  const columns: GridColDef<(typeof People)[number]>[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      editable: false,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      editable: false,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      editable: false,
    }
  ]

  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={[pageSize]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      getRowId={(row) => row.id}
    />
  )
}
export default Home