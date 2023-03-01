import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { searchMovies } from "./store/moviesSlice";

function App() {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const movie = useSelector((state) => state.movies.movies);
	const status = useSelector((state) => state.movies.status);
	const error = useSelector((state) => state.movies.error);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchMovies(query));
	};
	return (
		<div className="w-screen min-h-screen flex flex-col items-center bg-green-200">
			<header className="w-full h-[6rem] lg:h-[15rem] flex flex-col items-center mt-4 lg:space-y-8">
				<h1 className="font-mono text-2xl lg:text-5xl font-bold">
					Movie Search
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex justify-center items-center"
				>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="p-2 rounded-md border-2 border-green-50"
					/>
					<button
						type="submit"
						className="border border-yellow-300 p-2 rounded bg-yellow-300"
					>
						Search
					</button>
				</form>
			</header>
			<div className="w-11/12 flex justify-center items-center">
				{status === "loading" && (
					<div className="grid min-h-screen place-content-center">
						<div className="flex items-center gap-2 text-gray-500 text-2xl">
							<span className="h-12 w-12 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
							loading...
						</div>
					</div>
				)}
				{status === "failed" && <p>{error}</p>}
				{status === "succeeded" && <Card movie={movie} />}
			</div>
		</div>
	);
}

export default App;
