> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger/messagecontext](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/messagecontext)

# GroupSessionMessenger.MessageContext

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A structure that contains additional information about an incoming message, such as which device sent it.

## Declaration

```swift
struct MessageContext
```

## Mentioned In

- [Synchronizing data during a SharePlay activity](../synchronizing-data-during-a-shareplay-activity.md)

## Topics

### Getting the initiating participant

- [source](messagecontext/source.md): The participant device that sent the message.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving data from other participants

- [messages(of:)](messages%28of_%29-626qo.md): Returns the asynchronous sequence of messages that contain a generic data object.
- [messages(of:)](messages%28of_%29-jvoz.md): Returns the asynchronous sequence of messages that match the app-specific type.
- [GroupSessionMessenger.Messages](messages.md): An asynchronous sequence of messages sent to the session.
