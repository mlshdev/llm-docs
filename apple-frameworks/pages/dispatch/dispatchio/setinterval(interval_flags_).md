> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/setinterval(interval:flags:)](https://developer.apple.com/documentation/dispatch/dispatchio/setinterval(interval:flags:))

# setInterval(interval:flags:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the interval, in nanoseconds, at which to invoke the I/O handlers for the channel.

## Declaration

```swift
func setInterval(interval: DispatchTimeInterval, flags: DispatchIO.IntervalFlags = [])
```

## Parameters

- `interval`: The number of nanoseconds that must elapse before the scheduling of any I/O handlers is desired.
- `flags`: Flags indicating the desired delivery behavior at the interval time. For a list of flags, see [DispatchIO.IntervalFlags](intervalflags.md).

<a id="Discussion"></a>

## Discussion

A channel interval is a way for you to receive periodic progress reports on the state of a read or write operation. You can use this feedback to update progress bars or other parts of your application.

If you set an interval on a channel, the handlers for any read or write operations are enqueued at the given interval only if the amount of data that has been processed exceeds the current low-water mark for the channel. Passing the [strictInterval](intervalflags/strictinterval.md) constant in the `flags` parameter forces the enqueueing of the handlers even if the low-water mark is not exceeded.

The system may add a small amount of leeway to the specified interval in order to align the delivery of handlers with other system activity. The purpose of this behavior is to improve overall performance or power consumption for the system.

## See Also

### Managing the File Descriptor

- [fileDescriptor](filedescriptor.md): Returns the file descriptor associated with the specified channel.
- [setLimit(highWater:)](setlimit%28highwater_%29.md): Sets the maximum number of bytes to process before enqueueing a handler block.
- [setLimit(lowWater:)](setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
- [DispatchIO.IntervalFlags](intervalflags.md): The desired delivery behavior for interval events.
