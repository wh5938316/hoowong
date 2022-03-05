import ConsCard from "components/consCard";
import ProsCard from "components/prosCard";
import Image from "next/image";

function RoundedImage(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const { src, alt, ...extra } = props;
  return <Image alt={alt} className="rounded-lg" src={src} {...extra} />;
}

const MDXComponents = {
  Image: RoundedImage,
  ProsCard,
  ConsCard,
};

export default MDXComponents;
