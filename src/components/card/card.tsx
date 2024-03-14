import './card.css';

interface CardProps {
    price: number;
    title: string;
    image: string;
}
export function Card( {price, title, image} : CardProps) {
    const defaultImageSrc = '../../../src/assets/images/img.jpg';
    return (
        <div className="card">
            <img src={image || defaultImageSrc} />
            <h2>{title}</h2>
            <p><b>Valor:</b> {price}</p>
        </div>
    )
}