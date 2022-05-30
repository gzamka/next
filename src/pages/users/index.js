import { useEffect } from 'react';
import { DataGrid, GridCellEditStopReasons } from '@mui/x-data-grid';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'


export default function DisableStopEditModeOnFocusOut() {
let row = [];
  useEffect(() => {

    const fetchdata = async () => {
      
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        row.push(...row, {
          id: doc.data().id,
          categories: doc.data().categories,
          price: doc.data().price,
          description: doc.data().description,
        })
      })
    }
    fetchdata();

  }, [])

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={row}
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
  { field: 'name', headerName: 'Categories', width: 180, editable: true },
  { field: 'age', headerName: 'Product Name', width:180, type: 'number', editable: true },
  {
    field: 'price',
    headerName: 'Product Price',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
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
