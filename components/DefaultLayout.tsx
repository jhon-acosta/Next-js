import Sider from 'antd/lib/layout/Sider'
import { Content, Footer } from 'antd/lib/layout/layout'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import React, { ReactNode, FunctionComponent } from 'react'
import { useRouter } from 'next/router'

const DefaultLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter()

  const sidebarItems: MenuProps['items'] = [
    {
      key: 'hooks',
      label: 'Uso de hooks',
      children: [
        {
          key: 'use-State',
          label: 'useState',
          onClick: () => router.push('/' + 'useState'),
        },
      ],
    },
  ]
  return (
    <Layout>
      {/* <Header className='header !bg-slate-400'>
        <div className='flex items-center justify-center font-bold text-xl'>
          Manejo de Hooks :)
        </div> */}
      {/* <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items1}
        /> */}
      {/* </Header> */}
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          className='site-layout-background'
          style={{ padding: '24px 0' }}
        >
          <div className='flex'>
            <Sider className='site-layout-background' width={200}>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['items']}
                style={{ height: '100%' }}
                items={sidebarItems}
              />
            </Sider>
            <Content className='h-screen p-10'>{children}</Content>
          </div>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Nunca pares de aprender!!</Footer>
    </Layout>
  )
}

export default DefaultLayout
