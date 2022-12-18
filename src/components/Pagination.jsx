// import axios from "axios";
import React from "react";
// Don't forget to add the useState and useEffect hooks though

const Pagination = ({ postsperpage, totalposts, paginate }) => {
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //   const getUsers = async (e)=>{
    //     const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    //     setUsers(res.data)
    //   }
    
    //   getUsers()
    // }, [])
    // console.log(users)
    
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
