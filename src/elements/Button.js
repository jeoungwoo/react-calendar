import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Flexbox } from "../mixins";

// 버튼 공통
const Btn = css`
    ${({ theme }) => {
        const { colors } = theme;
        return css`
            ${Flexbox};
            color: ${colors.black};
            background-color: ${colors.white};
            transition: background-color 200ms ease-in-out;

            &:hover {
                color: ${colors.black};
                background-color: ${colors.lightGray};
            }
        `;
    }}
`;

const RectangleBtn = styled.button`
    ${({ theme }) => {
        const { fontSizes } = theme;
        return css`
            ${Btn}
            padding: 10px;
            border-radius: 5px;
            font-size: ${fontSizes.sm};
            font-weight: 600;
        `;
    }}
`;

const CancleBtn = styled(Link)`
    ${({ theme }) => theme.fontSizes.sm};
    padding: 10px;
`;

const ModalBtn = styled.button`
    ${({ theme }) => {
        const { fontSizes, device } = theme;
        return css`
            ${Flexbox};
            ${Btn};
            position: absolute;
            bottom: 10px;
            right: 10px;
            padding: 5px;
            font-weight: 600;

            ${device.tablet} {
                padding: 5px 10px;
                font-size: ${fontSizes.md};
            }
        `;
    }}
`;

export { RectangleBtn, CancleBtn, ModalBtn };