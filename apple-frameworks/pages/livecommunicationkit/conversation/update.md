> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/conversation/update](https://developer.apple.com/documentation/livecommunicationkit/conversation/update)

# Conversation.Update

**Framework:** LiveCommunicationKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+ · watchOS 10.4+

A type that describes new, changed, or deleted capabilities and attributes of a conversation.

## Declaration

```swift
struct Update
```

## Topics

### Initializers

- [init(localMember:members:activeRemoteMembers:capabilities:)](update/init%28localmember_members_activeremotemembers_capabilities_%29.md): Creates an object with updated conversation attributes and capabilities.

### Attributes

- [activeRemoteMembers](update/activeremotemembers.md): All active remote participants.
- [capabilities](update/capabilities.md): Functionality that the conversation supports after the system applies the update.
- [localMember](update/localmember.md): The local participant in the conversation.
- [members](update/members.md): All participants of the conversation, including invited, but inactive remote participants.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating a conversation

- [Conversation.Capabilities](capabilities.md): A type that describes capabilities of a conversation.
