import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <a href="https://spacejelly.dev">OnlyGirls</a>, by <a href="aviis.live">Avidu</a>
      </p>
    </footer>
  )
}

export default Footer;