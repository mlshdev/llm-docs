> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/conversation/update/localmember

# localMember

**Framework:** LiveCommunicationKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

The local participant in the conversation.

## Declaration

```swift
var localMember: Handle? { get set }
```

## See Also

### Attributes

- [activeRemoteMembers](activeremotemembers.md): All active remote participants.
- [capabilities](capabilities.md): Functionality that the conversation supports after the system applies the update.
- [members](members.md): All participants of the conversation, including invited, but inactive remote participants.
