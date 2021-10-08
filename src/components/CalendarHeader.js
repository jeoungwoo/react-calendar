// CalendarHeader 캘린더의 헤더부분. 표시되는 달, 좌우 월간 이동, 일정 추가 버튼

import React from "react";
import styled, { css } from "styled-components";
import { Flexbox } from "../mixins/posCenter";

const CalendarHeader = memo((props) => {

    return (
        <React.Fragment>
            <Header>
                <Nav>
                    <HeaderBtn onClick={}>
                        <BsChevronLeft />
                    </HeaderBtn>

                    <CurrentDate>{current.format("YYYY년 MM월")}</CurrentDate>

                    <HeaderBtn onClick={}>
                        <BsChevronRight />
                    </HeaderBtn>
                </Nav>

                <HeaderBtn onClick={props.toAdd}>
                    <FaPlus />
                    <BtnText>일정 추가하기</BtnText>
                </HeaderBtn>
            </Header>
        </React.Fragment>
    );
});

const Header = styled.div`
    ${({theme}) => {
        const { device, colors } = theme;
        return css`
            ${Flexbox}
            position: relative;
            justify-content: flex-end;
            height: 50px;
            border-button: 2px solid ${colors.basicBorder};

            ${device.tablet} {
                height: 60px;
                padding: 0 20px;

            }
        `;
    }}
`;

const Nav = styled.div`
    ${Flexbox};
    ${PosCenter};
    height: 100%;
`;

const HeaderStyle = css`
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-weight: 600;
`;

const CurrentDate = styled.h2`
    ${Flexbox};
    ${HeaderStyle};
    width: 150px;
`;

const CurrentDate = styled.h2`
    ${Flexbox};
    ${HeaderStyle};
    height: 100%;
    padding: 0 5px;
    margin: 0 10px;

    ${({theme}) => theme.device.tablet} {
        padding: 0 15px;
        margin: 0 10px;
    }
`;

const BtnText = styled.span`
    display: none;

    ${({theme}) => theme.device.tablet} {
        display: block;
        margin-left: 5px;
        margin-bottom: 3px;
        font-size: ${({theme}) => theme.fontSizes.md};
    }
`;

export default CalendarHeader;