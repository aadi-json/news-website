import React, { useEffect } from "react";

function Card({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item, index) => {
        if (!item.urlToImage || item.length === 0) {
          return (
            <div>
              <h1>news not found</h1>
            </div>
          );
        } else {
          return (
            <div
              className="max-w-xs rounded-lg border border-gray-300 shadow-lg overflow-hidden bg-white p-3"
              key={index}
            >
              <img
                src={item.urlToImage || "https://via.placeholder.com/200x100"}
                alt="Card image"
                className="w-full h-[300px] object-cover p-4"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description || "This is a short description."}
                </p>

                <a
                  href={item.url}
                  className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out "
                >
                  Read more
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
