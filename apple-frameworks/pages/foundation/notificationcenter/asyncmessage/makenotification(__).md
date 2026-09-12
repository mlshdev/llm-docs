> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/asyncmessage/makenotification(_:)](https://developer.apple.com/documentation/foundation/notificationcenter/asyncmessage/makenotification(_:))

# makeNotification(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts a posted asynchronous message into a notification for any observers.

## Declaration

```swift
static func makeNotification(_ message: Self) -> Notification
```

## Parameters

- `message`: The posted `AsyncMessage`.

<a id="return-value"></a>

## Return Value

The converted [Notification](../../notification.md).

<a id="discussion"></a>

## Discussion

To implement this method in your own `AsyncMessage` conformance, use the properties defined by the message to populate the [Notification](../../notification.md)’s [userInfo](../../notification/userinfo.md).

## Default Implementations

### NotificationCenter.AsyncMessage Implementations

- [makeNotification(\_:)](makenotification%28__%29-3760t.md): Converts a posted asynchronous message into a notification for any observers.

## See Also

### Converting between messages and notifications

- [makeMessage(\_:)](makemessage%28__%29.md): Converts a posted notification into this asynchronous message type for any observers.
