import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
      <div className="container">
        {/* Logo / Marca */}
        <a className="navbar-brand fw-bold" href="#">
          Hasu Creando Con Amor
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Carrito */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#catalogo">Catálogo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
