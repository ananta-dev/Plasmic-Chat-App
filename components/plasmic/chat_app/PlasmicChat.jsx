// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fvjeJAc2KXTwtdHurp6o8v
// Component: ZvWObp4tOu
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: z8VugZWSJM/component
import ChatMessage from "../../ChatMessage"; // plasmic-import: 67lO5l62AF/component
import TextInput from "../../TextInput"; // plasmic-import: A0Od_rnAuEc/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_chat_app.module.css"; // plasmic-import: fvjeJAc2KXTwtdHurp6o8v/projectcss
import sty from "./PlasmicChat.module.css"; // plasmic-import: ZvWObp4tOu/css

export const PlasmicChat__VariantProps = new Array();

export const PlasmicChat__ArgProps = new Array();

function PlasmicChat__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return true ? (
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, sty.header)}
      >
        <Avatar
          data-plasmic-name={"roomAvatar"}
          data-plasmic-override={overrides.roomAvatar}
          className={classNames("__wab_instance", sty.roomAvatar)}
          size={"_60"}
        />

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Enter some text"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        hasGap={true}
        className={classNames(projectcss.all, sty.body)}
      >
        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage__svUdN)}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage__naF6Z)}
          isSent={true}
        />

        <ChatMessage
          className={classNames("__wab_instance", sty.chatMessage__i7Ty3)}
        />
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        hasGap={true}
        className={classNames(projectcss.all, sty.footer)}
      >
        <TextInput
          data-plasmic-name={"messageTextInput"}
          data-plasmic-override={overrides.messageTextInput}
          className={classNames("__wab_instance", sty.messageTextInput)}
          placeholder={"Type your message here..."}
        />

        <p.PlasmicImg
          data-plasmic-name={"sendIcon"}
          data-plasmic-override={overrides.sendIcon}
          alt={""}
          className={classNames(sty.sendIcon)}
          displayHeight={"24px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"24px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/chat_app/images/sendpng.png",
            fullWidth: 512,
            fullHeight: 512,
            aspectRatio: undefined
          }}
        />
      </p.Stack>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "roomAvatar",
    "text",
    "body",
    "footer",
    "messageTextInput",
    "sendIcon"
  ],

  header: ["header", "roomAvatar", "text"],
  roomAvatar: ["roomAvatar"],
  text: ["text"],
  body: ["body"],
  footer: ["footer", "messageTextInput", "sendIcon"],
  messageTextInput: ["messageTextInput"],
  sendIcon: ["sendIcon"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChat__ArgProps,
      internalVariantPropNames: PlasmicChat__VariantProps
    });

    return PlasmicChat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChat";
  } else {
    func.displayName = `PlasmicChat.${nodeName}`;
  }
  return func;
}

export const PlasmicChat = Object.assign(
  // Top-level PlasmicChat renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    roomAvatar: makeNodeComponent("roomAvatar"),
    text: makeNodeComponent("text"),
    body: makeNodeComponent("body"),
    footer: makeNodeComponent("footer"),
    messageTextInput: makeNodeComponent("messageTextInput"),
    sendIcon: makeNodeComponent("sendIcon"),
    // Metadata about props expected for PlasmicChat
    internalVariantProps: PlasmicChat__VariantProps,
    internalArgProps: PlasmicChat__ArgProps
  }
);

export default PlasmicChat;
/* prettier-ignore-end */
