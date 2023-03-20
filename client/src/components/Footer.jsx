function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <p>Tous droits réservés ©2023 
          <a href="https://www.pascal-moreno.com">
            &nbsp; &nbsp;Pascal Moreno
          </a> 
          </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
