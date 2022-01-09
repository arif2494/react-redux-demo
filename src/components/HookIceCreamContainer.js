import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const HookIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Cream(Hook) : {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
};

export default HookIceCreamContainer;
