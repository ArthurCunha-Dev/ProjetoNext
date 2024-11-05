export default function Admin () {
     async function onSubmit (formData: FormData) {
        'use server';

    }
    return (
        <div>
            <form action="" className="space-x-3 text-black">
                <input type="text" placeholder="Name" name="name" id="name" />
                <input type="number" placeholder="Price" name="price" id="price" />
                <button type="submit">Salvar</button>
            </form>
        </div>
 )
} 