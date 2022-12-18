import React from "react";

const Pagination = ({ postsperpage, totalposts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalposts / postsperpage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((page) => {
          return (
            <li key={page} className="page-item">
              <a onClick={()=> paginate(page)} href="!#" className="page-link">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
