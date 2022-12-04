import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function userConnect() {
    return(
        <>
            <h1>User Connect</h1>;
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}