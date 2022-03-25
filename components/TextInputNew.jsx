import * as React from "react";
import { PlasmicTextInputNew } from "./plasmic/chat_app/PlasmicTextInputNew";

function TextInputNew_(props, ref) {
  const { plasmicProps } = PlasmicTextInputNew.useBehavior(props, ref);
  return <PlasmicTextInputNew {...plasmicProps} />;
}

const TextInputNew = React.forwardRef(TextInputNew_);

export default Object.assign(TextInputNew, {
  __plumeType: "text-input"
});
