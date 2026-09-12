> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/asyncmessage/makemessage(_:)](https://developer.apple.com/documentation/foundation/notificationcenter/asyncmessage/makemessage(_:))

# makeMessage(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts a posted notification into this asynchronous message type for any observers.

## Declaration

```swift
static func makeMessage(_ notification: Notification) -> Self?
```

## Parameters

- `notification`: The posted [Notification](../../notification.md).

<a id="return-value"></a>

## Return Value

The converted `AsyncMessage`, or `nil` if conversion is not possible.

<a id="discussion"></a>

## Discussion

To implement this method in your own `AsyncMessage` conformance, retrieve values from the [Notification](../../notification.md)’s [userInfo](../../notification/userinfo.md) and set them as properties on the message.

## Default Implementations

### NotificationCenter.AsyncMessage Implementations

- [makeMessage(\_:)](makemessage%28__%29-2l2y5.md): Converts a posted notification into this asynchronous message type for any observers.

## See Also

### Converting between messages and notifications

- [makeNotification(\_:)](makenotification%28__%29.md): Converts a posted asynchronous message into a notification for any observers.
