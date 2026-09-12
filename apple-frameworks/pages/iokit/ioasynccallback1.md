> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioasynccallback1](https://developer.apple.com/documentation/iokit/ioasynccallback1)

# IOAsyncCallback1 (Swift)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

standard callback function for asynchronous I/O requests with one extra argument beyond a refcon and result code. This is often a count of the number of bytes transferred

## Declaration

```swift
typealias IOAsyncCallback1 = (UnsafeMutableRawPointer?, IOReturn, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `refcon`: The refcon passed into the original I/O request
- `result`: The result of the I/O operation
- `arg0`: Extra argument

## See Also

### Callbacks

- [IOAsyncCallback](ioasynccallback.md): standard callback function for asynchronous I/O requests with lots of extra arguments beyond a refcon and result code.
- [IOAsyncCallback0](ioasynccallback0.md): standard callback function for asynchronous I/O requests with no extra arguments beyond a refcon and result code.
- [IOAsyncCallback2](ioasynccallback2.md): standard callback function for asynchronous I/O requests with two extra arguments beyond a refcon and result code.
- [IOServiceInterestCallback](ioserviceinterestcallback.md): Callback function to be notified of changes in state of an IOService.
- [IOServiceMatchingCallback](ioservicematchingcallback.md): Callback function to be notified of IOService publication.

# IOAsyncCallback1 (Objective-C)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

standard callback function for asynchronous I/O requests with one extra argument beyond a refcon and result code. This is often a count of the number of bytes transferred

## Declaration

```objectivec
typedef void (*IOAsyncCallback1)(void *refcon, IOReturn result, void *arg0);
```

## Parameters

- `refcon`: The refcon passed into the original I/O request
- `result`: The result of the I/O operation
- `arg0`: Extra argument

## See Also

### Callbacks

- [IOAsyncCallback](ioasynccallback.md): standard callback function for asynchronous I/O requests with lots of extra arguments beyond a refcon and result code.
- [IOAsyncCallback0](ioasynccallback0.md): standard callback function for asynchronous I/O requests with no extra arguments beyond a refcon and result code.
- [IOAsyncCallback2](ioasynccallback2.md): standard callback function for asynchronous I/O requests with two extra arguments beyond a refcon and result code.
- [IOServiceInterestCallback](ioserviceinterestcallback.md): Callback function to be notified of changes in state of an IOService.
- [IOServiceMatchingCallback](ioservicematchingcallback.md): Callback function to be notified of IOService publication.
