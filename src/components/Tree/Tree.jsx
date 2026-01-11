import { Link } from '../Link/Link';
import './Tree.scss';
import linksData from '../../api/links.json';

const getImgPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return import.meta.env.BASE_URL + cleanPath;
};

export function Tree() {
  return (
    <div className="tree">
      <h1 className="tree__title">BOGHENT<br />ССЫЛКИ</h1>

      <div className="tree__links">
        {linksData.map(link => (
          <Link key={link.id} 
            link={{
              ...link,
              img: getImgPath(link.img)
            }} 
          />
        ))}
      </div>
    </div>
  );
}