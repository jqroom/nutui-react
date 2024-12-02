import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const Demo5 = () => {
  return (
    <Grid reverse>
      {Array.from({ length: 4 }, (_, index) => (
        <Grid.Item key={index} text="文字">
          <Image />
        </Grid.Item>
      ))}
    </Grid>
  )
}
export default Demo5
