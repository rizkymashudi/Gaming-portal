import Link from "next/link";

interface FooterItemProps{
  firstLink: string;
  secondLink: string;
  thirdLink: string;
  fourthLink?: string;
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  const {firstLink, secondLink, thirdLink, fourthLink} = props;

  return (
    <ul className="list-unstyled">
        <li className="mb-6">
          <Link href="/">
            <a className="text-lg color-palette-1 text-decoration-none">{firstLink}</a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <a href="" className="text-lg color-palette-1 text-decoration-none">{secondLink}</a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <a href="" className="text-lg color-palette-1 text-decoration-none">{thirdLink}</a>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <a href="" className="text-lg color-palette-1 text-decoration-none">{fourthLink}</a>
          </Link>
        </li>
    </ul>
  );
}
