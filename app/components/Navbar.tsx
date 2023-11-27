import Image from 'next/image'
import Logo from '@/public/assets/logo.svg'
import User from '@/public/assets/icon-user.svg'
import { NavItem } from './NavItem'
import { Search } from './Search'
import { Container } from './Container'

export function Navbar() {
  return (
    <header className='relative w-full h-20 bg-primary-orange flex items-center'>
      <div className='absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0'></div>

      <Container>
        <div className='flex flex-1 items-center justify-between'>
          <div className='flex items-center  gap-16 '>
            <Image src={Logo} alt='Logo' />

            <ul className='flex items-center gap-14'>
              <NavItem label='Para você' />
              <NavItem label='Para empresas' />
              <NavItem label='Serviços' />
              <NavItem label='Ajuda' />
            </ul>
          </div>

          <Search />
        </div>

        <button className='flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10'>
          <Image src={User} alt='Icon User' />
          <span className='text-white font-bold'>Acessar conta</span>
        </button>
      </Container>
    </header>
  )
}
