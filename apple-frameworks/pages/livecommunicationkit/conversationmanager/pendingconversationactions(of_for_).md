> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanager/pendingconversationactions(of:for:)](https://developer.apple.com/documentation/livecommunicationkit/conversationmanager/pendingconversationactions(of:for:))

# pendingConversationActions(of:for:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Queries a conversation for pending actions of a specified type.

## Declaration

```swift
final func pendingConversationActions(of conversationActionClass: ConversationAction.Type, for conversation: Conversation) -> [ConversationAction]
```

## Parameters

- `conversationActionClass`: The type of action to query.
- `conversation`: The conversation to query.

<a id="return-value"></a>

## Return Value

An array of a conversation’s pending conversation actions of the specified type.

## See Also

### Observing conversations

- [reportConversationEvent(\_:for:)](reportconversationevent%28__for_%29.md): Informs the system that an event has occurred and that it needs to update the conversation if necessary.
- [reportNewIncomingConversation(uuid:update:)](reportnewincomingconversation%28uuid_update_%29.md): Informs the system that there’s a new incoming conversation, and the device should begin to ring and present the incoming Conversation UI.
- [reportNewIncomingVoIPPushPayload(\_:)](reportnewincomingvoippushpayload%28__%29.md): Reports a new incoming conversation after your notification service extension decrypts a VoIP request.
