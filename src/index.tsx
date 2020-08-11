import * as React from 'react'

import Header from './components/header/header';
import GoodsWidget from './components/goods-widget/goods-widget';
import {GlobalStyles} from './global';

const TestApp = () => (
    <div>
      <GlobalStyles/>
        <Header/>
        <GoodsWidget
          handleAddItemToCard={(item: any) => console.log(item)}
        />
    </div>
);

export default TestApp
