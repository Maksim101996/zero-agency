"use client"
import { ChangeEventHandler, useState } from 'react'
import styles from './AuthForm.module.scss'

export default function AuthForm() {
	const [form, setForm] = useState({ login: '', password: '' })

	const inputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		const { name, value } = e.currentTarget
		console.log(e.currentTarget.value);
		setForm(
			{
				...form,
				[name]: value
			})
	}

	return (
		<form className={styles.form}>
			<div className={styles.formItem}>
				<label className={styles.label} htmlFor="login">Логин</label>
				<input className={styles.input} value={form.login} name={'login'} onChange={inputHandler} type='text' placeholder="Введите логин" id="login" />
			</div>
			<div className={styles.formItem}>
				<label className={styles.label} htmlFor="password">Логин</label>
				<input className={styles.input} value={form.password} name={'password'} onChange={inputHandler} type='password' placeholder="Введите пароль" id="password" />
			</div>
		</form>
	)
}