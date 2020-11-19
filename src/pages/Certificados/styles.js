import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 0;
  width: 75%;
  display: flex;
  flex-direction: column;

  h1{
    background: var(--color-background-title);
    margin-top: 3%;
    font-size: 2.3rem;
    padding: 5px;
    text-align: center;
    color: white;
  }
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-container);

  :first-child{
    margin-top: 10px;
  }
`
export const TableDocuments = styled.div`

    align-self: center;
    width: 40%;
    margin: 4% 0 4% 0;
    height: 300px;
    overflow-y: scroll;

  .documento{
      background: var(--color-treebar-background);
      border-radius: 2px;
      display: flex;
      align-items: center;
      margin: 8px;
      padding: 8px;

      span{
        margin-left: 8px;
        margin-right: auto;
        font-size: 1.4rem;
        font-weight: bold;
      }

      .download{
        transition: .2s;
        cursor: pointer;
      
        :hover{
          filter: brightness(90%);
        }
      }

    }

`