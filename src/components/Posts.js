import React from "react";
import {
    Table
} from "react-bootstrap";

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <Table responsive className="table table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>

                        {item.body.length > 100 ? (
                            <td>{item.body.substr(0, 96)} ...</td>
                        ) : (
                            <td>{item.body}</td>
                        )}
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Posts;
