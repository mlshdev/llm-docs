> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/streamtype](https://developer.apple.com/documentation/dispatch/dispatchio/streamtype)

# DispatchIO.StreamType

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The semantics for accessing the contents of a file descriptor.

## Declaration

```swift
enum StreamType
```

## Topics

### Stream Types

- [DispatchIO.StreamType.stream](streamtype/stream.md): Access content sequentially, in a stream.
- [DispatchIO.StreamType.random](streamtype/random.md): Access content randomly.

### Initializing the Type

- [DISPATCH_IO_RANDOM](../dispatch_io_random.md)
- [DISPATCH_IO_STREAM](../dispatch_io_stream.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Dispatch I/O Object

- [init(type:fileDescriptor:queue:cleanupHandler:)](init%28type_filedescriptor_queue_cleanuphandler_%29.md): Creates a new I/O channel that accesses the specified file descriptor.
- [init(type:path:oflag:mode:queue:cleanupHandler:)](init%28type_path_oflag_mode_queue_cleanuphandler_%29-50rb0.md): Creates a new I/O channel that accesses the file at the specified path, potentially creating that file in the process.
- [init(type:io:queue:cleanupHandler:)](init%28type_io_queue_cleanuphandler_%29.md): Creates a new I/O channel from an existing I/O channel.
