import React from 'react'
import { ConfigProvider, Cell, Button, Rate } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <>
      <ConfigProvider>
        <Cell.Group>
          <Cell>
            <Rate defaultValue={3} />
          </Cell>
          <Cell>
            <Button type="primary" block>
              提交
            </Button>
          </Cell>
        </Cell.Group>
      </ConfigProvider>
    </>
  )
}

export default Demo1
