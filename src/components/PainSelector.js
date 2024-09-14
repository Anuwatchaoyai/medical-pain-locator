import React, { useState } from "react";

const PainSelector = ({datas, imageDefault}) => {
  const [activeJoint, setActiveJoint] = useState(null);


 
  const handleClick = (joint) => {
    setActiveJoint(joint); // set value to activeJoint in useEffect when click object
  };

  const handleOutsideClick = () => {
    setActiveJoint(null); // reset value to activeJoint when out of object 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" onClick={handleOutsideClick}>
      <div className="my-10 mx-auto flex flex-col items-center justify-center w-full max-w-screen-xl px-2.5 md:px-20">
      <h1 className="text-3xl font-bold mb-8">เลือกบริเวณที่คุณปวด</h1>
      <div className="relative w-full max-w-md mx-auto">
        <img
          src={imageDefault}
          alt="Finger"
          className="w-full h-auto object-contain"
        />

        <svg
          viewBox="0 0 828 976"
          preserveAspectRatio="xMidYMid meet"
          className="absolute w-full h-full top-0 left-0 pointer-events-none"
        >
          {datas.map((joint) => (
            <path
              key={joint.id}
              d={joint.shape}
              transform={joint.transform}
              fill="transparent"
              className="cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(joint);
              }}
            />
          ))}
        </svg>

        {/* Show highlight image */}
        {activeJoint && (
          <img
            src={`/images/${activeJoint.active}-highlight.png`}
            alt={`${activeJoint.active} Highlight`}
            className="absolute w-full h-auto top-0 left-0 object-contain pointer-events-none"
          />
        )}

        {/* Show All highlight image */}
        {activeJoint && activeJoint.active === 'all-over' && (
          datas.map((item) => (
            item && item.active !== 'all-over' && (
              <img
                key={item.id}
                src={`/images/${item.active}-highlight.png`}
                alt={`${item.active} Highlight`}
                className="absolute w-full h-auto top-0 left-0 object-contain pointer-events-none"
              />
            )
          ))
        )}

        {/* Show active image */}
        {activeJoint && activeJoint.active !== 'others' && activeJoint.active !== 'all-over' && (
          <img
            src={`/images/${activeJoint.active}-active.png`}
            alt={`${activeJoint.active} Active`}
            className="absolute w-full h-auto top-0 left-0 object-contain pointer-events-none"
          />
        )}
      </div>
      </div>
    </div>
  );
};

export default PainSelector;
