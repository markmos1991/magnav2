import React from 'react'

import Link from 'next/link'



import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'




export function Tiles({ children, client, className }) {
  return (


<Container>
    <FadeIn>
      

    <div className="px-6 py-24 bg-gray-900 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
    </div>

    </FadeIn>
    </Container>
  )
}
