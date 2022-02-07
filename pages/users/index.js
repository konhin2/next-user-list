import Head from "next/head";
import Container from "../../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../../components/Users";

const Index = ({ users }) => {
  return (
    <Container>
      <Head>
        <title>Users</title>
      </Head>
      <Users users={users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  return { users: data.data };
};

export default Index;
