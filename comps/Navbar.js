import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
   return (
      <nav>
         <div className="logo">
            <Image src="/images/logo.png" alt="" width={50} height={50} />
         </div>

         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/ninjas">Ninja List</Link>
      </nav>
   );
};

export default Navbar;
