> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readcompletionnotification](https://developer.apple.com/documentation/foundation/filehandle/readcompletionnotification)

# readCompletionNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the file handle reads the data currently available in a file or at a communications channel.

## Declaration

```swift
class let readCompletionNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

It makes the data available to observers by putting it in the `userInfo` dictionary. To cause the posting of this notification, you must send either [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md) or [readInBackgroundAndNotify(forModes:)](readinbackgroundandnotify%28formodes_%29.md) to an appropriate `NSFileHandle` object.

The notification object is the `NSFileHandle` object that sent the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `NSFileHandleNotificationDataItem` | An `NSData` object containing the available data read from a socket connection. |
| `@"NSFileHandleError"` | An `NSNumber` object containing an integer representing the UNIX-type error which occurred. |

## See Also

### Working with notifications

- [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleDataAvailable](../nsnotification/name-swift.struct/nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletion](../nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.

# NSFileHandleReadCompletionNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the file handle reads the data currently available in a file or at a communications channel.

## Declaration

```objectivec
extern NSNotificationName const NSFileHandleReadCompletionNotification;
```

<a id="Discussion"></a>

## Discussion

It makes the data available to observers by putting it in the `userInfo` dictionary. To cause the posting of this notification, you must send either [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md) or [readInBackgroundAndNotifyForModes:](readinbackgroundandnotify%28formodes_%29.md) to an appropriate `NSFileHandle` object.

The notification object is the `NSFileHandle` object that sent the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `NSFileHandleNotificationDataItem` | An `NSData` object containing the available data read from a socket connection. |
| `@"NSFileHandleError"` | An `NSNumber` object containing an integer representing the UNIX-type error which occurred. |

## See Also

### Working with notifications

- [NSFileHandleConnectionAcceptedNotification](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleDataAvailableNotification](../nsnotification/name-swift.struct/nsfilehandledataavailable.md): Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletionNotification](../nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.
