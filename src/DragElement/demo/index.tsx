import React from 'react'
import {DragElement} from "module-ll"
import {dataSource} from "./json";

export default function () {
  const ipt = (props?: any) => {
    return <div>
      {props.content}
    </div>
  }
  return <div>
    <DragElement
      dataSource={dataSource}
      element={ipt}
    ></DragElement>
  </div>
}
