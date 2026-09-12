> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanagerdelegate](https://developer.apple.com/documentation/livecommunicationkit/conversationmanagerdelegate)

# ConversationManagerDelegate

**Framework:** LiveCommunicationKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Methods for managing conversations and receiving VoIP conversation updates.

## Declaration

```swift
protocol ConversationManagerDelegate : AnyObject
```

## Mentioned In

- [Initiating VoIP conversations with LiveCommunicationKit](initiating-voip-conversations-with-livecommunicationkit.md)

## Topics

### Observing the conversation manager

- [conversationManagerDidBegin(\_:)](conversationmanagerdelegate/conversationmanagerdidbegin%28__%29.md): Tells the delegate that your app has started a conversation manager.
- [conversationManagerDidReset(\_:)](conversationmanagerdelegate/conversationmanagerdidreset%28__%29.md): Tells the delegate that the app has reset the conversation manager.

### Receiving status updates

- [conversationManager(\_:conversationChanged:)](conversationmanagerdelegate/conversationmanager%28__conversationchanged_%29.md): Tells the delegate that a conversation changed.
- [conversationManager(\_:didActivate:)](conversationmanagerdelegate/conversationmanager%28__didactivate_%29.md): Tells the delegate that the app activated the conversation’s audio session.
- [conversationManager(\_:didDeactivate:)](conversationmanagerdelegate/conversationmanager%28__diddeactivate_%29.md): Tells the delegate that the app deactivated a conversation’s audio session..

### Performing actions

- [conversationManager(\_:perform:)](conversationmanagerdelegate/conversationmanager%28__perform_%29.md): Tells the delegate that the system requires a conversation action.
- [conversationManager(\_:timedOutPerforming:)](conversationmanagerdelegate/conversationmanager%28__timedoutperforming_%29.md): Tells the delegate that a conversation action wasn’t completed and timed out.

## See Also

### VoIP conversations

- [ConversationManager](conversationmanager.md): An interface for managing and observing VoIP conversations.
- [ConversationHistoryManager](conversationhistorymanager.md): An interface for managing and providing conversation history.
- [Conversation](conversation.md): A type that describes a video or audio conversation.
