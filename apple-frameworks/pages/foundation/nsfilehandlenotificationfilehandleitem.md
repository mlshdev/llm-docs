> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilehandlenotificationfilehandleitem](https://developer.apple.com/documentation/foundation/nsfilehandlenotificationfilehandleitem)

# NSFileHandleNotificationFileHandleItem (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key in the userinfo dictionary in a [NSFileHandleConnectionAccepted](nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md) notification.

## Declaration

```swift
let NSFileHandleNotificationFileHandleItem: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is the `NSFileHandle` object representing the “near” end of a socket connection.

## See Also

### Constants

- [NSFileHandleNotificationDataItem](nsfilehandlenotificationdataitem.md): A key in the userinfo dictionary in a [readCompletionNotification](filehandle/readcompletionnotification.md) and [NSFileHandleReadToEndOfFileCompletion](nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md).
- [NSFileHandleNotificationMonitorModes](nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

# NSFileHandleNotificationFileHandleItem (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key in the userinfo dictionary in a [NSFileHandleConnectionAcceptedNotification](nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md) notification.

## Declaration

```objectivec
extern NSString * const NSFileHandleNotificationFileHandleItem;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is the `NSFileHandle` object representing the “near” end of a socket connection.

## See Also

### Constants

- [NSFileHandleNotificationDataItem](nsfilehandlenotificationdataitem.md): A key in the userinfo dictionary in a [NSFileHandleReadCompletionNotification](filehandle/readcompletionnotification.md) and [NSFileHandleReadToEndOfFileCompletionNotification](nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md).
- [NSFileHandleNotificationMonitorModes](nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.
