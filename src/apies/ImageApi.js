import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page) => {
  const apiKey = "21154603-c9a2e40d899ce118beef17ceb";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery
};
