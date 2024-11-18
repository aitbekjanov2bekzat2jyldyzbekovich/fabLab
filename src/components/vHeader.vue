<template>
  <div class="headerWrapper">
    <div class="logo">
      <img src="" />
    </div>
    <nav>
      <form action="#">
        <input type="text" placeholder="Поиск целебных ростений" />
        <button>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 2c0-1.105-.896-2-2-2h-12c-1.105 0-2 .896-2 2v20c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.501 0h3.001c.276 0 .5.224.5.5s-.224.5-.5.5h-3.001c-.275 0-.499-.224-.499-.5s.224-.5.499-.5zm1.501 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm6-3h-12v-14.024h12v14.024z"
            />
          </svg>
        </button>
      </form>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.headerWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;

  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #07ee18;
  }

  nav {
    height: 100%;

    form {
      display: flex;
      gap: 2px;
      align-items: center;
      height: 100%;

      button {
        padding: 5px;
        background: none;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 400ms ease-out;
        transition: opcity 1ms;
        &:active {
          opacity: 0.5;
        }
        svg {
          width: 24px;
          height: 24px;
          fill: #07ee18;
        }

        &:hover {
          background-color: #07ee18;

          svg {
            fill: #fff;
          }
        }
      }

      input {
        padding: 5px 20px;
        outline: none;
        border: none;
        border-bottom: 1px solid #07ee18;
        color: #07ee18;
        outline: none;
        transition: 400ms linear;

        &::placeholder {
          font-size: 11px;
        }
        &:focus {
          border: 1px solid #07ee18;
        }
      }
    }
  }
}
</style>
