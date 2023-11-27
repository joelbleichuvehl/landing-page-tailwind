import Image from 'next/image'

type Props = {
  icon: string
  text: string
  hasBorder: boolean
}
export function ServiceItem({ icon, text, hasBorder }: Props) {
  return (
    <li className={`flex items-center gap-9 pb-9 mt-10 ${hasBorder ? 'border-b-[1px] border-opacity-gray' : ''}`}>
      <div className='w-7 h-7 flex items-center justify-center'>
        <Image src={icon} alt='' />
      </div>

      <p className='flex-1 text-txt-gray pr-2'>{text}</p>
    </li>
  )
}
