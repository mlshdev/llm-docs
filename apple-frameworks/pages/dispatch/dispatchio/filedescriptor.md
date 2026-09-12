> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchio/filedescriptor](https://developer.apple.com/documentation/dispatch/dispatchio/filedescriptor)

# fileDescriptor (Swift)

**Framework:** Dispatch  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the file descriptor associated with the specified channel.

## Declaration

```swift
var fileDescriptor: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

If the path name associated with the channel has not yet been opened, calling this function does not normally open the corresponding file, with one exception. If you call the function from a barrier block scheduled on the channel, the function does open the file and return the resulting file descriptor.

## See Also

### Managing the File Descriptor

- [setLimit(highWater:)](setlimit%28highwater_%29.md): Sets the maximum number of bytes to process before enqueueing a handler block.
- [setLimit(lowWater:)](setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
- [setInterval(interval:flags:)](setinterval%28interval_flags_%29.md): Sets the interval, in nanoseconds, at which to invoke the I/O handlers for the channel.
- [DispatchIO.IntervalFlags](intervalflags.md): The desired delivery behavior for interval events.

# dispatch_io_get_descriptor (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the file descriptor associated with the specified channel.

## Declaration

```objectivec
extern dispatch_fd_t dispatch_io_get_descriptor(dispatch_io_t channel);
```

## Parameters

- `channel`: The channel whose file descriptor you want to retrieve.

<a id="return-value"></a>

## Return Value

The file descriptor associated with the channel or `-1` if the file descriptor is closed or not yet open.

<a id="Discussion"></a>

## Discussion

If the path name associated with the channel has not yet been opened, calling this function does not normally open the corresponding file, with one exception. If you call the function from a barrier block scheduled on the channel, the function does open the file and return the resulting file descriptor.

## See Also

### Managing the File Descriptor

- [dispatch_io_set_high_water](setlimit%28highwater_%29.md): Sets the maximum number of bytes to process before enqueueing a handler block.
- [dispatch_io_set_low_water](setlimit%28lowwater_%29.md): Sets the minimum number of bytes to process before enqueueing a handler block.
