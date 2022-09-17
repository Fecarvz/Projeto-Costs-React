import styles from './Footer.module.css'

function Footer() {
  return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer