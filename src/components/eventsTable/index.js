import React, { Component } from 'react';


import './index.css';

function EventsTable(props) {
    console.log(props.data)
    return (

      <div className="row">
            <div className="col-md-12">

            <table className="table-dark table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Day</th>
                  <th>Month</th>
                  <th>Year</th>
                  <th colSpan="2">Notes</th>
                  <th> Delete </th>

                </tr>
              </thead>
              <tbody>

                {props.data &&
                  props.data.map( event =>

                    <tr key={event.event_id}>
                      <td>{event.title}</td>
                      <td>{event.day}</td>
                      <td>{event.month}</td>
                      <td>{event.year}</td>
                      <td colSpan="2">{event.notes}</td>
                      <td><button
                      className="btn btn-danger" onClick={()=> props.deleteEvent(event.event_id)}>Delete Event</button></td>

                    </tr>
                  )

                }
              </tbody>
            </table>
          </div>
        </div>
      )}

export default EventsTable;
