'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TestComponent } from '@/components/TestComponent/TestComponent';
import { useGetProductsQuery } from '@/store/services/Products';

export const products = [
  { id: 1, name: 'grechka', calories: 100 },
  { id: 2, name: 'grechka1', calories: 100 },
  { id: 3, name: 'grechka2', calories: 100 },
];

export default function Products() {

  const { data: products, isLoading } = useGetProductsQuery();
  console.log(products);
  return (
    <>
      <TestComponent />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.caloriesPerGram}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
