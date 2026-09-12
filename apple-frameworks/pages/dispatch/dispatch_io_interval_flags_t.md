> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_io_interval_flags_t](https://developer.apple.com/documentation/dispatch/dispatch_io_interval_flags_t)

# dispatch_io_interval_flags_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The desired delivery behavior for interval events.

## Declaration

```objectivec
typedef unsigned long dispatch_io_interval_flags_t;
```

## Topics

### Channel Configuration Options

- [DISPATCH_IO_STRICT_INTERVAL](dispatch_io_strict_interval.md): Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.

## See Also

### Managing the File Descriptor

- [dispatch_io_get_descriptor](dispatchio/filedescriptor.md): Returns the file descriptor associated with the specified channel.
- [dispatch_io_set_interval](dispatch_io_set_interval.md): Sets the interval (in nanoseconds) at which to invoke the I/O handlers for the channel.
- [dispatch_io_set_low_water](dispatchio/setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
- [dispatch_io_set_high_water](dispatchio/setlimit%28highwater_%29.md): Sets the maximum number of bytes to process before enqueueing a handler block.
