import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.container}>
            <div className={style.postImgContainer}>
                <img className={style.postImg} src={props.postImgUrl} alt=""/>
            </div>
            <div className={style.content}>
                <img className={style.postAvatar} src={props.avatarURL} alt={props.userName}/>
                <div className={style.postContainer}>
                    <div className={style.header}><h4 className={style.userName}>{props.userName}</h4></div>
                    <div className={style.rating}><span className={style.likesCount}><img className={style.likeIcon} src="img/like_icon.svg" alt="" /> {props.likesCount}</span></div>
                    <div className={style.message}><p className={style.messageP}>{props.message}</p></div>
                </div>
            </div>
        </div>
    )
};

export default Post;