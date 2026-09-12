> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversationmanager/reportnewincomingvoippushpayload(_:)](https://developer.apple.com/documentation/livecommunicationkit/conversationmanager/reportnewincomingvoippushpayload(_:))

# reportNewIncomingVoIPPushPayload(\_:)

**Framework:** LiveCommunicationKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

Reports a new incoming conversation after your notification service extension decrypts a VoIP request.

## Declaration

```swift
final class func reportNewIncomingVoIPPushPayload(_ payload: [AnyHashable : Any]) async throws
```

## Parameters

- `payload`: A dictionary containing additional data about the incoming conversation. All keys and values in the dictionary must implement the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol.

<a id="discussion"></a>

## Discussion

> **Throws**

> When the system disallows a conversation, an error is thrown that contains information about why it disallowed the conversation.

## See Also

### Observing conversations

- [pendingConversationActions(of:for:)](pendingconversationactions%28of_for_%29.md): Queries a conversation for pending actions of a specified type.
- [reportConversationEvent(\_:for:)](reportconversationevent%28__for_%29.md): Informs the system that an event has occurred and that it needs to update the conversation if necessary.
- [reportNewIncomingConversation(uuid:update:)](reportnewincomingconversation%28uuid_update_%29.md): Informs the system that there’s a new incoming conversation, and the device should begin to ring and present the incoming Conversation UI.
