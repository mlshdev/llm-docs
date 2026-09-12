> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioasynccallback0](https://developer.apple.com/documentation/iokit/ioasynccallback0)

# IOAsyncCallback0 (Swift)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

standard callback function for asynchronous I/O requests with no extra arguments beyond a refcon and result code.

## Declaration

```swift
typealias IOAsyncCallback0 = (UnsafeMutableRawPointer?, IOReturn) -> Void
```

## Parameters

- `refcon`: The refcon passed into the original I/O request
- `result`: The result of the I/O operation

## See Also

### Callbacks

- [IOAsyncCallback](ioasynccallback.md): standard callback function for asynchronous I/O requests with lots of extra arguments beyond a refcon and result code.
- [IOAsyncCallback1](ioasynccallback1.md): standard callback function for asynchronous I/O requests with one extra argument beyond a refcon and result code. This is often a count of the number of bytes transferred
- [IOAsyncCallback2](ioasynccallback2.md): standard callback function for asynchronous I/O requests with two extra arguments beyond a refcon and result code.
- [IOServiceInterestCallback](ioserviceinterestcallback.md): Callback function to be notified of changes in state of an IOService.
- [IOServiceMatchingCallback](ioservicematchingcallback.md): Callback function to be notified of IOService publication.

# IOAsyncCallback0 (Objective-C)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

standard callback function for asynchronous I/O requests with no extra arguments beyond a refcon and result code.

## Declaration

```objectivec
typedef void (*IOAsyncCallback0)(void *refcon, IOReturn result);
```

## Parameters

- `refcon`: The refcon passed into the original I/O request
- `result`: The result of the I/O operation

## See Also

### Callbacks

- [IOAsyncCallback](ioasynccallback.md): standard callback function for asynchronous I/O requests with lots of extra arguments beyond a refcon and result code.
- [IOAsyncCallback1](ioasynccallback1.md): standard callback function for asynchronous I/O requests with one extra argument beyond a refcon and result code. This is often a count of the number of bytes transferred
- [IOAsyncCallback2](ioasynccallback2.md): standard callback function for asynchronous I/O requests with two extra arguments beyond a refcon and result code.
- [IOServiceInterestCallback](ioserviceinterestcallback.md): Callback function to be notified of changes in state of an IOService.
- [IOServiceMatchingCallback](ioservicematchingcallback.md): Callback function to be notified of IOService publication.
