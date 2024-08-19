import { People } from '@/data';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';


const Home = () => {
  const pageSize = 5;
  const columns: GridColDef<(typeof People)[number]>[] = [{
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>
  }]

  return (
    <div>
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
      />
    </div>
  )
}
export default Home