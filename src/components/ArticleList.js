import React from "react";
import Article from "./Article"

const ArticleList = ({posts: postsobj}) => {
    const ArticleComp = postsobj.map((postobj) => (
        <Article
        key = {postobj.id}
        title = {postobj.title}
        date = {postobj.date}
        preview = {postobj.preview}
        />
    ));
    return (
        <main>{ArticleComp}</main>
    )
}

export default ArticleList