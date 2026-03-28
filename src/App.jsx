import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <div>
        <h2>React World On The Go...</h2>
        <Suspense fallback={ <p> Countries is coming...</p>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
