> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readinbackgroundandnotify()](https://developer.apple.com/documentation/foundation/filehandle/readinbackgroundandnotify())

# readInBackgroundAndNotify() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads from the file or communications channel in the background and posts a notification when finished.

## Declaration

```swift
func readInBackgroundAndNotify()
```

<a id="Discussion"></a>

## Discussion

This method performs an asynchronous [availableData](availabledata.md) operation on a file or communications channel and posts an [readCompletionNotification](readcompletionnotification.md) notification on the current thread when that operation is complete. You must call this method from a thread that has an active run loop.

The length of the data is limited to the buffer size of the underlying operating system. The notification includes a `userInfo` dictionary that contains the data read; access this object using the `NSFileHandleNotificationDataItem` key.

Any object interested in receiving this data asynchronously must add itself as an observer of [readCompletionNotification](readcompletionnotification.md). In communication via stream-type sockets, the receiver is often the object returned in the `userInfo` dictionary of [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md).

Note that this method does not cause a continuous stream of notifications to be sent. If you wish to keep getting notified, you’ll also need to call [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md) in your observer method.

## See Also

### Related Documentation

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotify(forModes:)](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify(forModes:)](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify(forModes:)](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotify(forModes:)](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

# readInBackgroundAndNotify (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads from the file or communications channel in the background and posts a notification when finished.

## Declaration

```objectivec
- (void) readInBackgroundAndNotify;
```

<a id="Discussion"></a>

## Discussion

This method performs an asynchronous [availableData](availabledata.md) operation on a file or communications channel and posts an [NSFileHandleReadCompletionNotification](readcompletionnotification.md) notification on the current thread when that operation is complete. You must call this method from a thread that has an active run loop.

The length of the data is limited to the buffer size of the underlying operating system. The notification includes a `userInfo` dictionary that contains the data read; access this object using the `NSFileHandleNotificationDataItem` key.

Any object interested in receiving this data asynchronously must add itself as an observer of [NSFileHandleReadCompletionNotification](readcompletionnotification.md). In communication via stream-type sockets, the receiver is often the object returned in the `userInfo` dictionary of [NSFileHandleConnectionAcceptedNotification](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md).

Note that this method does not cause a continuous stream of notifications to be sent. If you wish to keep getting notified, you’ll also need to call [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md) in your observer method.

## See Also

### Related Documentation

- [enqueueNotification:postingStyle:coalesceMask:forModes:](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotifyForModes:](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotifyForModes:](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotifyForModes:](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotifyForModes:](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.
