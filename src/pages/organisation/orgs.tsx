import React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from '@/components/input-organisation';
import { ButtonSearch } from '@/components/button-search';
import { MemberTable } from '@/components/member-table';
import { debounce } from 'lodash';
import { LayoutPage } from '@/pages/layout-page/table-layout';
import classes from './orgs.module.css';
import { MembersListContext } from '@/core/context';
import { routes } from '@/core/router';

export const OrgsPage: React.FC = () => {
  const {
    members,
    apiOrganisationCurrentValue: fetchCurrentValue,
    setApiOrganisationCurrentValue: setFetchCurrentValue,
  } = React.useContext(MembersListContext);

  const [inputValue, setInputValue] = React.useState(fetchCurrentValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    1000
  );

  const handleButtonSearch = () => {
    setFetchCurrentValue(inputValue);
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <LayoutPage>
      <Link to={routes.select}>Back to select</Link>
      <h2>Filter by organisation</h2>
      <div className={classes.searchItems}>
        <InputSearch
          onchange={handleInputSearch}
          placeholder={inputValue}
          inputRef={inputRef}
        />
        <ButtonSearch onclick={handleButtonSearch} />
      </div>
      <MemberTable members={members} />
    </LayoutPage>
  );
};
