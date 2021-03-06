/**
 * 说明：懒加载页面容器组件，可以在这里处理统一的路由守卫，页面切换动画等工作
 */
import React from 'react'

interface Props {
  path: string
}

const AsyncPage: React.FunctionComponent<Props> = (props) => {
  const Component = React.lazy(() => import('../../pages' + props.path))
  return (
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
}

export default AsyncPage
