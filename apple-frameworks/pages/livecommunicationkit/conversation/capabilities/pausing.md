> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/capabilities/pausing](https://developer.apple.com/documentation/livecommunicationkit/conversation/capabilities/pausing)

# pausing

**Framework:** LiveCommunicationKit  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

The conversation is active and can be temporarily paused.

## Declaration

```swift
static let pausing: Conversation.Capabilities
```

<a id="discussion"></a>

## Discussion

Pausing a conversation can include stopping all microphone, camera, and speaker interaction.

## See Also

### Capabilities

- [merging](merging.md): The conversation can merge with another conversation to create a new conversation.
- [playingTones](playingtones.md): The conversation supports playing tone sequences.
- [unmerging](unmerging.md): The conversation is the result of merging two conversations and can be separated into the original conversations.
- [video](video.md): The conversation sends or displays video streams.
