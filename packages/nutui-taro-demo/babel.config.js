// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const replaceIcons = require('@nutui/replace-icons')
const projectID = process.env.VITE_APP_PROJECT_ID

module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
    projectID === 'jmapp' && [
      replaceIcons({
        sourceLibrary: ['@nutui/icons-react-taro', '@nutui/icons-react'],
        targetLibrary: '@nutui/jdesign-icons-react-taro',
        iconMappings: {
          Service: 'Headphones',
          Refresh: 'Reload',
          Retweet: 'Apps',
          Top: 'BackToTop',
          Checklist: 'Check',
          CheckDisabled: 'RemoveCircleF',
          Checked: 'CheckCircleF',
          CheckNormal: 'Circle',
          Fabulous: 'ThumbsUp',
          Image: 'Photo',
          Failure: 'Apps',
          ImageError: 'PhotoError',
          Marshalling: 'EyeSlash',
          Tips: 'InformationCircle',
          MaskClose: 'CloseCircleF',
          Loading1: 'Loading',
          More: 'MoreHorizontal',
          Notice: 'Bell',
          Category: 'List',
          CheckChecked: 'CircleDot',
          HeartFill: 'HeartF',
          StarFill: 'StarF',
          Photograph: 'Camera',
          People: 'UserCircle',
          Del: 'Trash',
          Find: 'Compass',
          TriangleDown: 'CaretDownF',
          JoySmile: 'SmileJoy',
          Jd: 'Apps',
          Success: 'CheckCircle',
          TriangleUp: 'CaretUpF',
        },
      }),
    ],
  ].filter(Boolean),
}
