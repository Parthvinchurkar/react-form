import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Success from "./Success";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
