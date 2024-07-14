import { SyncLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return <SyncLoader className={css.loader} color='#3f51b5' />;
};
