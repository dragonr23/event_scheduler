import React, { Component } from 'react';
import EventsForm from '../../components/eventsForm'
import EventsTable from '../../components/eventsTable'
import './index.css';

class Events extends Component {
  constructor() {
    super();

    this.state = {
      'data': [],
      'events': []

    }
  }

  getEvents = async(e) => {
    e.preventDefault();


    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;


    let URL = 'https://event-scheduler-backend-23.herokuapp.com/api/retrieve';


    let response = await fetch(URL, {
      "method": "GET",
      "headers": {
      'Content-Type': "application/json",
      "Year": year,

      "month": month,
      "day": day,

    }

    });
    let data = await response.json()
    data = data.events
    this.setState({ data })

    let events = data.events;

    // events.sort(function(a,b){
    //   return a.month - b.month
    // });
    //
    // events.sort(function(a,b){
    //   return a.day - b.day
    // });

    this.setState({ events })


  }


  deleteEvent = async(id) => {

    if (!window.confirm('Are you sure?')) {
      return;
    }


    let URL = 'https://event-scheduler-backend-23.herokuapp.com/api/delete';

    let response = await fetch(URL, {
      "method": "DELETE",
      "headers": {
      'Content-Type': "application/json",
      "event_id": id

      }
    });

    let data = await response.json()

    if (data.success) {
      let data = this.state.data;

      for (let i in data) {
        if (data[i].event_id == id) {
          data.splice(i, 1);
        }
      }

      this.setState({ data })
      alert('Successfully deleted the event');
    } else {
      alert('Sorry, you are forced to go. Bring vodka to make it through.')
    }



  }




  render() {
    console.log(this.state.data);
    return (
      <div className= "container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
          <h1>Get Events</h1>
          <EventsForm getEvents={this.getEvents}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
        {/* TODO: Add event table*/}
        <EventsTable
        data = {this.state.data}
        events={this.state.events}
        deleteEvent = {this.deleteEvent}/>
        </div>
      </div>
    </div>

    );
  }
}

export default Events;
