import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
const axios = require('axios');



export const Internship = () => {

  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = [];
    const { data } = await axios.get('https://www.breakingbadapi.com/api/characters');

    await Promise.all(data.map(async (ele) => {
      await axios.get('https://www.breakingbadapi.com/api/quotes/' + ele.char_id)
        .then(data => {
          ele.quotes = data.data;
          result.push(ele);
        });

    }));
    setResult(result);
    setIsLoading(false);
  }

  return (
    <div>
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
                console.log(data.quotes);
                // Return the element. Also pass key     
                return (
                  <tr key={data} answer={data} >
                    <td > <img className="rounded-circle" src={data.img} alt="Generic placeholder image" width="140" height="140" /></td>
                    <td>{data.name}</td>
                    <td>{data.birthday}</td>
                    <td>
                      <ul>
                        {
                          data.occupation?.map((o, i) => {
                            return (<li>{o}</li>)
                          })
                        }
                      </ul>

                    </td>
                    <td>{data.status}</td>
                    <td>{data.nickname}</td>
                    <td>{data.portrayed}</td>
                    <td>
                      <ul>
                        {data.appearance?.map((o, i) => {
                          return (<li>{o}</li>)
                        })}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {
                          data.quotes?.map((o, i) => {
                            return (<li>{o.quote}</li>)
                          })
                        }
                      </ul>
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
  )
}
