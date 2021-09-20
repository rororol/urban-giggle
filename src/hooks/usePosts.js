import axios from "axios";
import { ref, onMounted } from "vue"

export function usePosts(limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const page = ref(0)
  const fetching = async () => {
    try {
      page.value += 1;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(
        response.headers["x-total-count"] / limit
      );
      posts.value = [...posts.value, ...response.data];
    } catch (e) {
      alert("Ошибка");
    } finally {
    }
  }
  onMounted(fetching)
  return {
    posts, totalPages
  }
}