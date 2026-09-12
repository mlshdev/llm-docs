> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messages(of:for:buffersize:)-1ub69](https://developer.apple.com/documentation/foundation/notificationcenter/messages(of:for:buffersize:)-1ub69)

# messages(of:for:bufferSize:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an asynchronous sequence of messages produced by this center for a given subject type and identifier.

## Declaration

```swift
func messages<Identifier, Message>(of subject: Message.Subject.Type, for identifier: Identifier, bufferSize limit: Int = 10) -> some Sendable & AsyncSequence<Message, Never> where Identifier : NotificationCenter.MessageIdentifier, Message : NotificationCenter.AsyncMessage, Message == Identifier.MessageType

```

## Parameters

- `subject`: The metatype to observe all values for a given type.
- `identifier`: An identifier representing a specific message type.
- `limit`: The maximum number of messages allowed to buffer.

<a id="return-value"></a>

## Return Value

An asynchronous sequence of messages produced by this center.

## See Also

### Receiving notifications as asynchronous sequences

- [messages(of:for:bufferSize:)](messages%28of_for_buffersize_%29-4tof0.md): Returns an asynchronous sequence of messages produced by this center for a given subject and identifier.
- [messages(of:for:bufferSize:)](messages%28of_for_buffersize_%29-623kg.md): Returns an asynchronous sequence of messages produced by this center for a given subject and message type.
