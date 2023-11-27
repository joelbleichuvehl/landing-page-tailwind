import Image from 'next/image'
import { Container } from './Container'
import ButtonApple from '@/public/assets/btn-apple-store.svg'
import ButtonGoole from '@/public/assets/btn-google-play.svg'
import Arrow from '@/public/assets/arrow-explorer.svg'
import ImageWoman from '@/public/assets/woman.png'

export function SectionHero() {
  return (
    <section className='w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover '>
      <Container>
        <div className='flex-1 max-w-[500px] mt-10'>
          <h1 className='text-white text-7xl font-bold mb-4'>Tenha seu banco na palma da sua mão.</h1>

          <p className='text-white text-xl max-w-[408px] mb-8'>
            Todas as operações que você precisa em um só lugar. Simples completo e feito pra você.
          </p>

          <div className='flex gap-4 mb-24'>
            <button>
              <Image src={ButtonApple} alt='' />
            </button>

            <button>
              <Image src={ButtonGoole} alt='' />
            </button>
          </div>

          <button className='flex items-center gap-2'>
            <Image src={Arrow} alt='' />
            <span className='text-white text-sm font-bold'>Continue explorando</span>
          </button>
        </div>

        <Image src={ImageWoman} alt='' className='mr-[-41px]' />
      </Container>
    </section>
  )
}
