class BlogService {
  _apiBase = 'https://simple-blog-api.crew.red';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}${url}` + `, received ${res.status}`,
      );
    }
    return res.json();
  }

  async getPosts() {
    const res = await this.getResource('/posts');
    return res;
  }
}

export default BlogService;
