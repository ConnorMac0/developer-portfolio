import React from "react";

function Footer() {
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 text-grey-900">
                &copy; {new Date().getFullYear()} Connor Maclachlan. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;