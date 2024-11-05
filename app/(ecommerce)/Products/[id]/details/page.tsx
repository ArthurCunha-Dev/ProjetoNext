"use client";
import { useState } from "react";

export default function Details() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <button
                className="text-blue-500"
                onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Mostrar menos" : "Mostrar mais"}
                </button>
                 {showMore && 
                 `Labore, temporibus neque nesciunt
            libero faacere sequi laborum!`}
            </p>
        </div>
    );
}