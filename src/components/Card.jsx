import React from "react";

const Card = ({ movie }) => {
	return (
		<div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4 border border-red-500">
			{movie.poster === "N/A" ? (
				<img
					className="object-cover h-[60vh]"
					src="https://pluspng.com/img-png/movie-png-hd-movie-logo-cliparts-2524910-1118.png"
					alt="Poster"
				/>
			) : (
				<img
					className="object-cover h-[60vh]"
					src={movie.Poster}
					alt="Poster"
				/>
			)}

			<div className="p-6  text-gray-600 dark:text-gray-400">
				<div className="space-y-2">
					<span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
						{movie.Title}
					</span>

					<p className="mt-2 text-sm">{movie.Plot}</p>
					<p className=" text-blue-600 uppercase dark:text-blue-400">
						Director
					</p>
					<p>{movie.Director}</p>
					<p className=" text-blue-600 uppercase dark:text-blue-400">
						Writer
					</p>
					<p>{movie.Writer}</p>
					<p className=" text-blue-600 uppercase dark:text-blue-400">
						Actors
					</p>
					<p>{movie.Actors}</p>
					<p className=" text-blue-600 uppercase dark:text-blue-400">
						Genre
					</p>
					<p>{movie.Genre}</p>
					<div className="flex flex-col space-y-4 ">
						<div className="pr-2">
							<p className=" text-blue-600 uppercase dark:text-blue-400">
								Production
							</p>
							<p>{movie.Production}</p>
						</div>
						<div className="pr-2">
							<p className=" text-blue-600 uppercase dark:text-blue-400">
								Year
							</p>
							<p>{movie.Year}</p>
						</div>
						<div className="pr-2">
							<p className=" text-blue-600 uppercase dark:text-blue-400">
								Duration
							</p>
							<p>{movie.Runtime}</p>
						</div>
						<div className="pr-2">
							<p className=" text-blue-600 uppercase dark:text-blue-400">
								imdb rating
							</p>
							<p>{movie.imdbRating}</p>
						</div>
						<div className="pr-2">
							<p className=" text-blue-600 uppercase dark:text-blue-400">
								Rating
							</p>
							<ul>
								{movie.Ratings.map((r) => (
									<li key={r}>
										<span className="font-bold text-blue-200">
											{r.Source}
										</span>{" "}
										- {r.Value}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
