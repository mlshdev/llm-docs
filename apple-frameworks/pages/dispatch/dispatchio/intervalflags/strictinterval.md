> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/intervalflags/strictinterval](https://developer.apple.com/documentation/dispatch/dispatchio/intervalflags/strictinterval)

# strictInterval

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.

## Declaration

```swift
static let strictInterval: DispatchIO.IntervalFlags
```

<a id="Discussion"></a>

## Discussion

Setting this flag can lead to the handler being called even if the amount of data does not exceed the channel’s low-water mark.

## See Also

### Interval Flags

- [DISPATCH_IO_STRICT_INTERVAL](../../dispatch_io_strict_interval.md): Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.
