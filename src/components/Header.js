
// function BlogName(){
//     return (
//         <header> 
//             <h1></h1>
//         </header>
//     )
// };
// export default BlogName;

const Header = (props) => {
    return(
        <header>
            <h1>{props.name}</h1>
        </header>
    )
}
export default Header
 