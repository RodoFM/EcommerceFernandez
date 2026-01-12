export default function ItemListContainer({ mensaje }) {
  return (
    <main className="container my-4" id="catalogo">
      <div className="p-4 p-md-5 rounded-4 bg-light border">
        <h2 className="fw-bold text-success mb-2">{mensaje}</h2>
        <p className="text-secondary mb-0">
          Aquí mostraremos el catálogo de productos.
          
        </p>
      </div>
    </main>
  );
}
