import Link from 'next/link';
export default function meals(){
    return (
        <section>
            <h1>Meals Page</h1>
            <p><Link href = 'meals/share'>Share</Link></p>
            <p><Link href = 'meals/slug'>Slug</Link></p>
        </section>
       
    )
}