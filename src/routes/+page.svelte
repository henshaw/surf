<script>
	let url = "/sites.json"
	import fetchStore from '../lib/scripts/fetch'
	const [data, loading, error, get] = fetchStore(url)

    function openRandomLink() {
        var link = $data[Math.floor(Math.random()*$data.length)];
        window.open(link, "_blank");
    }
</script>

<div class="container">
    <h1>Coywolf Surf</h1>
    <p>Discover the web all over again!</p>
    <button on:click|preventDefault={openRandomLink}>Suprise Me!</button>
    <footer>
        <a href="https://coywolf.com/surf/">Suggest a Site!</a>
    </footer>
</div>

<style type="text/css">
    body { font-family:"Georgia",serif;background:#F4F5F7;color:#050520; }
    h1, button { font-family:"-apple-system","BlinkMacSystemFont","Helvetica Neue","Segoe UI","Arial","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans",sans-serif; }
    .container { text-align:center;font-display:optional; }
    button { font-size:2rem;text-transform:uppercase;font-weight:800;border-radius: 6px;background: #04AA6D;border: none;color: white;padding: 1rem;text-align: center;text-decoration: none;display: inline-block;margin: 4px 2px;cursor:pointer;box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); }
    button:hover { background:#028958; }
    footer { margin:2rem 0;color:#555; }
</style>