export default function CartWidget() {
  return (
    <button
      type="button"
      className="btn btn-outline-success position-relative"
      aria-label="Carrito de compras"
    >
      {/* Con Bootstrap Icons */}
      <i className="bi bi-bag-heart-fill me-2" aria-hidden="true"></i>

      {/* Si no usas icons, cambia la línea de arriba por esta: */}
      {/* <span className="me-2" aria-hidden="true">🧺</span> */}

      Carrito
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </button>
  );
}
