import './Link.scss';

export const Link = ({ link }) => {
  return (
    <div className="link">
      <img
        src={link.img}
        alt={link.title + '.png'}
        className="link__img"
      />
      <h2 className="link__title">{link.title}</h2>
      <p className="link__description">{link.description}</p>
      <a href={link.url} className="link__button">{link.buttonText}</a>
    </div>
  );
}