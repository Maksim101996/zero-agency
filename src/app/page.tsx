import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				Главная страница
				<Link href="/auth">Кликни и попади на посты</Link>
			</div>
		</main>
	);
}
