import { useState, useEffect } from "react";

//
import { io } from "socket.io-client";
//
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/theme";
import Home from "./route/Home";
const socket = io("http://localhost:8080");

interface Types {
  coins: [];
}

function App() {
  const [coins, setCoins] = useState<[]>([]);

  useEffect(() => {
    socket.on("crypto", (data) => {
      setCoins(data);
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home coins={coins} />
      </div>
    </ThemeProvider>
  );
}

export default App;
