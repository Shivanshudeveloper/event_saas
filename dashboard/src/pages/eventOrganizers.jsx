import React from 'react'
import { Helmet  } from 'react-helmet';
import {Box , Container} from "@material-ui/core"
import EventOrganizerForm from 'src/components/event_organizer/eventOrganizerForm';
const EventOrganizers = () => {
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
          <EventOrganizerForm />
        </Box>
      </Container>
      
      
    </Box>
  </>
    )
}

export default EventOrganizers
