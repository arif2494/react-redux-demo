import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
