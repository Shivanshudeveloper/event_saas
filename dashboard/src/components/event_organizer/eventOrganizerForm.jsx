import React from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Grid,
    FormControlLabel,
    RadioGroup,
    Radio
  } from '@material-ui/core';
import { useState } from 'react';
const EventOrganizerForm = (props) => {
    const [values, setValues] = React.useState({
        title:"",
        name:"",
        location:"",
        date:"",
        pictureDescription:"",
        picture:null,
        sales_by_ticket_type:"",
        pageViews:"",
        endSales:"",
        orderBy:"",
        orderNumber:""
      });
      const [checkValue  , setCheckValue] = useState("public")
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
      const handleImageChange = (event)=>{
          console.log(URL.createObjectURL(event.target.files[0]))
          setValues({
              ...values,
              [event.target.name]: URL.createObjectURL(event.target.files[0])
          })
        }
    return (
        <>
            <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card style={{padding:"50px"}}>
          <h1>Basic Info Of the Event</h1>
        <CardHeader
          subheader="Please fill in the form."
          
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Title Of the Event"
                label="Event Title"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Name of The Organizer"
                label="Name"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Location"
                name="location"
                multiline
                rows={3}
                helperText="Enter Location of the Event"
                onChange={handleChange}
                required
                value={values.location}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Date And Time"
                name="date"
                type="datetime-local"
                onChange={handleChange}
                required
                value={values.date}
                variant="outlined"
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        
      </Card>
      <Card style={{padding:"50px"}}>
          <h1>Details of the Event</h1>
        <CardHeader
          subheader="Please fill in the form."
          
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              {/* <TextField
                fullWidth
                helperText="Picture"
                label="Choose a picture"
                name="picture"
                onChange={handleImageChange}
                required
                type="file"
                // value={values.picture}
                variant="outlined"
              /> */}
              <input
              style={{display:"none"}}
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Description of the Image"
                label="Description"
                multiline
                rows={4}
                name="pictureDescription"
                onChange={handleChange}
                required
                value={values.pictureDescription}
                variant="outlined"
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        

      </Card>
      <Card style={{padding:"50px"}}>
          <h1>Tickets Sold</h1>
        <CardHeader
          subheader="Please fill in the form."
          
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Sales By Ticket Type"
                label="Sales"
                name="sales_by_ticket_type"
                onChange={handleChange}
                required
                value={values.sales_by_ticket_type}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Page Views"
                label="Page Views"
                name="PageViews"
                onChange={handleChange}
                required
                value={values.PageViews}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="End Sales"
                label="End Sales"
                name="endSales"
                onChange={handleChange}
                required
                value={values.endSales}
                variant="outlined"
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        

      </Card>
      <Card style={{padding:"50px"}}>
          <h1>Orders</h1>
        <CardHeader
          subheader="Please fill in the form."
          
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Order Number"
                label="Order Number"
                name="orderNumber"
                onChange={handleChange}
                required
                value={values.orderNumber}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Name of the person "
                label="Ordered By"
                name="orderBy"
                onChange={handleChange}
                required
                value={values.orderBy}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Type of Ticket"
                label="Type of Ticket"
                name="ordersTypeOfTicket"
                onChange={handleChange}
                required
                value={values.ordersTypeOfTicket}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Price of Ticket"
                label="Price"
                name="ordersPriceOfTicket"
                onChange={handleChange}
                required
                value={values.ordersPriceOfTicket}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Name"
                label="Name"
                name="ordersName"
                onChange={handleChange}
                required
                value={values.ordersName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Phone Number"
                label="Number"
                name="ordersPhoneNumber"
                onChange={handleChange}
                required
                value={values.ordersPhoneNumber}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Email"
                label="Email"
                name="ordersEmail"
                onChange={handleChange}
                required
                type="email"
                value={values.ordersEmail}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Home Address"
                label="Address"
                name="ordersHomeAddress"
                onChange={handleChange}
                multiline
                rows = {3}
                required
                value={values.ordersHomeAddress}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Quantity"
                label="Quantity"
                name="ordersQuantity"
                onChange={handleChange}
                required
                value={values.ordersQuantity}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Time Of Purchase"
                label="Time"
                name="ordersTime"
                onChange={handleChange}
                required
                type="datetime-local"
                value={values.ordersTime}
                variant="outlined"
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        

      </Card>
      <Card style={{padding:"50px"}}>
          <h1>Live Video or Audio</h1>
        <CardHeader
          subheader="Please fill in the form."
          
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText=""
                label="URL"
                name="LiveURL"
                onChange={handleChange}
                required
                value={values.LiveURL}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Add Title to your video or audio"
                label="Title"
                name="LiveTitle"
                onChange={handleChange}
                required
                value={values.LiveTitle}
                variant="outlined"
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        

      </Card>
      <Card style={{padding:"50px"}}>
          <h1>Add Tickets</h1>
        <CardHeader
          subheader="Please fill in the form."
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Paid Tickets"
                label="Paid"
                name="TicketsPaid"
                onChange={handleChange}
                required
                value={values.TicketsPaid}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Free Tickets"
                label="Free"
                name="TicketsFree"
                onChange={handleChange}
                required
                value={values.TicketsFree}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Donation Tickets"
                label="Donation"
                name="TicketsDonation"
                onChange={handleChange}
                required
                value={values.TicketsDonation}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Name of Ticket"
                label="Name"
                name="TicketsName"
                onChange={handleChange}
                required
                value={values.TicketsName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Quantity of Ticket"
                label="Quantity"
                name="TicketsQuantity"
                onChange={handleChange}
                required
                value={values.TicketsQuantity}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Sales Start"
                label=""
                name="TicketsSalesStart"
                onChange={handleChange}
                required
                type="datetime-local"
                value={values.TicketsSalesStart}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Description"
                label="Description"
                multiline
                rows={3}
                name="TicketsDescription"
                onChange={handleChange}
                required
                type="datetime-local"
                value={values.TicketsDescription}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Minimum Quantity"
                label="Minimum Quantity"
                name="TicketsMinimumQuantity"
                onChange={handleChange}
                required
                value={values.TicketsMinimumQuantity}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Maximum Quantity"
                label="Maximum Quantity"
                name="TicketsMaximumQuantity"
                onChange={handleChange}
                required
                value={values.TicketsMaximumQuantity}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Display Quantity of Remaining Tickets"
                label="Display Quantity"
                name="TicketsDisplayQuantity"
                onChange={handleChange}
                required
                value={values.TicketsDisplayQuantity}
                variant="outlined"
              />
            </Grid>
            </Grid>
        </CardContent>
        <Divider />
      </Card>
      <Card style={{padding:"50px"}}>
          <h2>Who can see your event?</h2>
        <CardContent>
        <Grid
            container
            spacing={3}
          >
              <Grid
              item
              md={12}
              xs={12}
            >
              <RadioGroup aria-label="gender" name="gender1" value={checkValue} onChange={(e)=>setCheckValue(e.target.value)}>
        <FormControlLabel value="public" control={<Radio color="primary" />} label={
            <>
            <h3>Public</h3>
            <p>Shared on EventBrite and search engines</p>
            </>
        } />
        <FormControlLabel value="private" control={<Radio color="primary" />} label={
            <>
            <h3>Private</h3>
            <p>Only Available to a selected Audience</p>
            </>
        } />
        
      </RadioGroup>
            </Grid>
              <Grid
              item
              md={12}
              xs={12}
            >
              <TextField 
                fullWidth
                helperText="Your Event URL"
                label="Event URL"
                name="eventPublishURL"
                onChange={handleChange}
                required
                value={values.eventPublishURL}
                variant="outlined"
              />
              <Divider />
              <Button fullWidth variant="contained" color="primary" >
                  PUBLISH Event
              </Button>
            </Grid>
        </Grid>
        </CardContent>
        </Card>
      {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            SUBMIT
          </Button>
        </Box>   */}
    </form>
        </>
    )
}

export default EventOrganizerForm
{/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            SUBMIT
          </Button>
        </Box>   */}
