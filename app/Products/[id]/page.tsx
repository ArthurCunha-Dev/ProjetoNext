export default function Product(props: {params: {id: string}}) {
    console.log(props.params.id)
    return (
        <div>
            <h1>Olá, produto {props.params.id}</h1>
        </div>
    );
}