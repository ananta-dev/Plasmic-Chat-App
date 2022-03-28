// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fvjeJAc2KXTwtdHurp6o8v
// Component: z8VugZWSJM
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_chat_app.module.css"; // plasmic-import: fvjeJAc2KXTwtdHurp6o8v/projectcss
import sty from "./PlasmicAvatar.module.css"; // plasmic-import: z8VugZWSJM/css

export const PlasmicAvatar__VariantProps = new Array("isEmpty", "size");

export const PlasmicAvatar__ArgProps = new Array("imageUrl", "prefixText");

function PlasmicAvatar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (hasVariant(variants, "isEmpty", "isEmpty") ? true : true) ? (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisEmpty]: hasVariant(variants, "isEmpty", "isEmpty"),
          [sty.rootsize__45_isEmpty]:
            hasVariant(variants, "isEmpty", "isEmpty") &&
            hasVariant(variants, "size", "_45"),
          [sty.rootsize__60_isEmpty]:
            hasVariant(variants, "isEmpty", "isEmpty") &&
            hasVariant(variants, "size", "_60")
        }
      )}
    >
      {(hasVariant(variants, "isEmpty", "isEmpty") ? true : true) ? (
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img, {
            [sty.imgisEmpty]: hasVariant(variants, "isEmpty", "isEmpty"),
            [sty.imgsize__45]: hasVariant(variants, "size", "_45"),
            [sty.imgsize__60]: hasVariant(variants, "size", "_60")
          })}
          displayHeight={
            hasVariant(variants, "size", "_45")
              ? "45px"
              : hasVariant(variants, "size", "_60")
              ? "60px"
              : "80px"
          }
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={
            hasVariant(variants, "size", "_45")
              ? "45px"
              : hasVariant(variants, "size", "_60")
              ? "60px"
              : "80px"
          }
          displayMinWidth={
            hasVariant(variants, "size", "_45")
              ? "45px"
              : hasVariant(variants, "size", "_60")
              ? "60px"
              : "80px"
          }
          displayWidth={
            hasVariant(variants, "size", "_45")
              ? "45px"
              : hasVariant(variants, "size", "_60")
              ? "60px"
              : "80px"
          }
          loading={"lazy"}
          src={args.imageUrl}
        />
      ) : null}
      {(hasVariant(variants, "isEmpty", "isEmpty") ? true : true) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxisEmpty]: hasVariant(variants, "isEmpty", "isEmpty")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "A",
            value: args.prefixText,
            className: classNames(sty.slotTargetPrefixText, {
              [sty.slotTargetPrefixTextisEmpty]: hasVariant(
                variants,
                "isEmpty",
                "isEmpty"
              ),

              [sty.slotTargetPrefixTextsize__45_isEmpty]:
                hasVariant(variants, "isEmpty", "isEmpty") &&
                hasVariant(variants, "size", "_45")
            })
          })}
        </div>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "img", "freeBox"],
  img: ["img"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAvatar__ArgProps,
      internalVariantPropNames: PlasmicAvatar__VariantProps
    });

    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatar";
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */