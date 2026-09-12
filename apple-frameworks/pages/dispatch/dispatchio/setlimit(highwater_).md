> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/setlimit(highwater:)](https://developer.apple.com/documentation/dispatch/dispatchio/setlimit(highwater:))

# setLimit(highWater:) (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the maximum number of bytes to process before enqueueing a handler block.

## Declaration

```swift
func setLimit(highWater high_water: Int)
```

## Parameters

- `high_water`: The maximum number of bytes to read or write before enqueueing the corresponding I/O handler block.

<a id="Discussion"></a>

## Discussion

During a read or write operation, the channel uses the high- and low-water mark values to determine how often to enqueue the associated handler block. It enqueues the block when the number of bytes read or written is between these two values.

The default high-water mark for channels is set to `SIZE_MAX`.

## See Also

### Managing the File Descriptor

- [fileDescriptor](filedescriptor.md): Returns the file descriptor associated with the specified channel.
- [setLimit(lowWater:)](setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
- [setInterval(interval:flags:)](setinterval%28interval_flags_%29.md): Sets the interval, in nanoseconds, at which to invoke the I/O handlers for the channel.
- [DispatchIO.IntervalFlags](intervalflags.md): The desired delivery behavior for interval events.

# dispatch_io_set_high_water (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the maximum number of bytes to process before enqueueing a handler block.

## Declaration

```objectivec
extern void dispatch_io_set_high_water(dispatch_io_t channel, size_t high_water);
```

## Parameters

- `channel`: The channel whose high-water mark you want to configure.
- `high_water`: The maximum number of bytes to read or write before enqueueing the corresponding I/O handler block.

<a id="Discussion"></a>

## Discussion

During a read or write operation, the channel uses the high- and low-water mark values to determine how often to enqueue the associated handler block. It enqueues the block when the number of bytes read or written is between these two values.

The default high-water mark for channels is set to `SIZE_MAX`.

## See Also

### Managing the File Descriptor

- [dispatch_io_get_descriptor](filedescriptor.md): Returns the file descriptor associated with the specified channel.
- [dispatch_io_set_low_water](setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
