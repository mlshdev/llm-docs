> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/state-swift.enum](https://developer.apple.com/documentation/livecommunicationkit/conversation/state-swift.enum)

# Conversation.State

**Framework:** LiveCommunicationKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Values that describe the current state of a conversation.

## Declaration

```swift
enum State
```

## Topics

### States

- [Conversation.State.idle](state-swift.enum/idle.md): The conversation was registered with the system, but it’s not active yet.
- [Conversation.State.joined](state-swift.enum/joined.md): Audio and video streams are active and the local participant is able to engage with remote participants.
- [Conversation.State.joining](state-swift.enum/joining.md): The setup process of the conversation in progress; for example, establishing audio and video streams.
- [Conversation.State.leaving](state-swift.enum/leaving.md): Participants left the conversation and it’s in the process of ending.
- [Conversation.State.left](state-swift.enum/left.md): The conversation is no longer active and all audio and video sessions have ended.
- [Conversation.State.paused](state-swift.enum/paused.md): Audio and video streams are paused, but may resume.

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

### Describing a conversation

- [localMember](localmember.md): The handle that identifies the local participant to remote participants.
- [state](state-swift.property.md): The current state of the conversation.
- [uuid](uuid.md): The unique identifier for a conversation.
