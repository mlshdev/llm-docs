> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/closeflags](https://developer.apple.com/documentation/dispatch/dispatchio/closeflags)

# DispatchIO.CloseFlags

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Additional flags to use when closing an I/O channel.

## Declaration

```swift
struct CloseFlags
```

## Topics

### Close Flags

- [stop](closeflags/stop.md): Stop any in-progress read/write operations when closed.

### Initializing the Type

- [DISPATCH_IO_STOP](../dispatch_io_stop.md): Stop any in-progress read and write operations when closed.

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

### Closing the File

- [close(flags:)](close%28flags_%29.md): Closes the channel to new read and write operations.
