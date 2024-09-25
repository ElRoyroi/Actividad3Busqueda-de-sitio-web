$(document).ready(function() {
    $('#productos').DataTable({
        data: obtenerProductos(), // Función para obtener los datos
        columns: [
            { data: 'imagen', render: function(data) {
                return `<img src="${data}" alt="Producto" style="width: 100px;">`;
            }},
            { data: 'nombre' },
            { data: 'categoria' },
            { data: 'precio', render: $.fn.dataTable.render.number(',', '.', 0, '$') },
            { data: 'stock' },
            { data: null, render: function() {
                return '<button class="edit-btn">✏️</button> <button class="delete-btn">❌</button>';
            }}
        ]
    });
});

function obtenerProductos() {
    return [
        {
            imagen: "img/Laptop1.png",
            nombre: "Apple MacBook Air (13 pulgadas, 2020, Chip M1)",
            categoria: "Computadoras",
            precio: 12000,
            stock: 201
        },
        {
            imagen: "img/Laptop2.png",
            nombre: "Laptop Dell Inspiron 350 15.6 Core i5 10th Gen",
            categoria: "Computadoras",
            precio: 8000,
            stock: 92
        },
        {
            imagen: "img/Laptop3.png",
            nombre: "Laptop Hp 245 G9 Ryzen 3 3250u 8gb M.2 512gb",
            categoria: "Computadoras",
            precio: 4000,
            stock: 283
        },
        {
            imagen: "img/Laptop4.png",
            nombre: "porta lap top Chuwi GemiBook Plus plateada 15.6",
            categoria: "Computadoras",
            precio: 5500,
            stock: 356
        },
        {
            imagen: "img/Laptop5.png",
            nombre: "Laptop MSI Gamer Thin Gf63 15.6'' 16GB de Ram 512GB",
            categoria: "Computadoras",
            precio: 8000,
            stock: 109
        },
        {
            imagen: "img/Laptop6.png",
            nombre: "Lenovo ThinkPad X1 Carbon Gen 9",
            categoria: "Computadoras",
            precio: 15000,
            stock: 75
        }
    ];
}
