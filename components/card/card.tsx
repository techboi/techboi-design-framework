import cardProps from './card.props'
import cardStyle from './card.module.css'

const Card = (props: cardProps) => {
  const { title, children } = props

  return (
    <div className={cardStyle.wrapper}>
      <h3 className={cardStyle.title}>
        { title } <span>-&gt;</span>
      </h3>
      {children &&
        <div className={cardStyle.children}>
          { children }
        </div>
      }
    </div>
  )
}

export default Card