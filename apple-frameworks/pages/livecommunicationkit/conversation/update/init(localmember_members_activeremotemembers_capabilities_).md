> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/update/init(localmember:members:activeremotemembers:capabilities:)](https://developer.apple.com/documentation/livecommunicationkit/conversation/update/init(localmember:members:activeremotemembers:capabilities:))

# init(localMember:members:activeRemoteMembers:capabilities:)

**Framework:** LiveCommunicationKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates an object with updated conversation attributes and capabilities.

## Declaration

```swift
init(localMember: Handle? = nil, members: Set<Handle>? = nil, activeRemoteMembers: Set<Handle>? = nil, capabilities: Conversation.Capabilities? = nil)
```

## Parameters

- `localMember`: The local participant.
- `members`: All participants.
- `activeRemoteMembers`: The active remote participants.
- `capabilities`: The conversation’s capabilities.
