import { Table, Button } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    const getData = () => {
        axios.get(`https://63e279db109336b6cb08b04f.mockapi.io/europool-actors`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const onDelete = (id) => {
        axios.delete(`https://63e279db109336b6cb08b04f.mockapi.io/europool-actors/${id}`)
        .then(() => {
            getData();
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Table.Cell> 
                                <Link to='/update'>
                                    <Button onClick={() => setData(data)}>Update</Button>
                                </Link>
                            </Table.Cell>  
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell> 
                        </Table.Row>
                    )})}
                </Table.Body>
            </Table>

            <Link to="/create">
                <Button className="right floated">Create Actor</Button>
            </Link>                    
                
        </div>
    )
}