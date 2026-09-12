> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/intervalflags](https://developer.apple.com/documentation/dispatch/dispatchio/intervalflags)

# DispatchIO.IntervalFlags

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The desired delivery behavior for interval events.

## Declaration

```swift
struct IntervalFlags
```

## Topics

### Interval Flags

- [strictInterval](intervalflags/strictinterval.md): Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.
- [DISPATCH_IO_STRICT_INTERVAL](../dispatch_io_strict_interval.md): Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.

### Initializing the Type

- [init(nilLiteral:)](intervalflags/init%28nilliteral_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the File Descriptor

- [fileDescriptor](filedescriptor.md): Returns the file descriptor associated with the specified channel.
- [setLimit(highWater:)](setlimit%28highwater_%29.md): Sets the maximum number of bytes to process before enqueueing a handler block.
- [setLimit(lowWater:)](setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
- [setInterval(interval:flags:)](setinterval%28interval_flags_%29.md): Sets the interval, in nanoseconds, at which to invoke the I/O handlers for the channel.
