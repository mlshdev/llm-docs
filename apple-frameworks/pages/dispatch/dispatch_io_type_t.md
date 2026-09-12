> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_io_type_t](https://developer.apple.com/documentation/dispatch/dispatch_io_type_t)

# dispatch_io_type_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The type of a dispatch I/O channel.

## Declaration

```objectivec
typedef unsigned long dispatch_io_type_t;
```

## Topics

### I/O Access Type

- [DISPATCH_IO_STREAM](dispatch_io_stream.md)
- [DISPATCH_IO_RANDOM](dispatch_io_random.md)

## See Also

### Creating a Dispatch I/O Object

- [dispatch_io_create](dispatch_io_create.md): Creates a dispatch I/O channel and associates it with the specified file descriptor.
- [dispatch_io_create_with_io](dispatch_io_create_with_io.md): Creates a new dispatch I/O channel from an existing channel.
- [dispatch_io_create_with_path](dispatch_io_create_with_path.md): Creates a dispatch I/O channel with the associated path name.
- [dispatch_io_t](dispatch_io_t.md): A dispatch I/O channel.
- [dispatch_fd_t](dispatch_fd_t.md): A file descriptor used for I/O operations.
- [OS_dispatch_io](os_dispatch_io.md)
