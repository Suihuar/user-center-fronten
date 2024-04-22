import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Self',
          title: 'Weihua SUN Sean',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Suihuar/UserCenter',
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
