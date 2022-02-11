import { BsCircle, BsCircleFill } from 'react-icons/bs'

interface CardProp {
  index: number
  time: number
  title: string
  active: boolean
}
export default function Card(props: CardProp) {
  const margin_class = props.index === 0 ? '' : 'top-' + 12 * props.index // make items' top using index
  return (
    <div
      className={`${margin_class} mt-48 mb-2 flex items-center justify-between rounded-full border border-slate-100 px-4 py-1 shadow-md ${
        props.time <= 0 + props.index
          ? 'animate'
          : props.time >= 15
          ? ''
          : props.time >= 9 + props.index
          ? 'animate topOut'
          : 'animate topIn'
      }`}
    >
      <div className="mr-4">
        {props.active && props.time >= 9 && props.time <= 12 ? (
          <BsCircleFill className="h-4 w-4" />
        ) : (
          <BsCircle className="h-4 w-4" />
        )}
      </div>
      <span className="text-left text-xs text-purple">{props.title}</span>
    </div>
  )
}
