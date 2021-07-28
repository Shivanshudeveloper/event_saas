import React from 'react'
import { Box, Container , Table ,TableRow , TableHead ,TableCell } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import FreeListingForm from 'src/components/event_supplier/FreeListingForm';
import PaidListingForm from 'src/components/event_supplier/PaidListingForm';
const EventSupplier = () => {
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
      <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
            <FreeListingForm />
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
            <PaidListingForm />
        </Box>
      </Container>
      
    </Box>
  </>
    )
}

export default EventSupplier
