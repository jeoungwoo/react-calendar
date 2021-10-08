// ColorBtns 스케줄 추가시 색상 선택

import React from "react";
import styled from "styled-components";
import { Flexbox } from "../mixins";
import theme from "../shared/theme";

const ColorBtns = (props) => {
    const { current, _onClick } = props; // current는 선택된 색상 의미

    const { label: colors } = theme;
    const labels = Object.entries(colors); // colors(theme의 label)를 [key, value]의 형태로 변형한 배열 생성
    return (
        <React.Fragment>
            <Container>
                {lavels.map((label, idx) => (
                    <LabelBtn
                        type="button"
                        key={label[0]}
                        id={label[0]}
                        color={label[1]}
                        current={current === label[0]} // 현재 색상과 해당 색상이 같으면 true 아니면 false
                        onClick={_onClick}
                    ></LabelBtn>
                ))}
            </Container>
        </React.Fragment>
    );
};

const Container = styled.div`
    ${Flexbox}
    justify-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

const LabelBtn = styled.button`
    width: 20px;
    height: 20px;
    border: 3px solid
        ${({ theme, current }) => (current ? theme.colors.white : "transparent")}; // 선택된 색상과 해당 색상이 같을 경우
    border-radius: 50%;
    background-color: ${({ color }) => color};

    ${({ theme }) => theme.device.tablet} {
        width: 25px;
        height: 25px;
    }
`;

export default ColorBtns;