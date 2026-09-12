> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsfilehandledataavailable](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsfilehandledataavailable)

# NSFileHandleDataAvailable (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.

## Declaration

```swift
static let NSFileHandleDataAvailable: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The observers can then issue the appropriate messages to begin reading the data. To cause the posting of this notification, you must send either [waitForDataInBackgroundAndNotify()](../../filehandle/waitfordatainbackgroundandnotify%28%29.md) or [waitForDataInBackgroundAndNotify(forModes:)](../../filehandle/waitfordatainbackgroundandnotify%28formodes_%29.md) to an appropriate `NSFileHandle` object.

The notification object is the `NSFileHandle` object that sent the notification. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Working with notifications

- [NSFileHandleConnectionAccepted](nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [readCompletionNotification](../../filehandle/readcompletionnotification.md): Posted when the file handle reads the data currently available in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletion](nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.

# NSFileHandleDataAvailableNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Posted when the file handle determines that data is currently available for reading in a file or at a communications channel.

## Declaration

```objectivec
extern NSNotificationName const NSFileHandleDataAvailableNotification;
```

<a id="Discussion"></a>

## Discussion

The observers can then issue the appropriate messages to begin reading the data. To cause the posting of this notification, you must send either [waitForDataInBackgroundAndNotify](../../filehandle/waitfordatainbackgroundandnotify%28%29.md) or [waitForDataInBackgroundAndNotifyForModes:](../../filehandle/waitfordatainbackgroundandnotify%28formodes_%29.md) to an appropriate `NSFileHandle` object.

The notification object is the `NSFileHandle` object that sent the notification. This notification doesn’t contain a `userInfo` dictionary.

## See Also

### Working with notifications

- [NSFileHandleConnectionAcceptedNotification](nsfilehandleconnectionaccepted.md): Posted when a file handle object establishes a socket connection between two processes, creates a file handle object for one end of the connection, and makes this object available to observers.
- [NSFileHandleReadCompletionNotification](../../filehandle/readcompletionnotification.md): Posted when the file handle reads the data currently available in a file or at a communications channel.
- [NSFileHandleReadToEndOfFileCompletionNotification](nsfilehandlereadtoendoffilecompletion.md): Posted when the file handle reads all data in the file or, in a communications channel, until the other process signals the end of data.
