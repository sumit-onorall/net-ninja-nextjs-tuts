
import Link from 'next/link';
import styles from './Ninjas.module.css';

// This function runs in the server (not in brower)
// for fetching data from API/backend
export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();

   return {
      props: { ninjas: data}
   }
}

const Ninjas = ({ninjas}) => {
   
   return (
      <div>
         <h1>All Ninjas</h1>
         {ninjas.map(ninja => (
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
               <a className={styles.single}>
                  <h3>{ninja.name }</h3>
               </a>
            </Link>
         ))}
      </div>
   );
};

export default Ninjas;
