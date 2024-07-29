import ReactCardFlip from 'react-card-flip';
import {useState} from 'react'


export function FlipCard({text, isFlippedInitial}) {

  const [isFlipped, setIsFlipped] = useState(isFlippedInitial)
  const handleClick = () => {
    setIsFlipped((prev) => !prev)
  }

  return ( 
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" containerClassName="size-48 hover:cursor-pointer	">
      <div className='w-full h-full bg-lime-500 hover:bg-lime-200	' onClick={handleClick}>
      </div>

      <div className='w-full h-full  border-2	border-lime-500	border-dashed	flex flex-column' onClick={handleClick}>
        <p className="m-auto">{text}</p>
      </div>
    </ReactCardFlip>
  )
}
