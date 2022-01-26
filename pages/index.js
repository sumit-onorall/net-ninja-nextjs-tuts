import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';

import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <div>
         <h1>HomePage</h1>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            voluptas eligendi molestiae odit! Quas vitae reprehenderit
            architecto, soluta nesciunt consequatur? Id quis sit quaerat facere
            eos adipisci, expedita ratione quibusdam, quisquam quod, modi sunt!
            Vel reiciendis nulla repellat architecto dolor!
         </p>

         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            accusamus nobis iure delectus. Eveniet earum repellat culpa
            blanditiis quod. Doloremque facere error saepe. Officia recusandae
            quae odit dolor suscipit quisquam.
         </p>

         <Link href="/ninjas">See Ninja Listing</Link>
      </div>
   );
}
