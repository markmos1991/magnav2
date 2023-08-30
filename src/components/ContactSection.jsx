import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="px-6 py-20 -mx-6 rounded-4xl bg-neutral-950 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              About Me
            </h2>
            <Button href="/contact" invert>
                CV
              </Button>
            <div className="flex mt-6">
            <div className="pt-10 mt-10 text-white border-t border-white/10">
           <p>I am a multimedia designer Specialising in Web and Graphic Design. I work well in sprints and agile projects. With a degree in Communication Design with Illustration, I have a wide skillset that can be applied to a range of creative projects. The work displayed here is from both professional and personal projects. I am a qualified teacher of art and have taught Graphic Design, Photography, and Art at A-level</p>
           </div>
             
            </div>
           
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
