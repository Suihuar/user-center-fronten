import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMassage = '显然这是虽华做的';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
        copyright={`${currentYear} ${defaultMassage}`}
      style={{
        background: 'none',
      }}
      links={[
        // {
        //   key: 'Name',
        //   title: 'Weihua SUN',
        //   href: '',
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: <><GithubOutlined /> 虽华 Github</>,
          href: 'https://github.com/Suihuar/user-center-frontend',
          blankTarget: true,
        },
        {
          key: 'Bilibili',
          title: 'Bilibili',
          href: 'https://space.bilibili.com/99566843?spm_id_from=333.1007.0.0',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
