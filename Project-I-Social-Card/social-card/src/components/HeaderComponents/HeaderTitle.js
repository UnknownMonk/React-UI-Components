import React from 'react';
import './Header.css';
import moment from 'moment';
const HeaderTitle = () => {
  return (
    <div className="header-title">
      Lambda School <span>@Lambda {moment().format('DD MMM')}</span>
    </div>
  );
};
export default HeaderTitle;
