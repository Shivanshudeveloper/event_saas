import React from 'react'
import { Box, Container , Table ,TableRow , TableHead ,TableCell } from '@material-ui/core';
import { Helmet } from 'react-helmet';
const EventAttendies = () => {
    return (
        <>
    <Helmet>
    <title>Event</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container>
      <Container maxWidth="lg" style={{backgroundColor:"white"}}>
      <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Event Name
                </TableCell>
                <TableCell>
                  Event Category
                </TableCell>
                <TableCell>
                  Event Place
                </TableCell>
                <TableCell>
                  Event Date and Time
                </TableCell>
                <TableCell>
                  Download Tickets
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </Container>
      </Container>
      
    </Box>
  </>
    )
}

export default EventAttendies
