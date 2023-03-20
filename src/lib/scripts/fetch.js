// Credit: https://svelte.dev/repl/b2d671b8119845ca903667f1b3a96e31?version=3.37.0

import { writable } from 'svelte/store'

export default function (url) {
	const loading = writable(false)
	const error = writable(false)
	const data = writable({})
	
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(url)
			data.set(await response.json())
		} catch(e) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
	
	return [ data, loading, error, get]
}