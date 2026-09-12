> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/endedreason](https://developer.apple.com/documentation/livecommunicationkit/conversation/endedreason)

# Conversation.EndedReason

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Values that describe why a conversation ended.

## Declaration

```swift
enum EndedReason
```

## Topics

### Reasons

- [Conversation.EndedReason.declinedElsewhere](endedreason/declinedelsewhere.md): Another device declined the conversation.
- [Conversation.EndedReason.failed](endedreason/failed.md): An error occurred while attempting to service the conversation.
- [Conversation.EndedReason.joinedElsewhere](endedreason/joinedelsewhere.md): Another device joined the conversation.
- [Conversation.EndedReason.remoteEnded](endedreason/remoteended.md): The remote party explicitly ended the conversation.
- [Conversation.EndedReason.unanswered](endedreason/unanswered.md): The conversation didn’t complete the connection process and was never explicitly ended.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing a conversation

- [Conversation.Event](event.md): Values that tell the system what happened during a conversation.
