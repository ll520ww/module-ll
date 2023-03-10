import React, {useEffect, useState} from 'react'
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

interface DragElementProps {
  /**
   数据来源
   */
  dataSource: Array<any>,
  /**
   要拖拽的组件
   */
  element: (params?: any) => JSX.Element,
  /**
   拖动后组件的样式
   */
  activeItemStyle?: any,
  /**
   组件的默认样式
   */
  defaultItemStyle?: any
  /**
   拖动后的背景样式
   */
  backgroundActiveColor?: any,
  /**
   默认背景样式
   */
  backgroundColor?: any

}

const DragElement = (props: DragElementProps) => {
  const {
    dataSource = [],
    element,
    activeItemStyle = {
      background: "#7bb9f2",
      padding: "16px",
      margin: "0 0 8px 0",
    },
    backgroundActiveColor = {
      padding: "8px",
      width: 250,
      background: "#ffffff"
    },
    defaultItemStyle = {
      background: "#ffffff",
      padding: "16px",
      margin: `0 0 8px 0`,
    },
    backgroundColor = {
      padding: "8px",
      width: 250,
      background: "gray"
    }
  } = props
  const [list, setList] = useState<any>([])
  const [items, setItems] = useState<any>([])
  useEffect(() => {
    setList(dataSource)
  }, [])

  const recorder = (list: Array<any>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = recorder(
      list,
      result.source.index,
      result.destination.index
    );
    setItems(items)
    setList(items)
  }
  return <div>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided: any, snapshot: any) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={
              snapshot.isDraggingOver ? backgroundActiveColor : backgroundColor
            }

          >
            {(items.length > 0 ? items : list).map((item: any, index: number) => (
              <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                {(provided: any, snapshot: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={snapshot.isDragging ? {
                      userSelect: "none",
                      ...provided.draggableProps.style,
                      ...activeItemStyle
                    } : {
                      userSelect: "none",
                      ...provided.draggableProps.style,
                      ...defaultItemStyle
                    }}
                  >
                    {element(item)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
}
export default DragElement
