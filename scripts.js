// Función para mostrar las subcategorías
function mostrarSubcategorias(categoria) {
	// Ocultar todas las subcategorías
	document.querySelectorAll('.subcategoria').forEach(div => {
	  div.classList.add('oculto');
	});
  
	// Mostrar la subcategoría seleccionada
	document.getElementById(categoria).classList.remove('oculto');
	
	// Ocultar todos los productos
	document.querySelectorAll('.productos').forEach(div => {
	  div.classList.add('oculto');
	});
  
	// Resaltar la categoría seleccionada
	document.querySelectorAll('#categorias button').forEach(btn => {
	  btn.classList.remove('activo');
	});
	document.getElementById('btn-' + categoria).classList.add('activo');
  
	// Mostrar la primera subcategoría de la categoría seleccionada
	const firstSubcategoria = document.getElementById(categoria).querySelector('button');
	if (firstSubcategoria) {
	  firstSubcategoria.click();
	}
  }
  
  // Función para mostrar los productos
  function mostrarProductos(subcategoria) {
	// Ocultar todos los productos
	document.querySelectorAll('.productos').forEach(div => {
	  div.classList.add('oculto');
	});
  
	// Mostrar los productos seleccionados
	document.getElementById(subcategoria).classList.remove('oculto');
  
	// Resaltar la subcategoría seleccionada
	document.querySelectorAll('.subcategoria button').forEach(btn => {
	  btn.classList.remove('activo');
	});
	document.getElementById('btn-' + subcategoria).classList.add('activo');
  }
  