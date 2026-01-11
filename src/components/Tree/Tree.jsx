import { Link } from '../Link/Link';
import './Tree.scss';
import linksData from '../../api/links.json';

export function Tree() {
  return (
    <div className="tree">
      <h1 className="tree__title">BOGHENT<br />ССЫЛКИ</h1>

      <div className="tree__links">
        {linksData.map(link => (
          <Link key={link.id} link={link} />
        ))}
      </div>

      <a href="https://st.depositphotos.com/1020341/4773/i/450/depositphotos_47732415-stock-photo-funny-portrait-of-icelandic-horse.jpg" className="tree__additional">
        Дополнительно
        <img src="/assets/arrow.png" alt="arrow.png" className="tree__additional-arrow" />
      </a>
    </div>
  );
}