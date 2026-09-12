> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/init(type:io:queue:cleanuphandler:)](https://developer.apple.com/documentation/dispatch/dispatchio/init(type:io:queue:cleanuphandler:))

# init(type:io:queue:cleanupHandler:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new I/O channel from an existing I/O channel.

## Declaration

```swift
convenience init(type: DispatchIO.StreamType, io: DispatchIO, queue: DispatchQueue, cleanupHandler: @escaping (Int32) -> Void)
```

## Parameters

- `type`: The access semantics for the channel. For a list of possible values, see [DispatchIO.StreamType](streamtype.md).
- `io`: An existing channel.
- `queue`: The dispatch queue on which to perform work.
- `cleanupHandler`: The handler to execute once the channel is closed. This block has no return value and takes the following parameter:

  - **error**: An `errno` condition if creating or opening the channel failed; otherwise, the value is `0`.

## See Also

### Creating a Dispatch I/O Object

- [init(type:fileDescriptor:queue:cleanupHandler:)](init%28type_filedescriptor_queue_cleanuphandler_%29.md): Creates a new I/O channel that accesses the specified file descriptor.
- [init(type:path:oflag:mode:queue:cleanupHandler:)](init%28type_path_oflag_mode_queue_cleanuphandler_%29-50rb0.md): Creates a new I/O channel that accesses the file at the specified path, potentially creating that file in the process.
- [DispatchIO.StreamType](streamtype.md): The semantics for accessing the contents of a file descriptor.
