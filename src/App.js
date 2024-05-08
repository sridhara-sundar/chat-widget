import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ChatWidget from './components/ChatWidget';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for your ChatWidget component */}
        <Route path="/chat-widget/:token/:title/:subtitle/:prop1" element={<ChatWidgetWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper component to extract URL parameters and pass them to ChatWidget
const ChatWidgetWrapper = () => {
  const { token, title, subtitle, prop1 } = useParams();
  return <ChatWidget token={token} title={title} subtitle={subtitle} prop1={prop1} />;
};

export default App;
