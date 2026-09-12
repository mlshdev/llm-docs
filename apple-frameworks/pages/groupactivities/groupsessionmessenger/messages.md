> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionmessenger/messages](https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/messages)

# GroupSessionMessenger.Messages

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An asynchronous sequence of messages sent to the session.

## Declaration

```swift
struct Messages<Message> where Message : Decodable, Message : Encodable
```

<a id="overview"></a>

## Overview

When you use a [GroupSessionMessenger](../groupsessionmessenger.md) to communicate across devices, the `Messages` structure provides the sequence of messages the other devices send. Iterate over the contents of this structure asynchronously to retrieve each message and update your app.

Don’t create this structure directly. Instead, use the [messages(of:)](messages%28of_%29-626qo.md) or [messages(of:)](messages%28of_%29-jvoz.md) method to retrieve the messages for a given session.

## Topics

### Creating an iterator

- [GroupSessionMessenger.Messages.Iterator](messages/iterator.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving data from other participants

- [messages(of:)](messages%28of_%29-626qo.md): Returns the asynchronous sequence of messages that contain a generic data object.
- [messages(of:)](messages%28of_%29-jvoz.md): Returns the asynchronous sequence of messages that match the app-specific type.
- [GroupSessionMessenger.MessageContext](messagecontext.md): A structure that contains additional information about an incoming message, such as which device sent it.
