> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:didactivate:)](https://developer.apple.com/documentation/livecommunicationkit/conversationmanagerdelegate/conversationmanager(_:didactivate:))

# conversationManager(\_:didActivate:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Tells the delegate that the app activated the conversation’s audio session.

## Declaration

```swift
func conversationManager(_ manager: ConversationManager, didActivate audioSession: AVAudioSession)
```

## Parameters

- `manager`: A conversation manager informing the delegate that the app activated the audio session.
- `audioSession`: The audio session that the app activated.

## Mentioned In

- [Initiating VoIP conversations with LiveCommunicationKit](../initiating-voip-conversations-with-livecommunicationkit.md)

## See Also

### Receiving status updates

- [conversationManager(\_:conversationChanged:)](conversationmanager%28__conversationchanged_%29.md): Tells the delegate that a conversation changed.
- [conversationManager(\_:didDeactivate:)](conversationmanager%28__diddeactivate_%29.md): Tells the delegate that the app deactivated a conversation’s audio session..
