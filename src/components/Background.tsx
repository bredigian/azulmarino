import Image from "next/image"
import previewBackground from "@/assets/images/preview-background.png"

const Background = () => {
  return (
    <Image
      alt="Azul Marino"
      src={previewBackground}
      quality={100}
      fill
      style={{
        objectFit: "cover",
      }}
      className=""
    />
  )
}

export default Background
