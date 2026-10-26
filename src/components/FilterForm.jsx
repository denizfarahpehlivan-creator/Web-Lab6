export default function FilterForm({ filter, onFilterChange }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="title-filter">Filter posts by title:</label>

      <input
        id="title-filter"
        type="text"
        placeholder="Enter a title..."
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
      />
    </form>
  );
}
/*filter is the updated script thet come from app
onchange the text every time we write in input
onFilterChange send it to the function 
event.preventDefault() to prevent refreshing the page when we press enter
id and htmlfor connect tags into input */