import React from 'react'
import {DragElement} from "module-ll"
import {dataSource} from "./json";

export default function () {
  const box = (props?: any) => {
    return <div>
      {props.content}
    </div>
  }
  return <div>
    <DragElement
      dataSource={dataSource}
      element={box}
    ></DragElement>
  </div>
}
