import * as React from 'react';
import { DataGrid, GridCellEditStopReasons } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
// } from '@mui/x-data-grid-generator';

export default function DisableStopEditModeOnFocusOut() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        onCellEditStop={(params, event) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
      />
    </div>
  );
}

const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Josh",
    age: 25,
    dateCreated: "2020-02-31",
    lastLogin: "Yesterday",
  },
  {
    id: 2,
    name: "Josh",
    age: 36,
    dateCreated: "2020-02-31",
    lastLogin: "Yesterday",
  },
  {
    id: 3,
    name: "Josh",
    age: 19,
    dateCreated: "2020-02-31",
    lastLogin: "Yesterday",
  },
  {
    id: 4,
    name: "Josh",
    age: 28,
    dateCreated: "2020-02-31",
    lastLogin: "Yesterday",
  },
  {
    id: 5,
    name: "Josh",
    age: 23,
    dateCreated: "2020-02-31",
    lastLogin: "Yesterday",
  },
];
