import clsx from 'clsx'

import gridStyle from './grid.module.css'
import GridProps from './grid.props'

const Grid = (props: GridProps) => {
  const { children, gap, layout } = props

  // md-col-3 lg-col-3 sm-col-3

  return (
    <div
      className={clsx({
        [gridStyle.wrapper]: true,
        [gridStyle.grid2]: layout == 'grid2',
        [gridStyle.grid3]: layout == 'grid3',
        [gridStyle.goldenGrid]: layout == 'golden-grid',
        [gridStyle.silverGrid]: layout == 'silver-grid'
      })}
      style={{ gap: gap }}
    >
      { children }
    </div>
  )
}

export default Grid