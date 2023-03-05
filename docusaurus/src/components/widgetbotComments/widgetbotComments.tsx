import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

interface CommentsProps {
	server: string;
	channel: string;
}

const App = ({server, channel}: CommentsProps) => (
  <WidgetBot
	server={server}
	channel={subchannel}
  />
)

export default App