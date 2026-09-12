> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/acceptconnectioninbackgroundandnotify(formodes:)](https://developer.apple.com/documentation/foundation/filehandle/acceptconnectioninbackgroundandnotify(formodes:))

# acceptConnectionInBackgroundAndNotify(forModes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.

## Declaration

```swift
func acceptConnectionInBackgroundAndNotify(forModes modes: [RunLoop.Mode]?)
```

## Parameters

- `modes`: The runloop modes in which the connection accepted notification can be posted.

<a id="Discussion"></a>

## Discussion

See [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md) for details of how this method operates. This method differs from [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleConnectionAccepted](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Related Documentation

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotify(forModes:)](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify(forModes:)](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotify(forModes:)](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

# acceptConnectionInBackgroundAndNotifyForModes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.

## Declaration

```objectivec
- (void) acceptConnectionInBackgroundAndNotifyForModes:(NSArray<NSString *> *) modes;
```

## Parameters

- `modes`: The runloop modes in which the connection accepted notification can be posted.

<a id="Discussion"></a>

## Discussion

See [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md) for details of how this method operates. This method differs from [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleConnectionAcceptedNotification](../nsnotification/name-swift.struct/nsfilehandleconnectionaccepted.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Related Documentation

- [enqueueNotification:postingStyle:coalesceMask:forModes:](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotifyForModes:](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotifyForModes:](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotifyForModes:](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.
