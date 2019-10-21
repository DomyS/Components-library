import React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.css";
import face from "./face.jpg";

const Avatar = ({ round, circle, image, small, medium, large, ...props }) => {
  const AvatarClasses = classNames({
    [styles.imageMain]: true,
    [styles.round]: round,
    [styles.circle]: circle,
    [styles.small]: small,
    [styles.medium]: medium,
    [styles.large]: large
  });

  return (
    <div className={AvatarClasses}>
      <div className={styles.imageM}>
        <img
          className={AvatarClasses}
          src={
            image
              ? image
              : "https://britz.mcmaster.ca/images/nouserimage.gif/image"
          }
          alt={image}
        />
      </div>
    </div>
  );
};

Avatar.defaultProps = {};

export default Avatar;
