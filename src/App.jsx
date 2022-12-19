import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="logo">
				<img className="logoImg" src="src/assets/daze-logo.png"></img>
			</div>
			<div className="buttons">
				<a href="https://twitter.com/dazebh">
					<button className="button">twitter</button>
				</a>

				<a href="https://www.youtube.com/dazeNB">
					<button className="button">youtube</button>
				</a>

				<a href="https://www.twitch.tv/dazeNB">
					<button className="button">twitch</button>
				</a>

				<a href="https://fgc.network/daze">
					<button className="button">mastodon</button>
				</a>

				<a href="https://cohost.org/daze">
					<button className="button">cohost</button>
				</a>

				<a href="https://steamcommunity.com/id/dazerr/">
					<button className="button">steam profile</button>
				</a>

				<a href="https://osu.ppy.sh/users/18556632">
					<button className="button">osu! profile</button>
				</a>

				<a href="https://www.backloggd.com/u/daze/">
					<button className="button">my game log</button>
				</a>

				<a href="https://anilist.co/user/dazer/">
					<button className="button">my anime log</button>
				</a>
			</div>
		</div>
	);
}

export default App;
