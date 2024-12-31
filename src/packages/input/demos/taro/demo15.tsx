import { Marshalling, Search } from '@nutui/icons-react-taro'
import { Input } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo15 = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          padding: '0 10px',
        }}
      >
        <Search />
        <Input
          placeholder="请输入内容"
          style={{ '--nutui-input-padding': '10px' }}
        />
        <Marshalling />
      </div>
    </>
  )
}
export default Demo15
