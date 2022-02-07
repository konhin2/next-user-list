import Router from "next/router";
const Users = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map((element, i) => {
        return (
          <li
            className="cursor-pointer list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            key={i}
            onClick={() => Router.push("/users/[id]", `/users/${element.id}`)}
          >
            <div>
              <h5>
                {element.first_name} {element.last_name}
              </h5>
              <p>Email: {element.email}</p>
            </div>
            <img
              src={element.avatar}
              alt={element.id}
              style={{ borderRadius: "50%" }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
