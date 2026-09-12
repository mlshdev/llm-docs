> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/init(type:filedescriptor:queue:cleanuphandler:)](https://developer.apple.com/documentation/dispatch/dispatchio/init(type:filedescriptor:queue:cleanuphandler:))

# init(type:fileDescriptor:queue:cleanupHandler:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new I/O channel that accesses the specified file descriptor.

## Declaration

```swift
convenience init(type: DispatchIO.StreamType, fileDescriptor: Int32, queue: DispatchQueue, cleanupHandler: @escaping (Int32) -> Void)
```

## Parameters

- `type`: The access semantics for the channel. For a list of possible values, see [DispatchIO.StreamType](streamtype.md).
- `fileDescriptor`: The file descriptor from which to read or write data.
- `queue`: The dispatch queue on which to perform work.
- `cleanupHandler`: The handler to execute once the channel is closed. This block has no return value and takes the following parameter:

  - **error**: An `errno` condition if creating or opening the channel failed; otherwise, the value is `0`.

<a id="Discussion"></a>

## Discussion

The channel takes control of the specified file descriptor until the channel closes, either deliberately on your part or because an error occurred. While the channel owns the file descriptor, the system modifies flags such as `O_NONBLOCK` automatically. It is a programmer error for you to modify the file descriptor while the channel owns it. However, you may create additional channels based on the same file descriptor.

## See Also

### Creating a Dispatch I/O Object

- [init(type:path:oflag:mode:queue:cleanupHandler:)](init%28type_path_oflag_mode_queue_cleanuphandler_%29-50rb0.md): Creates a new I/O channel that accesses the file at the specified path, potentially creating that file in the process.
- [init(type:io:queue:cleanupHandler:)](init%28type_io_queue_cleanuphandler_%29.md): Creates a new I/O channel from an existing I/O channel.
- [DispatchIO.StreamType](streamtype.md): The semantics for accessing the contents of a file descriptor.
