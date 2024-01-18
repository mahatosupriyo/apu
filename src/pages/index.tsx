import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/pages/Home.module.scss'
import NavBar from '@/components/NavBar'

import Lenis from '@studio-freight/lenis';
import { useState, useEffect } from 'react';

export default function Home() {

  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <>
      <Head>
        <title>Supriya M.</title>
        <meta name="description" content="Design Engineer From India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.Hero}>
        <svg className={styles.NameBadge} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1302 289" fill="none">
          <path d="M149.068 100.18H76.9383V68.9239C76.9383 66.7867 76.6712 65.1839 76.1369 64.1153C75.8697 63.0467 75.3354 62.5124 74.534 62.5124C73.7325 62.5124 73.0647 63.0467 72.5304 64.1153C72.2633 65.1839 72.1297 66.7867 72.1297 68.9239V91.3643C72.1297 94.3029 72.2633 96.8408 72.5304 98.9779C73.0647 100.848 74.2668 102.852 76.1369 104.989C78.274 106.859 81.4798 109.13 85.7542 111.801C90.0285 114.472 96.0393 117.945 103.787 122.22L114.606 128.231C121.552 131.971 127.162 136.111 131.436 140.653C135.978 145.194 139.451 150.537 141.855 156.682C144.526 162.826 146.396 170.173 147.465 178.721C148.534 187.003 149.068 197.021 149.068 208.775V213.985C149.068 238.028 142.523 256.461 129.433 269.284C116.343 282.107 97.6422 288.519 73.3319 288.519C49.2886 288.519 30.989 282.241 18.4331 269.685C6.14436 256.862 0 238.295 0 213.985V188.339H72.1297V219.595C72.1297 221.732 72.2633 223.335 72.5304 224.403C73.0647 225.472 73.7325 226.006 74.534 226.006C75.3354 226.006 75.8697 225.606 76.1369 224.804C76.6712 223.736 76.9383 222.133 76.9383 219.995V196.353C76.9383 193.414 76.6712 191.01 76.1369 189.14C75.8697 187.27 74.8011 185.4 72.9311 183.53C71.3282 181.66 68.5232 179.523 64.516 177.118C60.7759 174.714 55.433 171.508 48.4872 167.501L35.6641 160.288C28.7183 156.281 22.8411 152.007 18.0324 147.465C13.4909 142.656 9.88447 137.046 7.213 130.635C4.54153 124.223 2.67146 116.743 1.60287 108.195C0.534287 99.6458 0 89.4942 0 77.7398V74.1333C0 49.8229 6.27796 31.3898 18.8339 18.8339C31.3898 6.27795 49.5558 0 73.3319 0C97.6422 0 116.343 6.41152 129.433 19.2346C142.523 32.0576 149.068 50.3572 149.068 74.1333V100.18Z" fill="#CCC1A6" />
          <path d="M153.792 4.0072H225.922V219.595C225.922 220.663 225.922 221.598 225.922 222.4C226.189 223.201 226.322 223.869 226.322 224.403C226.59 224.938 226.857 225.338 227.124 225.606C227.658 225.873 228.059 226.006 228.326 226.006C228.86 226.006 229.261 225.873 229.528 225.606C229.795 225.338 229.929 224.938 229.929 224.403C230.196 223.869 230.33 223.201 230.33 222.4C230.597 221.598 230.73 220.663 230.73 219.595V4.0072H302.86V213.985C302.86 226.006 301.124 236.692 297.651 246.042C294.445 255.125 289.636 262.873 283.225 269.284C276.813 275.428 268.799 280.237 259.182 283.71C249.831 286.916 239.146 288.519 227.124 288.519C215.102 288.519 204.55 286.916 195.467 283.71C186.384 280.504 178.77 275.829 172.626 269.685C166.482 263.273 161.806 255.392 158.601 246.042C155.395 236.692 153.792 226.006 153.792 213.985V4.0072Z" fill="#CCC1A6" />
          <path d="M307.584 4.0072H381.317C405.36 4.0072 423.927 12.1552 437.017 28.4511C450.107 44.48 456.652 70.1261 456.652 105.389V106.191C456.652 124.357 455.049 139.584 451.844 151.873C448.905 164.162 444.23 174.046 437.818 181.526C431.674 188.739 423.793 193.949 414.176 197.154C404.559 200.36 393.338 201.963 380.515 201.963H379.714V284.511H307.584V4.0072ZM379.714 66.5196V139.451H380.515C382.652 139.451 383.855 139.184 384.122 138.649C384.389 137.848 384.522 135.978 384.522 133.039V72.9311C384.522 70.2596 384.389 68.5232 384.122 67.7218C383.855 66.9203 382.652 66.5196 380.515 66.5196H379.714Z" fill="#CCC1A6" />
          <path d="M459.811 4.0072H533.543C557.587 4.0072 576.153 10.1516 589.244 22.4403C602.334 34.462 608.879 53.2958 608.879 78.9419V80.9455C608.879 92.7 607.543 102.985 604.872 111.801C602.2 120.35 598.861 127.563 594.854 133.44C590.847 139.317 586.439 143.725 581.63 146.664C576.821 149.335 572.28 150.671 568.005 150.671V155.48C572.28 155.48 576.821 157.082 581.63 160.288C586.439 163.494 590.847 168.035 594.854 173.913C598.861 179.79 602.2 187.003 604.872 195.552C607.543 204.1 608.879 213.718 608.879 224.403V227.609C608.879 238.295 609.013 248.313 609.28 257.663C609.814 266.746 611.016 275.696 612.886 284.511H540.756C538.886 275.696 537.684 266.613 537.15 257.263C536.883 247.912 536.749 237.761 536.749 226.808V190.743C536.749 187.804 536.616 186.068 536.349 185.534C536.081 184.732 534.879 184.331 532.742 184.331H531.941V284.511H459.811V4.0072ZM531.941 66.5196V121.819H532.742C534.879 121.819 536.081 121.552 536.349 121.018C536.616 120.216 536.749 118.346 536.749 115.407V72.5304C536.749 69.8589 536.616 68.256 536.349 67.7218C536.081 66.9203 534.879 66.5196 532.742 66.5196H531.941Z" fill="#CCC1A6" />
          <path d="M613.603 4.0072H685.733V284.511H613.603V4.0072Z" fill="#CCC1A6" />
          <path d="M689.493 4.0072H761.622V109.397H766.431V4.0072H838.561L799.29 208.375V284.511H727.16V208.375L689.493 4.0072Z" fill="#CCC1A6" />
          <path d="M842.17 4.0072H954.372L972.004 284.511H899.874V129.833H895.065V284.511H822.936L842.17 4.0072ZM916.304 226.808H877.434V164.295H916.304V226.808Z" fill="#CCC1A6" />
          <path d="M1039.76 4.0072H1131.93V157.884H1136.73V4.0072H1228.1V284.511H1161.98L1170.39 132.238H1165.59L1155.97 284.511H1111.89L1102.27 132.238H1097.46L1105.88 284.511H1039.76V4.0072Z" fill="#CCC1A6" />
          <path d="M1233.08 250.45C1233.08 238.429 1236.01 229.346 1241.89 223.201C1247.77 217.057 1256.32 213.985 1267.54 213.985C1278.49 213.985 1286.91 217.19 1292.78 223.602C1298.93 229.746 1302 238.829 1302 250.851C1302 262.605 1299.06 271.555 1293.18 277.699C1287.31 283.576 1278.76 286.515 1267.54 286.515C1256.32 286.515 1247.77 283.443 1241.89 277.299C1236.01 271.154 1233.08 262.205 1233.08 250.45Z" fill="#CCC1A6" />
        </svg>

        <img className={styles.APUSticker} src="https://ik.imagekit.io/eduburner/Essentials/nam.png?updatedAt=1705434406192" draggable="false" />
      </div>
      <div className={styles.Wraper}>
        <div className={styles.Container}>
          <h2>
            Supriya Mahato is a India-based Design designer with a career spanning over 6 years in the industry building products, digital experiences, brands and simply fun and engaging things people love to use.
          </h2>
        </div>
      </div>


    </>
  )
}
