import NextLink from "next/link";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
};

export default Link;
