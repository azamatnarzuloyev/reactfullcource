// import Carousel from "@component/carousel/Carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import React from "react";
import Grid from "../grid/Grid";
// import FashionCard1 from "./FashionCard1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";

export interface Section1Props {}
//
// const arrowButtonStyle = {
//   boxShadow: "none",
//   background: "transparent",
// };

const Section1: React.FC<Section1Props> = () => {
  return (
    <CategorySectionCreator>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Section2 />
          <Section4 />
          <Section5 />
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
};

export default Section1;
