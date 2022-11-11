// import Box from "@component/Box";
import Section10 from "@component/home-1/Section10";
// import Section11 from "@component/home-3/Section11";
import Section6 from "@component/home-1/Section6";
import Section2 from "@component/home-1/Section2";
import Section3 from "@component/home-1/Section3";

import Section7 from "@component/home-1/Section7";
import Section8 from "@component/home-1/Section8";
import Section9 from "@component/home-1/Section9";
// import Navbar1 from "@component/navbar/Navbar1";
import { Fragment } from "react";
import Section1 from "../components/home-1/Section1";

import AppLayout from "../components/layout/AppLayout";

import {useQuery} from '@apollo/client';
import { VIEWER } from '../apollo/client/queries';

const Index = () => {
    const { data } = useQuery(VIEWER);
    const viewer = data?.viewer;
    console.log(viewer)
  return (
    <Fragment>
      {/* <Navbar1 /> */}
     
      {/* <Box my="2rem"> */}
      <Section1 />
      <Section10 />
      <Section2 />
      <Section3 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      {/* <Section11 /> */}
      {/* </Box> */}
    </Fragment>
  );
};

Index.layout = AppLayout;

export default Index;
