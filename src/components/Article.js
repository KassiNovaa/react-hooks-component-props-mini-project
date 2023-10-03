const Article = ({title,date,preview})=>{
    return (
        <Article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </Article>
    )
}

export default Article