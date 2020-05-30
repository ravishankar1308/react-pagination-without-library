import React, { useEffect, useState } from "react";
import {
    Button,
    Table,
    Text,
    Card,
    Pagination,
    DropdownButton,
    Dropdown
} from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
// import Pagination from "./components/Pagination";

const DataTable = () => {
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            // .get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`)
            .then(async res => {
                const posts = await res.data;
                await setPost(posts);
                setPage(posts.length / limit);
            });
    }, []);

    const fetchData = value => {
        console.log(value);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_page=5&_limit=$(value)`)
            .then(async res => {
                const posts = await res.data;
                await setPost(posts);
                setPage(posts.length / limit);
            });
    };
    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 25, value: 25 },
        { label: 25, value: 25 }
    ];
    const [post, setPost] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(9);
    const [activePage, setActivePage] = useState(8);
    return (
        <div>
            limit:{JSON.stringify(limit)}
            <br />
            page: {JSON.stringify(page)}
            <br />
            active page: {JSON.stringify(activePage)}
            <Card>
                <Table responsive class="table table-striped">
                    <thead class="thead-dark">
                    <tr>
                        <th># ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {post.map(number => (
                        <tr>
                            <td>{number.id}</td>
                            <td>{number.title}</td>
                            <td>{number.id}</td>
                        </tr>
                    ))}

                    <tr>
                        <td>1</td>
                        {/* <td>{JSON.stringify(post)}</td> */}
                        <td>Tabzdss s sdfs fsdfs df dfsdfle cell</td>
                    </tr>
                    </tbody>
                </Table>
                <div style={{ alignSelf: "center" }}>
                    <Select
                        options={options}
                        value={limit}
                        onChange={value => fetchData(value)}
                        defaultValue={{ label: 2002, value: 2002 }}
                    />
                    <DropdownButton id="dropdown-basic-button" title={limit}>
                        <Dropdown.Item value="5" onChange={fetchData()}>
                            5
                        </Dropdown.Item>
                        <Dropdown.Item onChange={fetchData()}>10</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">25</Dropdown.Item>
                    </DropdownButton>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />

                        <Pagination.Item>{1}</Pagination.Item>
                        {/* <Pagination.Ellipsis /> */}

                        <Pagination.Item>{7}</Pagination.Item>
                        <Pagination.Item active>{activePage}</Pagination.Item>
                        <Pagination.Item>{9}</Pagination.Item>

                        {/* <Pagination.Ellipsis /> */}
                        <Pagination.Item>{page}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                    {/* <Pagination
            totalRecords={totalPost}
            pageLimit={2}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          /> */}
                </div>
            </Card>
        </div>
    );
};
export default DataTable;
