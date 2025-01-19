import './reset.css';
import classes from './App.module.css';

const context = import.meta.webpackContext('./real-world', {
  recursive: false,
  regExp: /\.png$/,
});

console.log(context.keys());

const App = () => {
  return (
    <div className={classes.grid}>
      {context.keys().map((key) => {
        const title = key.replace('./', '').replace('.png', '');
        return (
          <div key={key} className={classes.item}>
            <img src={context(key) as string} alt={title} />
            <a
              className={classes.title}
              href={context(key) as string}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default App;
