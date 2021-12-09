import "./styles.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/chatFeed";
const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="
       49fa257b-5cb2-4631-9b02-22850c5e06e9"
        userName="Jaya"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};
export default App;
