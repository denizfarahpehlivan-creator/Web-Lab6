export async function fetchPosts(signal) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { signal }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts (${response.status}).`);
  }

  const posts = await response.json();
  return posts;
}
/*with fetch we taking data from api
response.ok controls the errors from http
with response.json we return the respones as js data
signal make as able to delete resquet with cleanup */