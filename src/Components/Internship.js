import React from 'react'
import { Table } from 'react-bootstrap'

export const Internship = () => {
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
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
    <tr>
      <td>1</td>
      <td > <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/></td>
      <td>Niraj</td>
      <td>03/11/1997</td>
      <td>INTERN</td>
      <td>immortal</td>
      <td>Niraj</td>
      <td>alexandar the great</td>      
      <td>Everytime</td>
      <td>There is nothing impossible to him who will try.</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>     
      <td>Jacob</td>
      <td>Thornton</td>

    </tr>
    {/* <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      
    </tr> */}
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>      
      <td>Mark</td>
      <td>Otto</td>

    </tr>
  </tbody>


</Table>


<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>
    )
}
