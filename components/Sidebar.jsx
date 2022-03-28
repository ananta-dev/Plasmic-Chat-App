// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicSidebar } from "./plasmic/chat_app/PlasmicSidebar";
import { useRouter } from "next/router";

function Sidebar_(props, ref) {
    const router = useRouter();

    return (
        <PlasmicSidebar
            root={{ ref }}
            {...props}
            headerProfile={{
                onClick: () => {
                    router.push("/profile");
                },
            }}
        />
    );
}

const Sidebar = React.forwardRef(Sidebar_);

export default Sidebar;
