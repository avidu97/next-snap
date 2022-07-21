import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <a href="https://aviis.live">OnlyGirls</a>, by <a href="https://aviis.live">Avidu</a>
      </p>
    </footer>
  )
}

export default Footer;