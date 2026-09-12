> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:conversationchanged:)](https://developer.apple.com/documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:conversationchanged:))

# conversationManager(\_:conversationChanged:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Tells the delegate that a conversation changed.

## Declaration

```swift
func conversationManager(_ manager: ConversationManager, conversationChanged conversation: Conversation)
```

## Parameters

- `manager`: A conversation manager informing the delegate that a conversation changed.
- `conversation`: The conversation that changed.

## See Also

### Receiving status updates

- [conversationManager(\_:didActivate:)](conversationmanager%28__didactivate_%29.md): Tells the delegate that the app activated the conversation’s audio session.
- [conversationManager(\_:didDeactivate:)](conversationmanager%28__diddeactivate_%29.md): Tells the delegate that the app deactivated a conversation’s audio session..
