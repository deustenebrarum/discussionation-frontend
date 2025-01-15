'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
  }, [])
  return (
    <div className={styles.page}>
      
    </div>
  );
}
