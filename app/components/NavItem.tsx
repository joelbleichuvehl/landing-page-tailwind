import Image from 'next/image'
import Arrow from '../../public/assets/arrow-down.svg'

type Props = {
  label: string
}

export function NavItem({ label }: Props) {
  return (
    <li>
      <button className='flex items-center gap-3'>
        <span className='font-bold text-white'>{label}</span>
        <Image src={Arrow} alt='Arrow dropdown' />
      </button>
    </li>
  )
}
