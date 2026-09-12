> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/waitfordatainbackgroundandnotify(formodes:)](https://developer.apple.com/documentation/foundation/filehandle/waitfordatainbackgroundandnotify(formodes:))

# waitForDataInBackgroundAndNotify(forModes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously checks to see if data is available.

## Declaration

```swift
func waitForDataInBackgroundAndNotify(forModes modes: [RunLoop.Mode]?)
```

## Parameters

- `modes`: The runloop modes in which the data available notification can be posted.

<a id="Discussion"></a>

## Discussion

When the data becomes available, this method posts a [NSFileHandleDataAvailable](../nsnotification/name-swift.struct/nsfilehandledataavailable.md) notification on the current thread. This method differs from [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleDataAvailable](../nsnotification/name-swift.struct/nsfilehandledataavailable.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify()](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotify(forModes:)](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify()](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotify(forModes:)](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify()](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify(forModes:)](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify()](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.

# waitForDataInBackgroundAndNotifyForModes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Asynchronously checks to see if data is available.

## Declaration

```objectivec
- (void) waitForDataInBackgroundAndNotifyForModes:(NSArray<NSString *> *) modes;
```

## Parameters

- `modes`: The runloop modes in which the data available notification can be posted.

<a id="Discussion"></a>

## Discussion

When the data becomes available, this method posts a [NSFileHandleDataAvailableNotification](../nsnotification/name-swift.struct/nsfilehandledataavailable.md) notification on the current thread. This method differs from [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md) in that `modes` specifies the run-loop mode (or modes) in which [NSFileHandleDataAvailableNotification](../nsnotification/name-swift.struct/nsfilehandledataavailable.md) can be posted.

You must call this method from a thread that has an active run loop.

## See Also

### Reading asynchronously with notifications

- [acceptConnectionInBackgroundAndNotify](acceptconnectioninbackgroundandnotify%28%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [acceptConnectionInBackgroundAndNotifyForModes:](acceptconnectioninbackgroundandnotify%28formodes_%29.md): Accepts a socket connection (for stream-type sockets only) in the background and creates a file handle for the “near” (client) end of the communications channel.
- [readInBackgroundAndNotify](readinbackgroundandnotify%28%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readInBackgroundAndNotifyForModes:](readinbackgroundandnotify%28formodes_%29.md): Reads from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotify](readtoendoffileinbackgroundandnotify%28%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [readToEndOfFileInBackgroundAndNotifyForModes:](readtoendoffileinbackgroundandnotify%28formodes_%29.md): Reads to the end of file from the file or communications channel in the background and posts a notification when finished.
- [waitForDataInBackgroundAndNotify](waitfordatainbackgroundandnotify%28%29.md): Asynchronously checks to see if data is available.
