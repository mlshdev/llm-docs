> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readinbackgroundandnotify(formodes:)](https://developer.apple.com/documentation/foundation/filehandle/readinbackgroundandnotify(formodes:))

# readInBackgroundAndNotify(forModes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads from the file or communications channel in the background and posts a notification when finished.

## Declaration

```swift
func readInBackgroundAndNotify(forModes modes: [RunLoop.Mode]?)
```

## Parameters

- `modes`: The runloop modes in which the read completion notification can be posted.

<a id="Discussion"></a>

## Discussion

See [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md) for details of how this method operates. This method differs from [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [readCompletionNotification](readcompletionnotification.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Related Documentation

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotify(forModes:)](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify(forModes:)](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotify(forModes:)](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.

# readInBackgroundAndNotifyForModes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reads from the file or communications channel in the background and posts a notification when finished.

## Declaration

```objectivec
- (void) readInBackgroundAndNotifyForModes:(NSArray<NSString *> *) modes;
```

## Parameters

- `modes`: The runloop modes in which the read completion notification can be posted.

<a id="Discussion"></a>

## Discussion

See [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md) for details of how this method operates. This method differs from [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleReadCompletionNotification](readcompletionnotification.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Related Documentation

- [enqueueNotification:postingStyle:coalesceMask:forModes:](../notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotifyForModes:](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotifyForModes:](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
- [waitForDataInBackgroundAndNotifyForModes:](waitfordatainbackgroundandnotify%28formodes_%29.md): Asynchronously checks to see if data is available.
