import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "react-bootstrap";
const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    if (loading) {
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">Pagination Example</h1>
            <Posts posts={currentPosts} />
            <div className="box">
                <Pagination
                    setPostsPerPage={setPostsPerPage}
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default App;
