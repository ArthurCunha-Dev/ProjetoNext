type Product = {
    id: number;
    name: string;
};

function fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        resolve ([
            { id: 1, name: 'Produto 1' },
            { id: 2, name: 'Produto 2' },
            { id: 3, name: 'Produto 3' },
        ]);
    })
};



export default async function Products() {
    const products = await fetchProducts();
    return (
        <div>
            <h1>Olá, página de produtos</h1>
            <ul>
                {products.map((product) =>(
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}