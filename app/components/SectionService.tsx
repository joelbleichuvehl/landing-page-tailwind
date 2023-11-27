import Image from 'next/image'
import { Container } from './Container'
import Phone from '@/public/assets/icon-phone.svg'
import Solutions from '@/public/assets/icon-solutions.svg'
import Options from '@/public/assets/icon-options.svg'
import Card from '@/public/assets/icon-card.svg'
import Cellphone from '@/public/assets/phone.png'
import { ServiceItem } from './ServiceItem'

export function SectionService() {
  return (
    <section className='w-full h-[965px] relative'>
      <Container>
        <div className='flex-1 max-w-[594px] pt-32'>
          <span className='text-primary-orange text-sm font-bold block mb-9'>SERVIÇOES EXCLUSIVOS</span>
          <h1 className='text-primary-gray text-[56px] font-bold leading-tight mb-6'>
            Gerencie suas finanças sem sair de casa
          </h1>
          <p className='text-lg max-w-[554px] mb-16 text-second-gray'>
            Veja como você pode cuidar de suas finanças pelo App Itaú de forma segura, rápida e o melhor, no conforto de
            sua casa.
          </p>

          <ul>
            <ServiceItem
              hasBorder={true}
              icon={Phone}
              text='Acompanhar sua conta, fazer transferências e pagamentos de onde estiver'
            />
            <ServiceItem
              hasBorder={true}
              icon={Solutions}
              text='Soluções de empréstimos e renegociações para organizar suas fianças'
            />
            <ServiceItem
              hasBorder={true}
              icon={Options}
              text='Diversas opções de investimentos de acordo com seu perfil investidor'
            />
            <ServiceItem
              hasBorder={false}
              icon={Card}
              text='Acompanhe a fatura de seu cartão de crédito e faça compras online com seu cartão virtual.'
            />
          </ul>
        </div>
      </Container>

      <div className='absolute top-0 right-0 h-full w-[35%]  flex items-center bg-gray-phone'>
        <Image src={Cellphone} alt='' className='translate-x-[-50%]' />
      </div>
    </section>
  )
}
