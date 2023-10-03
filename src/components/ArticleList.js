import Article from "./Article"

const ArticleList = ({posts}) => {
    const Array = posts.map((posts) => (
        <Article
        key = {posts.id}
        title = {posts.title}
        date = {posts.date}
        preview = {posts.preview}
        />
    ));
    return (
        <main>{Array}</main>
    )
}

export default ArticleList