import Comment from "./Comment";
export default function(props) {
    return <div>
        <Comment content={'text'} author={'Ran'} />
        <Comment content={'text1'} author={'Yossi'} />
        <Comment content={'text2'} author={'Avi'} />
    </div>;
}