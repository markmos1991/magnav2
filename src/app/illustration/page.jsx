import { useId } from 'react'
import Link from 'next/link'


import { Container } from '@/components/Container'

import { PageIntro } from '@/components/PageIntro'




export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="portfolio" title="Illustration">
        <p>Large scale murals to digital illustrations and pen drawings.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
         
        </div>
      </Container>
    </>
  )
}
