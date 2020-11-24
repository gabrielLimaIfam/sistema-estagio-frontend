import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .form-group {
        width: 50%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        label{
            font-size: 1.4rem;
            width: 50%;
            display: flex;
            align-items: center;
            font-weight: bold;
            margin-bottom: 8px;

            *{
                margin-right: 2px;
            }
        }
        
        input{
            background: var(--color-textfield);
            width: 60%;
            height: 34px;
            margin-left: 8px;
            padding: 8px;
        }

        :last-child{
            flex-direction: initial;
            width: 100%;
            padding: 0 30%;
            justify-content: space-around;
        }

        button{
            font-size: 1.4rem;
            width: 100px;
            height: 30px;
        }

        #salvar{
            color: #FFF;
            background: var(--color-confirm);
        }
        
        #cancelar{
            background: var(--color-textfield);
        }
    }
`;
