import React, {useState} from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../features/counter/counterSlice';
import { Center, Column, Page } from '../styles/utils';

const Home = () => {
    const [toIncrement, setToIncrement] = useState('2');
    const count = useSelector(state => state.count.value);
    const Dispatch = useDispatch();

    return (
        <CenterPage>
            <Center>
                <Column>
                    <IncrementBtnsWrapper>
                        <CountBtn onClick={() => Dispatch(decrement())} color="#D32F2F">-</CountBtn>
                        <CountDisplay>{count}</CountDisplay>
                        <CountBtn onClick={() => Dispatch(increment())} color="#2E7D32">+</CountBtn>
                    </IncrementBtnsWrapper>
                    <Column>
                        <IncrementInput value={toIncrement} onChange={(e) => setToIncrement(e.target.value)} />
                        <IncrementBtn onClick={() => Dispatch(incrementByValue(Number(toIncrement)))}>Increment by {toIncrement}</IncrementBtn>
                    </Column>
                </Column>
            </Center>
        </CenterPage>
    )
}

const CountBtn = styled.button`
    padding: 10px 18px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    background-color: #fff;
    color: #2E7D32;
    
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${props => props.color};
        color: #fff;
    }
`;

const CountDisplay = styled.h1`
    font-size: 2rem;
    margin: 0 10px;
`;

const IncrementBtnsWrapper = styled(Center)`
    padding: 15px 0;
    justify-content: space-between;
    width: 100%;
`;

const IncrementInput = styled.input`
    padding: 10px;
    border-radius: 5px;
`;

const IncrementBtn = styled.button`
    padding: 10px;
    border-radius: 5px;
    background-color: #1976D2;
    border: 1px solid transparent;
    color: #fff;
    width: 100%;
    margin-top: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #fff;
        border-color: #1976D2;
        color: #1976D2;
    }
`;

const CenterPage = styled(Page)`
    display: flex;
    justify-content: center;
    align-items: center;
`;  

export default Home;
