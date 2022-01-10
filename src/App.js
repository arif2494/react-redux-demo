import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
