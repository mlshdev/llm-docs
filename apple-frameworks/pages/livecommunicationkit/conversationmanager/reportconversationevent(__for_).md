> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanager/reportconversationevent(_:for:)](https://developer.apple.com/documentation/livecommunicationkit/conversationmanager/reportconversationevent(_:for:))

# reportConversationEvent(\_:for:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Informs the system that an event has occurred and that it needs to update the conversation if necessary.

## Declaration

```swift
final func reportConversationEvent(_ event: Conversation.Event, for conversation: Conversation)
```

## Parameters

- `event`: A conversation event that the system needs to process.
- `conversation`: The conversation that the event applies to.

## See Also

### Observing conversations

- [pendingConversationActions(of:for:)](pendingconversationactions%28of_for_%29.md): Queries a conversation for pending actions of a specified type.
- [reportNewIncomingConversation(uuid:update:)](reportnewincomingconversation%28uuid_update_%29.md): Informs the system that there’s a new incoming conversation, and the device should begin to ring and present the incoming Conversation UI.
- [reportNewIncomingVoIPPushPayload(\_:)](reportnewincomingvoippushpayload%28__%29.md): Reports a new incoming conversation after your notification service extension decrypts a VoIP request.
