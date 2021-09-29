import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assects/images/user.png";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={styles.user}>
                    <span className={styles.userSubscribe}>
                        <div><img alt='userPhoto' src={u.photos.small != null ? u.photos.small : userPhoto}
                                  className={styles.userPhoto}/></div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </span>
                        <span className={styles.userInfo}>
                        <span className={styles.mainInfo}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span className={styles.location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
            <div className={styles.pageNumber}>
                {pages.map(p => {
                    return (
                        <span onClick={(e) => {
                            props.onPageChanged(p)
                        }}
                              className={props.currentPage === p && styles.selectedPage}>{p} </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;