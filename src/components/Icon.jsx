import React, { useState } from "react";

function Icon() {
    const [liked, setLiked] = useState(false);

    function handleClick() {
      setLiked(!liked);
  }

  return (
    <div>
    {liked ? (
        <i class="bi bi-suit-heart" onClick={handleClick} style={{color: "#574ae8", cursor: "pointer" }} />
      ) : (
        <i class="bi bi-suit-heart-fill" onClick={handleClick} style={{color: "#574ae8",  cursor: "pointer" }} />
      )}
    </div>
  );

}

export default Icon;
