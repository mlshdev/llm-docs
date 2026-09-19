> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversationmanager/reportnewincomingconversation(uuid:update:)

# reportNewIncomingConversation(uuid:update:)

**Framework:** LiveCommunicationKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Informs the system that there’s a new incoming conversation, and the device should begin to ring and present the incoming Conversation UI.

## Declaration

```swift
final func reportNewIncomingConversation(uuid: UUID, update: Conversation.Update) async throws
```

## Parameters

- `uuid`: The [UUID](../../foundation/uuid.md) used to identify the created conversation.
- `update`: Optional fields to configure the initial state of the conversation.

## See Also

### Observing conversations

- [pendingConversationActions(of:for:)](pendingconversationactions%28of_for_%29.md): Queries a conversation for pending actions of a specified type.
- [reportConversationEvent(\_:for:)](reportconversationevent%28__for_%29.md): Informs the system that an event has occurred and that it needs to update the conversation if necessary.
- [reportNewIncomingVoIPPushPayload(\_:)](reportnewincomingvoippushpayload%28__%29.md): Reports a new incoming conversation after your notification service extension decrypts a VoIP request.
