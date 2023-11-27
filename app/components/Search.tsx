import Image from 'next/image'
import Icon from '@/public/assets/icon-search.svg'

export function Search() {
  return (
    <div className='flex items-center gap-2'>
      <Image src={Icon} alt='Search Icon' />
      <input
        type='text'
        className='bg-transparent outline-none text-white placeholder-white pr-5'
        placeholder='Buscar'
      />
    </div>
  )
}
