import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.wrapper}>
      <Hearts
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
