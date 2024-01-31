import Head from 'next/head'
import styles from '@/styles/pages/Home.module.scss'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Creation } from '@/types/types';
import CreationCard from '@/components/Creations/Card';


export default function Home() {


  // GSAP Starts Here

  const triggerElement = useRef(null)
  const slider = useRef(null)
  let direction = -1

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: event => direction = event.direction * -1
      },
      x: "-=260px"
    })
  }, [])


  // GSAP Ends Here


  const [cards, setCards] = useState<Creation[]>([]);

  useEffect(() => {
    import('../../public/data/creations.json').then((creationData) => {
      setCards(creationData.default as Creation[]);
      const top4Cards = creationData.default.slice(0, 14);
      setCards(top4Cards as Creation[]);
    });
  }, []);


  return (
    <>
      <Head>
        <title>Supriyo M.</title>
        <meta name="description" content="Design Engineer From India" />
        <meta property="og:site_name" content="Supriyo M." />
        <meta property="og:title" content="Meet Supriyo Design Engineer From India" />
        <meta property="og:image" content="https://ik.imagekit.io/0h5il6u6e/banner.png?updatedAt=1706465584438" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description"
          content="Step into Supriyo M.'s Realm
          Where UX Design Meets Full Stack Brilliance
          Discover the Pinnacle of Luxurious Design and Code Symphony"/>
      </Head>

      <div className={styles.Wraper} data-lenis-prevent-touch>
        <div className={styles.Container}>
          <div className={styles.Hero}>
            <div className={styles.TopLayer}>
              <p className={styles.Label}>design Engineer</p>
              <p className={styles.Label}>from india (IN)</p>
            </div>

            <motion.svg
              className={styles.NameBadge}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1715 158"
              fill="#fafafa"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.785, 0.135, 0.15, 0.86] }}
            >
              <path d="M60.06 136.64C84.7 136.64 94.16 125.42 94.16 113.32C94.16 102.1 86.02 95.28 71.72 91.76L47.52 85.82C24.42 80.32 8.14 67.78 8.14 43.58C8.14 16.96 31.02 0.0200195 60.94 0.0200195C93.28 0.0200195 110.88 18.5 116.16 35.22L96.14 45.78C93.72 35 82.5 20.92 60.94 20.92C42.9 20.92 31.24 29.72 31.24 43.14C31.24 54.36 39.6 60.74 52.58 63.82L77.88 69.76C104.94 76.36 117.7 91.98 117.7 112.88C117.7 137.3 97.9 157.98 59.62 157.98C25.52 157.98 6.16 138.18 0 121.24L19.58 110.24C23.98 124.98 39.38 136.64 60.06 136.64Z" />
              <path d="M190.468 157.98C154.388 157.98 129.748 132.9 129.748 96.6V2.00002H152.408V96.82C152.408 120.58 167.588 136.64 190.468 136.64C214.228 136.64 228.968 120.58 228.968 96.82V2.00002H251.628V96.6C251.628 132.9 227.208 157.98 190.468 157.98Z" />
              <path d="M273.548 156V2.00002H331.408C363.528 2.00002 383.328 25.1 383.328 50.62C383.328 78.12 364.188 101.22 331.408 101.22H296.208V156H273.548ZM296.208 80.54H329.648C348.788 80.54 360.228 67.78 360.228 51.28C360.228 35.44 348.348 22.68 329.648 22.68H296.208V80.54Z" />
              <path d="M396.455 156V2.00002H457.395C488.635 2.00002 508.435 23.12 508.435 48.86C508.435 70.86 495.235 87.14 476.315 93.74L512.175 135.54V156H489.076V141.48L451.015 96.82H418.895V156H396.455ZM418.895 76.14H457.175C474.335 76.14 485.115 64.26 485.115 49.08C485.115 34.56 473.895 22.68 457.175 22.68H418.895V76.14Z" />
              <path d="M525.379 156V2.00002H548.259V156H525.379Z" />
              <path d="M611.387 156V92.86L557.047 2.00002H583.227L622.827 70.42L662.867 2.00002H688.827L634.267 92.86V156H611.387Z" />
              <path d="M755.349 157.98C708.929 157.98 676.809 123.22 676.809 79C676.809 34.56 708.929 0.0200195 755.349 0.0200195C801.769 0.0200195 834.109 34.56 834.109 79C834.109 123.22 801.769 157.98 755.349 157.98ZM700.349 79C700.349 110.24 722.129 136.2 755.349 136.2C788.569 136.2 810.569 110.24 810.569 79C810.569 47.76 788.569 21.8 755.349 21.8C722.129 21.8 700.349 47.76 700.349 79Z" />
              <path d="M882.303 156V2.00002H913.103L959.743 125.2L1006.38 2.00002H1036.96V156H1014.96V39.62L970.523 156H948.523L904.303 39.62V156H882.303Z" />
              <path d="M1045.67 156L1100.23 2.00002H1130.37L1184.71 156H1160.73L1146.43 114.86H1083.51L1069.21 156H1045.67ZM1090.99 93.52H1138.95L1114.97 24.22L1090.99 93.52Z" />
              <path d="M1295.07 156V87.14H1216.09V156H1193.43V2.00002H1216.09V65.8H1295.07V2.00002H1317.73V156H1295.07Z" />
              <path d="M1326.51 156L1381.07 2.00002H1411.21L1465.55 156H1441.57L1427.27 114.86H1364.35L1350.05 156H1326.51ZM1371.83 93.52H1419.79L1395.81 24.22L1371.83 93.52Z" />
              <path d="M1489.92 156V23.12H1440.64V2.00002H1562.3V23.12H1513.02V156H1489.92Z" />
              <path d="M1635.9 157.98C1589.48 157.98 1557.36 123.22 1557.36 79C1557.36 34.56 1589.48 0.0200195 1635.9 0.0200195C1682.32 0.0200195 1714.66 34.56 1714.66 79C1714.66 123.22 1682.32 157.98 1635.9 157.98ZM1580.9 79C1580.9 110.24 1602.68 136.2 1635.9 136.2C1669.12 136.2 1691.12 110.24 1691.12 79C1691.12 47.76 1669.12 21.8 1635.9 21.8C1602.68 21.8 1580.9 47.76 1580.9 79Z" />
            </motion.svg>

            <div className={styles.CTALinks}>
              <Link className={styles.CTALink} href="https://wa.me/917029008284">start a project</Link>
            </div>


            <div className={styles.Technologies}>
              <p className={styles.Label}>my superpowers are in</p>

              <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.Slider}>
                  <img className={styles.TechBanner} src="/images/tech.svg" ref={triggerElement} draggable="false" />
                  <img className={styles.TechBanner} src="/images/tech.svg" ref={triggerElement} draggable="false" />
                  <img className={styles.TechBanner} src="/images/tech.svg" ref={triggerElement} draggable="false" />
                  <img className={styles.TechBanner} src="/images/tech.svg" ref={triggerElement} draggable="false" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.Creations} id='creations'>

            <ul className={styles.CreationsGrid}>
              {cards.map((card) => (
                <li className={styles.Creation}>
                  <CreationCard key={card.id} card={card} />
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>


      <Footer />

    </>
  )
}
