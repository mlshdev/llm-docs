> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messages(of:for:buffersize:)-623kg](https://developer.apple.com/documentation/foundation/notificationcenter/messages(of:for:buffersize:)-623kg)

# messages(of:for:bufferSize:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns an asynchronous sequence of messages produced by this center for a given subject and message type.

## Declaration

```swift
func messages<Message>(of subject: Message.Subject? = nil, for messageType: Message.Type, bufferSize limit: Int = 10) -> some Sendable & AsyncSequence<Message, Never> where Message : NotificationCenter.AsyncMessage, Message.Subject : AnyObject

```

## Parameters

- `subject`: The subject to observe. Specify a metatype to observe all values for a given type.
- `messageType`: The message type to be observed.
- `limit`: The maximum number of messages allowed to buffer.

<a id="return-value"></a>

## Return Value

An asynchronous sequence of messages produced by this center.

## See Also

### Receiving notifications as asynchronous sequences

- [messages(of:for:bufferSize:)](messages%28of_for_buffersize_%29-4tof0.md): Returns an asynchronous sequence of messages produced by this center for a given subject and identifier.
- [messages(of:for:bufferSize:)](messages%28of_for_buffersize_%29-1ub69.md): Returns an asynchronous sequence of messages produced by this center for a given subject type and identifier.
