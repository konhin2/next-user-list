import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Project</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
      </Head>
      <Navigation />
      <div className="container p-4">{props.children}</div>
    </div>
  );
};

export default Container;
