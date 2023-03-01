import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchMovies = createAsyncThunk(
	"movies/searchMovies",
	async (query) => {
		const response = await fetch(
			`https://www.omdbapi.com/?t=$${query}&apikey=32da3e57`
		);

		if (!response.ok) {
			throw new Error("Failed to search for movies");
		}
		const data = await response.json();
		if (data.Error) {
			throw new Error(data.Error);
		}

		return data;
	}
);

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		movies: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(searchMovies.pending, (state) => {
				state.status = "loading";
				state.movies = [];
				state.error = null;
			})
			.addCase(searchMovies.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.movies = action.payload;
				state.error = null;
			})
			.addCase(searchMovies.rejected, (state, action) => {
				state.status = "failed";
				state.movies = [];
				state.error = action.error.message;
			});
	},
});

export default moviesSlice.reducer;
export const selectMovies = (state) => state.movies.movies;
export const selectStatus = (state) => state.movies.status;
export const selectError = (state) => state.movies.error;
