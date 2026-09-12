> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsfilehandleconnectionaccepted](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsfilehandleconnectionaccepted)

# NSFileHandleConnectionAccepted (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.

## Declaration

```swift
static let NSFileHandleConnectionAccepted: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

To cause the posting of this notification, you must send either [acceptConnectionInBackgroundAndNotify()](../../filehandle/acceptconnectioninbackgroundandnotify%28%29.md) or [acceptConnectionInBackgroundAndNotify(forModes:)](../../filehandle/acceptconnectioninbackgroundandnotify%28formodes_%29.md) to an `NSFileHandle` object representing a server stream-type socket.

The notification object is the `NSFileHandle` object that sent the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `NSFileHandleNotificationFileHandleItem` | The `NSFileHandle` object representing the “near” end of a socket connection. |
| `@"NSFileHandleError"` | An `NSNumber` object containing an integer representing the UNIX-type error which occurred. |

## See Also

### Working with notifications

- [NSFileHandleDataAvailable](nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [readCompletionNotification](../../filehandle/readcompletionnotification.md): Posted when the file handle reads the data currently available in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletion](nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.

# NSFileHandleConnectionAcceptedNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.

## Declaration

```objectivec
extern NSNotificationName const NSFileHandleConnectionAcceptedNotification;
```

<a id="Discussion"></a>

## Discussion

To cause the posting of this notification, you must send either [acceptConnectionInBackgroundAndNotify](../../filehandle/acceptconnectioninbackgroundandnotify%28%29.md) or [acceptConnectionInBackgroundAndNotifyForModes:](../../filehandle/acceptconnectioninbackgroundandnotify%28formodes_%29.md) to an `NSFileHandle` object representing a server stream-type socket.

The notification object is the `NSFileHandle` object that sent the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `NSFileHandleNotificationFileHandleItem` | The `NSFileHandle` object representing the “near” end of a socket connection. |
| `@"NSFileHandleError"` | An `NSNumber` object containing an integer representing the UNIX-type error which occurred. |

## See Also

### Working with notifications

- [NSFileHandleDataAvailableNotification](nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [NSFileHandleReadCompletionNotification](../../filehandle/readcompletionnotification.md): Posted when the file handle reads the data currently available in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletionNotification](nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.
