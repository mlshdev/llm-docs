> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readtoendoffileinbackgroundandnotify(formodes:)](https://developer.apple.com/documentation/foundation/filehandle/readtoendoffileinbackgroundandnotify(formodes:))

# readToEndOfFileInBackgroundAndNotify(forModes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads to the end of file from the file or communications channel in the background and posts a notification when finished.

## Declaration

```swift
func readToEndOfFileInBackgroundAndNotify(forModes modes: [RunLoop.Mode]?)
```

## Parameters

- `modes`: The runloop modes in which the read completion notification can be posted.

<a id="Discussion"></a>

## Discussion

See [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md) for details of this method’s operation. The method differs from [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleReadToEndOfFileCompletion](../nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Related Documentation

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotify(forModes:)](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotify(forModes:)](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotify(forModes:)](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

# readToEndOfFileInBackgroundAndNotifyForModes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads to the end of file from the file or communications channel in the background and posts a notification when finished.

## Declaration

```objectivec
- (void) readToEndOfFileInBackgroundAndNotifyForModes:(NSArray<NSString *> *) modes;
```

## Parameters

- `modes`: The runloop modes in which the read completion notification can be posted.

<a id="Discussion"></a>

## Discussion

See [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md) for details of this method’s operation. The method differs from [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleReadToEndOfFileCompletionNotification](../nsnotification/name-swift.struct/nsfilehandlereadtoendoffilecompletion.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Related Documentation

- [enqueueNotification:postingStyle:coalesceMask:forModes:](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotifyForModes:](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotifyForModes:](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotifyForModes:](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.
