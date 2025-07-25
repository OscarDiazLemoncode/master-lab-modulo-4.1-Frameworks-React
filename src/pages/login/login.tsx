import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './login.module.css';
import { routes } from '@/core/router';
import { UserNameContext } from '@/core/context/username.provider';
import { ButtonSearch } from '@/components/button-search';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const { setName } = React.useContext(UserNameContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    username !== ''
      ? (setName(`Welcome ${username}`), navigate(routes.select))
      : alert('You must write a user name');
  };

  return (
    <>
      <div className={classes.wrapperForm}>
        <form className={classes.form} onSubmit={handleNavigation}>
          <h2>Gives a username</h2>
          <div className={classes.flex}>
            <div>
              <label>Name: </label>
              <input
                ref={inputRef}
                value={username}
                placeholder="Lemoncode"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <ButtonSearch classname={classes.buttonSearch}>Login</ButtonSearch>
          </div>
        </form>
      </div>
    </>
  );
};
