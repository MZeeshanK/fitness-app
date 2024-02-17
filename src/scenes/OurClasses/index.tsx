import { ClassType, SelectedPage } from "@/shared/types"
import image1 from '/assets/image1.png'
import image2 from '/assets/image2.png'
import image3 from '/assets/image3.png'
import image4 from '/assets/image4.png'
import image5 from '/assets/image5.png'
import image6 from '/assets/image6.png'
import { motion } from "framer-motion"
import Htext from "@/shared/Htext"
import Class from "./Class"


const classes: ClassType[] = [
  {
    name:'Weight Training Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi alias sunt, sed tempora recusandae temporibus porro pariatur? Veritatis facilis minus quibusdam nulla',
    image: image1,
  },
  {
    name:'Yoga Classes',
    image: image2,
  },
  {
    name:'Ab Core Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi alias sunt, sed tempora recusandae temporibus porro pariatur? Veritatis facilis minus quibusdam nulla',
    image: image3,
  },
  {
    name:'Adventure Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi alias sunt, sed tempora recusandae temporibus porro pariatur? Veritatis facilis minus quibusdam nulla',
    image: image4,
  },
  {
    name:'Fitness Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi alias sunt, sed tempora recusandae temporibus porro pariatur? Veritatis facilis minus quibusdam nulla',
    image: image5,
  },
  {
    name:'Training Classes',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi alias sunt, sed tempora recusandae temporibus porro pariatur? Veritatis facilis minus quibusdam nulla',
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value : SelectedPage ) => void
}

export default function OurClasses({setSelectedPage}: Props) {
  return (
<section id='ourclasses' className="w-full bg-primary-100 py-40">
  <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
  className="mx-auto w-5/6 "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}

  >

    <div className="md:w-3/5">
      <Htext>our classes</Htext>
      <p className="py-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi alias sunt, sed tempora recusandae temporibus porro pariatur? Veritatis facilis minus quibusdam nulla, optio non nemo modi sequi provident quo excepturi nostrum ab saepe deleniti consectetur iusto dolor suscipit rerum assumenda! Incidunt inventore odit amet. Ad error optio minima corrupti natus.
      </p>
    </div>
  </motion.div>

  <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
    <ul className="whitespace-nowrap">
      {
        classes.map((item, index) => (
          <Class key={`${item.name}-${index}`} item={item} />
        ))
      }

    </ul>

  </div>

</section>
  )
}
