import * as React from "react";
import { supabase } from "../utils/supabaseClient";
import { PlasmicUploadAvatar } from "./plasmic/chat_app/PlasmicUploadAvatar";

function UploadAvatar_({ onUpload, ...props }, ref) {
    const [uploadError, setUploadError] = React.useState("");
    const [uploading, setUploading] = React.useState(false);
    const [avatarUrl, setAvatarUrl] = React.useState("");

    const handleUploadImage = async e => {
        try {
            setUploading(true);
            setUploadError("");

            if (!e.target.files || !e.target.files.length) {
                setUploadError("Please select a file to upload!");
                return;
            }

            const file = e.target.files[0];
            const fileExt = file.name.split(".").pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            let { error } = await supabase.storage
                .from("avatars")
                .upload(filePath, file);

            if (error) {
                setUploadError(error?.message);
                return;
            }

            let { publicURL, error: publicURLError } = await supabase.storage
                .from("avatars")
                .getPublicUrl(filePath);
            if (publicURLError) {
                setUploadError(publicURLError?.message);
                return;
            }

            setAvatarUrl(publicURL);
            onUpload && onUpload(publicURL);
        } catch (err) {
            setUploadError(err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <PlasmicUploadAvatar
            root={{
                wrapChildren: children => {
                    return (
                        <label htmlFor='userProfileAvatar'>
                            {children}
                            <input
                                id='userProfileAvatar'
                                type={"file"}
                                accept='image/*'
                                style={{ display: "none" }}
                                onChange={handleUploadImage}
                            />
                        </label>
                    );
                },
            }}
            {...props}
            avatar={{
                imageUrl: avatarUrl,
            }}
            isError={!!uploadError}
            errorMessage={uploadError}
            uploading={uploading}
        />
    );
}

const UploadAvatar = React.forwardRef(UploadAvatar_);

export default UploadAvatar;
