> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/state-swift.enum/leaving](https://developer.apple.com/documentation/livecommunicationkit/conversation/state-swift.enum/leaving)

# Conversation.State.leaving

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Participants left the conversation and it’s in the process of ending.

## Declaration

```swift
case leaving
```

## See Also

### States

- [Conversation.State.idle](idle.md): The conversation was registered with the system, but it’s not active yet.
- [Conversation.State.joined](joined.md): Audio and video streams are active and the local participant is able to engage with remote participants.
- [Conversation.State.joining](joining.md): The setup process of the conversation in progress; for example, establishing audio and video streams.
- [Conversation.State.left](left.md): The conversation is no longer active and all audio and video sessions have ended.
- [Conversation.State.paused](paused.md): Audio and video streams are paused, but may resume.
