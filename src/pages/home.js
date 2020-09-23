import React from "react";

import { FaqsContainer } from "../containers/faqs.container";
import { FooterContainer } from "../containers/footer.container";
import { JumbotronContainer } from "../containers/jumbotron.container";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
