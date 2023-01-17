import Image from 'next/image'
import logo from '../public/alaff_logo.png'

export default function Logo({ ...rest }) {
  return (
    <Image src={logo} alt="logo" width="180" height="120" />
  );
}
