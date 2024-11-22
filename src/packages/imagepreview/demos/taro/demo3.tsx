import React, { useState } from 'react'
import { ImagePreview, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const images = [
    {
      src: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
    },
    {
      src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
    },
    {
      src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
    },
    {
      src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
    },
  ]
  const [showPreview, setShowPreview] = useState(false)
  const [init, setInit] = useState<any>(2)
  return (
    <>
      <ImagePreview
        autoPlay
        images={images}
        visible={showPreview}
        defaultValue={init}
        onClose={() => setShowPreview(false)}
      />

      <Cell title="设置初始页码" onClick={() => setShowPreview(true)} />
    </>
  )
}
export default Demo3
