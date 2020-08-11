import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import './icon.png';

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 375px;
  height: 812px;
  background: #FAFAFA;
`;

const Form = styled.form`
  position: absolute;
  width: 335px;
  height: 277px;
  left: 20px;
  top: 40px;
  
  background: #FFFFFF;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
`;

const TableBody = styled.div`
  height: 155px;
  padding: 24px 26px 0px 26px;
`;

const GoodsItem = styled.div`
  font-family: Roboto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-flow: row nowrap;
  color: #999999;
`;

const SpanTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

const GoodsItemWithValue = styled.div`
  display: flex;
  align-items: center;;
`;

const InputRadio = styled.input`
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  outline: none;
  box-shadow: 0 0 0 1px #999999;
  background: #FFFFFF;
  margin: 6px 16px 6px 0px;
  
  &:checked {
    box-shadow: 0 0 0 1px green;
  }
  
  :before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    margin: 33.33% auto;
    border-radius: 50%;
   }

 &:checked:before {
    background: green;
   }
`;

const AddToCard = styled.div`
  height: 122px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 49px;
`;

const AddToCardPrice = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: right;
  color: #000000;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 48px;
  background: #6CA22C;
  border: none;
  border-radius: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
`;

const Icon = styled.img`
  width: 24px;
  height: 16.87px;
  color: white;
`;



const GoodsWidget = (props: any): JSX.Element => {
  const { goodsList = [
    {
      price: '500 грн',
      value: '500 г'
    },
    {
      price: '150 грн',
      value: '100 г'
    },
    {
      price: '90 грн',
      value: '50 г'
    }
  ], handleAddItemToCard } = props;

  const [activeGoodsIndex, setActiveGoodsIndex] = useState( 0);

  const handleSelectGoodsItem = (idx: number): void => {
    setActiveGoodsIndex(idx);
  };

  return (
    <Wrapper>
      <Form>
        <TableBody>

          <GoodsItem>
            <SpanTitle>Тип</SpanTitle>
            <SpanTitle>Ціна</SpanTitle>
          </GoodsItem>

          {goodsList.map((goods: any, idx: number) => (
            <GoodsItem key={idx}>
              <GoodsItemWithValue>
                <InputRadio
                  type="radio"
                  onChange={() => handleSelectGoodsItem(idx)}
                  checked={activeGoodsIndex === idx}
                />
                <span style={{
                  fontWeight: activeGoodsIndex === idx ? "bold" : "normal",
                  color: activeGoodsIndex === idx ? "black" : "#999999"
                }}>
                  {goods.value}
                </span>
              </GoodsItemWithValue>
              <span style={{
                fontWeight: activeGoodsIndex === idx ? "bold" : "normal",
                color: activeGoodsIndex === idx ? "black" : "#999999"
              }}>
                {goods.price}
              </span>
            </GoodsItem>
          ))}
        </TableBody>

        <AddToCard>
          <AddToCardPrice>{goodsList[activeGoodsIndex].price}</AddToCardPrice>
          <Button
            type="button"
            onClick={() => handleAddItemToCard(goodsList[activeGoodsIndex])}
          >
            <Icon src={require('./icon.png')}/>
            &nbsp;
            <span>До кошика</span>
          </Button>
        </AddToCard>

      </Form>
    </Wrapper>
  )
};

export default GoodsWidget;
