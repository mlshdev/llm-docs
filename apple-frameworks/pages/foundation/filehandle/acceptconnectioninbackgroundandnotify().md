> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/acceptconnectioninbackgroundandnotify()](https://developer.apple.com/documentation/foundation/filehandle/acceptconnectioninbackgroundandnotify())

# acceptConnectionInBackgroundAndNotify() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.

## Declaration

```swift
func acceptConnectionInBackgroundAndNotify()
```

<a id="Discussion"></a>

## Discussion

This method asynchronously creates a file handle for the other end of the socket connection and returns that object by posting a [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md) notification in the current thread. The notification includes a `userInfo` dictionary with the created `NSFileHandle` object, which is accessible using the `NSFileHandleNotificationFileHandleItem` key.

You must call this method from a thread that has an active run loop.

<a id="Special-Considerations"></a>

### Special Considerations

The receiver must be created by an [init(fileDescriptor:)](init%28filedescriptor_%29.md) message that takes as an argument a stream-type socket created by the appropriate system routine, *and that is being listened on*. In other words, you must `bind()` the socket, and ensure that the socket has a connection backlog defined by `listen()`.

The object that will write data to the returned file handle must add itself as an observer of [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md).

Note that this method does not continue to listen for connection requests after it posts [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md). If you want to keep getting notified, you need to call [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md) again in your observer method.

## See Also

### Related Documentation

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify(forModes:)](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotify(forModes:)](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify(forModes:)](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotify(forModes:)](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

# acceptConnectionInBackgroundAndNotify (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.

## Declaration

```objectivec
- (void) acceptConnectionInBackgroundAndNotify;
```

<a id="Discussion"></a>

## Discussion

This method asynchronously creates a file handle for the other end of the socket connection and returns that object by posting a [NSFileHandleConnectionAcceptedNotification](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md) notification in the current thread. The notification includes a `userInfo` dictionary with the created `NSFileHandle` object, which is accessible using the `NSFileHandleNotificationFileHandleItem` key.

You must call this method from a thread that has an active run loop.

<a id="Special-Considerations"></a>

### Special Considerations

The receiver must be created by an [initWithFileDescriptor:](init%28filedescriptor_%29.md) message that takes as an argument a stream-type socket created by the appropriate system routine, *and that is being listened on*. In other words, you must `bind()` the socket, and ensure that the socket has a connection backlog defined by `listen()`.

The object that will write data to the returned file handle must add itself as an observer of [NSFileHandleConnectionAcceptedNotification](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md).

Note that this method does not continue to listen for connection requests after it posts [NSFileHandleConnectionAcceptedNotification](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md). If you want to keep getting notified, you need to call [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md) again in your observer method.

## See Also

### Related Documentation

- [enqueueNotification:postingStyle:coalesceMask:forModes:](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotifyForModes:](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotifyForModes:](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotifyForModes:](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotifyForModes:](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.
