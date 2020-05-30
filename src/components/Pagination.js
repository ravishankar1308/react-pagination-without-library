import React from "react";
import Select from "react-select";

const Pagination = ({
                        postsPerPage,
                        totalPosts,
                        paginate,
                        onchange,
                        setPostsPerPage
                    }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const options = [
        { label: 10, value: 10 },
        { label: 25, value: 25 },
        { label: 50, value: 50 },
        { label: "All", value: totalPosts }
    ];

    return (
        <div className="box">
            <div style={{ margin: "0px 20px", width: "80px" }}>
                <Select
                    placeholder={postsPerPage}
                    options={options}
                    value={postsPerPage}
                    onChange={item => setPostsPerPage(item.value)}
                    defaultValue={{ label: 5, value: 5 }}
                />
            </div>

            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
