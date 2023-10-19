import Background from "@/components/Background"
import { FaWhatsapp } from "react-icons/fa6"
import Image from "next/image"
import { SOCIAL } from "@/constants/social"
import previewImage from "@/assets/images/preview-image.png"

const Home = () => {
  return (
    <main className="h-screen w-full">
      <Background />
      <section className="w-full absolute flex flex-col justify-center items-center gap-8 text-blue-am p-8">
        <Image
          alt="Azul Marino"
          src={previewImage}
          quality={100}
          className="w-[680px]"
        />
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-bold">SÍGUENOS</h3>
          <ul className="flex items-end gap-2">
            {SOCIAL.map((item) => {
              return (
                <li
                  key={item.url}
                  className="hover:scale-125 duration-200 ease-in-out"
                >
                  <a href={item.url} target="_blank">
                    <item.icon className="text-3xl" />
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-3xl" />
            <a
              href="https://wa.me/50240037831"
              target="_blank"
              className="text-sm hover:underline"
            >
              ¡Contáctanos y empecemos a navegar!
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
