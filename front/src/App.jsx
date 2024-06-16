import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Msg from "./components/Msg";
import Post from "./components/Post";

const Posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <>
      <Header />
      <main className="p-4 flex-grow grid md:grid-cols-2 gap-4">
        <section>
          <ul>
            {Posts.map((post) => {
              return (
                <li key={post}>
                  <Post id={post} />
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <ul>
            {Messages.map((message) => {
              return (
                <li key={message}>
                  <Msg id={message} />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
