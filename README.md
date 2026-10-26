# Post Dashboard — Assignment 6

A React application built with Vite. It fetches posts from
JSONPlaceholder and filters them by title.

## Run the project

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## File organization

- `src/api/postsApi.js`: Fetches posts using the Fetch API and checks HTTP errors.
- `src/reducer/postsReducer.js`: Defines the initial state and handles FETCH_START, FETCH_SUCCESS, and FETCH_ERROR.
- `src/components/Post.jsx`: Displays one post's title and body.
- `src/components/PostList.jsx`: Renders posts with stable ID keys.
- `src/components/FilterForm.jsx`: Displays the controlled filter input.
- `src/App.jsx`: Connects state, fetching, cleanup, filtering, and conditional rendering.
- `src/main.jsx`: Mounts the React application.
- `src/index.css`: Contains the dashboard styles.

## State and side effects

Async state is managed with useReducer. The filter text is stored
with useState in App.

Posts are fetched inside useEffect. Cleanup uses AbortController
to cancel the request. Aborted requests do not update state.

Filtered posts are calculated during render. They are not stored
in state, and filtering does not use an effect.

The interface handles loading, errors, an empty posts array,
and filters with no matches.

## Challenges faced

One challenge was a filename casing warning involving Post.jsx
and PostList.jsx. I checked the filenames and imports and restarted
the editor's TypeScript server.

Another challenge was testing empty responses while request blocking
was still enabled in DevTools. I disabled blocking, tested the empty
response, and restored the original API URL.

I also practiced separating data fetching, state transitions,
and rendering into different files.