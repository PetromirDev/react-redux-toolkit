import styled from "styled-components";

const Page = styled.div`
    min-height: 100vh;
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Column = styled(Center)`
    flex-direction: column;
`;

export {Page, Center, Column};