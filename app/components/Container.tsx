import { type } from 'os'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Container({ children }: Props) {
  return <div className='flex w-full max-w-[1246px] px-[15px] mx-auto'>{children}</div>
}
