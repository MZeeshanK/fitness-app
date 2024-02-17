import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "/assets/ContactUsPageGraphic.png";

import Htext from "@/shared/Htext";

const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
const EMAIL_ID = import.meta.env.VITE_EMAIL_ID;

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext className="capitalize">
            <span className="text-primary-500">JOIN NOW</span> to get in shape
          </Htext>

          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            et ullam aut asperiores repudiandae dolore corporis exercitationem
            quisquam dolorem doloribus excepturi eius, laborum, aspernatur,
            ratione sequi? Commodi necessitatibus maiores velit minima officia,
            tempore sequi distinctio nostrum praesentium, qui laboriosam nisi
            ipsa, dicta voluptate doloribus consequuntur dolore recusandae
            molestiae in esse quo. Similique, corrupti ea! Voluptatum quibusdam
            itaque enim consequatur eos! A dicta cupiditate vel architecto quae
            accusantium.
          </p>
        </motion.div>

        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              method="POST"
              action={`https://formsubmit.co/${EMAIL_ID}`}
              onSubmit={onSubmit}
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This Field is required"}
                  {errors.name.type === "maxLength" &&
                    "Name should not exceed more than 100 characters."}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIl"
                {...register("email", {
                  required: true,
                })}
              />

              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This Field is required"}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />

              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This Field is required"}
                  {errors.message.type === "maxLength" &&
                    "Name should not exceed more than 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="capitalize mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="ContactUsPageGraphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
