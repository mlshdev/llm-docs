> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_io_close_flags_t](https://developer.apple.com/documentation/dispatch/dispatch_io_close_flags_t)

# dispatch_io_close_flags_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Additional flags to use when closing an I/O channel.

## Declaration

```objectivec
typedef unsigned long dispatch_io_close_flags_t;
```

## Topics

### Channel Closing Options

- [DISPATCH_IO_STOP](dispatch_io_stop.md): Stop any in-progress read and write operations when closed.

## See Also

### Closing the File

- [dispatch_io_close](dispatch_io_close.md): Closes the specified channel to new read and write operations.
