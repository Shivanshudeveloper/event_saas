import React from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    TextField,
    Grid,
    Typography
  } from '@material-ui/core';
  const venueType = [

    {
        label:"Bar",
        value:"bar"
    },
    
    {
        label:"Conference Venues",
        value:"conference-venues"
    },
    {
        label:"Function Venues",
        value:"function-venues"
    },
    {
        label:"Private Dining Room",
        value:"private-dining-room"
    },
    {
        label:"Restaurant",
        value:"restaurant"
    },
    {
        label:"Venue with accommodation",
        value:"venue-with-accommodation"
    },
    {
        label:"Tiered Theatre",
        value:"tiered-theatre"
    },
    {
        label:"Unique Venues",
        value:"unique-venues"
    },
    {
        label:"Museum or Gallery",
        value:"museum-or-gallery"
    },
    {
        label:"Themed Venues",
        value:"themed-venues"
    },
    {
        label:"Rooftop",
        value:"rooftop"
    },
    {
        label:"Boat/Floating",
        value:"boat-floating"
    },
    {
        label:"Marquee site",
        value:"marquee-site"
    },


  ];
const EventType = [
    {
      "label": "Awards",
      "value": "awards"
    },
    {
      "label": "Breakfast",
      "value": "breakfast"
    },
    {
      "label": "Christening",
      "value": "christening"
    },
    {
      "label": "Cocktail Party",
      "value": "cocktail-party"
    },
    {
      "label": "Conference (multi-room)",
      "value": "conference-multi-room-"
    },
    {
      "label": "Exhibition",
      "value": "exhibition"
    },
    {
      "label": "Hens & Bucks",
      "value": "hens-&-bucks"
    },
    {
      "label": "Meeting",
      "value": "meeting"
    },
    {
      "label": "Private Party",
      "value": "private-party"
    },
    {
      "label": "Product Launch",
      "value": "product-launch"
    },
    {
      "label": "School Formal",
      "value": "school-formal"
    },
    {
      "label": "Team Building",
      "value": "team-building"
    },
    {
      "label": "Wedding Reception",
      "value": "wedding-reception"
    },
    {
      "label": "Dinner",
      "value": "dinner"
    },
    {
      "label": "18th & 21st Birthdays",
      "value": "18th-&-21st-birthdays"
    },
    {
      "label": "Lunch",
      "value": "lunch"
    },
    {
      "label": "Wake",
      "value": "wake"
    },
    {
      "label": "Wedding Ceremony",
      "value": "wedding-ceremony"
    },
    {
      "label": "Wedding Reception",
      "value": "wedding-reception"
    },
    {
      "label": "Family Fun Day",
      "value": "family-fun-day"
    }
  ]
  const venueStyle = [
    {
      "label": "Contemporary",
      "value": "contemporary"
    },
    {
      "label": "Elegant",
      "value": "elegant"
    },
    {
      "label": "Family Friendly",
      "value": "family-friendly"
    },
    {
      "label": "Blank Canvas",
      "value": "blank-canvas"
    },
    {
      "label": "Historic Building",
      "value": "historic-building"
    },
    {
      "label": "Relaxed",
      "value": "relaxed"
    },
    {
      "label": "Romantic",
      "value": "romantic"
    },
    {
      "label": "Retro",
      "value": "retro"
    },
    {
      "label": "Rustic",
      "value": "Rustic"
    },
    {
      "label": "Alfresco",
      "value": "alfresco"
    },
    {
      "label": "Vintage",
      "value": "vintage"
    },
    {
      "label": "Secluded",
      "value": "secluded"
    }
  ]
  const Features =[
    {
      "label": "Accessible Venue",
      "value": "Accessible Venue"
    },
    {
      "label": "COVID-19 Safe Plan",
      "value": "COVID-19 Safe Plan"
    },
    {
      "label": "Dance Floor",
      "value": "Dance Floor"
    },
    {
      "label": "In-house AV",
      "value": "In-house AV"
    },
    {
      "label": "Parking",
      "value": "Parking"
    },
    {
      "label": "Pillarless",
      "value": "Pillarless"
    },
    {
      "label": "Private Dining Room",
      "value": "Private Dining Room"
    },
    {
      "label": "Public Transport",
      "value": "Public Transport"
    },
    {
      "label": "Stage",
      "value": "Stage"
    },
    {
      "label": "Wi-Fi",
      "value": "Wi-Fi"
    },
    {
      "label": "Display Vehicle Access",
      "value": "Display Vehicle Access"
    },
    {
      "label": "Natural Daylight",
      "value": "Natural Daylight"
    },
    {
      "label": "Outside Space",
      "value": "Outside Space"
    },
    {
      "label": "Views",
      "value": "Views"
    },
    {
      "label": "Garden",
      "value": "Garden"
    },
    {
      "label": "Booth Seating",
      "value": "Booth Seating"
    }
  ]
  const Catering = [
    {
      "label": "In-house"
      ,"value": "In-house"
    },
    {
      "label": "All"
      ,"value": "All"
    },
    {
      "label": "BYO Caterer"
      ,"value": "BYO Caterer"
    },
    {
      "label": "Delivery Service Available"
      ,"value": "Delivery Service Available"
    }
  ]
const FreeListingForm = (props ) => {
    const [values, setValues] = React.useState({
        business:"",
        phone:"",
        email:"",
        address:"",
        website:"",
        description:"",
        photos:"",
        companyLogo:"",
        maps:"",
        capacity:"",
        venueType:"Select A Venue",
        eventType:"Select Event",
        venueStyle:"",
        feature:""
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    return (
        <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card style={{padding:"50px"}}>
          <h1>Free Listing</h1>
        <CardHeader
          subheader="Please fill the form."
          
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
                helperText="Please Enter Name Of Business"
                label="Business"
                name="Business"
                onChange={handleChange}
                required
                value={values.business}
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
                helperText="Please Enter Description about the business"
                label="Description"
                name="description"
                multiline
                rows={3}
                onChange={handleChange}
                required
                value={values.description}
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
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                required
                value={values.phone}
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
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
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
                label="Address"
                name="address"
                onChange={handleChange}
                required
                multiline
                rows={3}
                value={values.address}
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
                label="Website"
                name="website"
                onChange={handleChange}
                required
                value={values.website}
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
                label="Photos"
                name="photos"
                onChange={handleChange}
                required
                value={values.photos}
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
                label="Company Logo"
                name="companyLogo"
                onChange={handleChange}
                required
                value={values.companyLogo}
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
                label="Maps"
                name="maps"
                onChange={handleChange}
                required
                value={values.maps}
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
                label="Capacity Range"
                name="capacity"
                onChange={handleChange}
                required
                value={values.capacity}
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
                label="Select event Type"
                name="eventType"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.eventType}
                variant="outlined"
              >
                {EventType.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Venue Type"
                name="venueType"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.venueType}
                variant="outlined"
              >
                {venueType.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Venue Style"
                name="venueStyle"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.venueStyle}
                variant="outlined"
              >
                {venueStyle.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Feature"
                name="feature"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.feature}
                variant="outlined"
              >
                {Features.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Catering Option"
                name="catering"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.catering}
                variant="outlined"
              >
                {Catering.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
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
        </Box>
      </Card>
    </form>
    )
}

export default FreeListingForm
