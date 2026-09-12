> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/endedreason/unanswered](https://developer.apple.com/documentation/livecommunicationkit/conversation/endedreason/unanswered)

# Conversation.EndedReason.unanswered

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

The conversation didn’t complete the connection process and was never explicitly ended.

## Declaration

```swift
case unanswered
```

<a id="discussion"></a>

## Discussion

Conversations might end with the `.unsanswered` reason when a person doesn’t respond to an incoming conversation or when an incoming or outgoing conversation times out.

## See Also

### Reasons

- [Conversation.EndedReason.declinedElsewhere](declinedelsewhere.md): Another device declined the conversation.
- [Conversation.EndedReason.failed](failed.md): An error occurred while attempting to service the conversation.
- [Conversation.EndedReason.joinedElsewhere](joinedelsewhere.md): Another device joined the conversation.
- [Conversation.EndedReason.remoteEnded](remoteended.md): The remote party explicitly ended the conversation.
