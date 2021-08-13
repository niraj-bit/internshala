import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
const axios = require('axios');



export const Internship = () => {

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getData();
  },[]);


  function getQuotes(url) {
    // console.log(url);
    // console.log("getData");

    const promise = axios.get(url)

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    // return it
    return dataPromise

  }

  function getData() {
    console.log("getData");
    axios.get('https://www.breakingbadapi.com/api/characters')
      .then(function (response) {
        // handle success
        // console.log("response.data");
        // console.log(response.data);

        var bar = new Promise((resolve, reject) => {
          response.data.forEach((element, index, array) => {
            // console.log("element")
            // console.log(element)
            getQuotes('https://www.breakingbadapi.com/api/quotes/' + element.char_id).then(data => {
              // console.log("getQuotes")
              // console.log(data)
              var quotes = [];
              data.forEach(ele => {
                // console.log(ele.quote)
                quotes.push(ele.quote)
              });
              element.quotes = quotes;
            });
            if (index === response.data.length -1) resolve();
            // console.log(response.data);
          });
        });
        bar.then(() => {
          console.log("All done");
          setResult(response.data);
          setIsLoading(false);
        });
        
    
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {

      });
  }

  return (
    <div>
    <div class="container-md">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image </th>
            <th>Name </th>
            <th>Date of Birth</th>
            <th>Occupation</th>
            <th>Status</th>
            <th>Nickname</th>
            <th>Actor </th>
            <th>Seasons</th>
            <th>quotes</th>
          </tr>
        </thead>
        <tbody>
          {
            (!isLoading) ?
              result.map((data, i) => {
                console.log("Entered");
                console.log(data);
                // Return the element. Also pass key     
                return (
                  <tr key={data} answer={data} >
                    <td > <img className="rounded-circle" src={data.img} alt="Generic placeholder image" width="140" height="140" /></td>
                    <td>{data.name}</td>
                    <td>{data.birthday}</td>
                    <td>
                      <ul>
                        {data.occupation.map((o, i) => { 
                          return (<li>{o}</li>)
                        })}
                      </ul>

                    </td>
                    <td>{data.status}</td>
                    <td>{data.nickname}</td>
                    <td>{data.portrayed}</td>
                    <td>
                      <ul>
                        {data.appearance.map((o, i) => {
                          return (<li>{o}</li>)
                        })}
                      </ul>
                    </td>
                    <td>
                      {/* <ul>
                        {data.quotes.map((o, i) => {
                          return (<li>{o}</li>)
                        })}
                      </ul> */}
                    </td>
                  </tr>
                )
              }) :
              <span></span>
          }
        </tbody>


      </Table>


      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  )
}
