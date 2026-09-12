> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioservicematchingcallback](https://developer.apple.com/documentation/iokit/ioservicematchingcallback)

# IOServiceMatchingCallback (Swift)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Callback function to be notified of IOService publication.

## Declaration

```swift
typealias IOServiceMatchingCallback = (UnsafeMutableRawPointer?, io_iterator_t) -> Void
```

## Parameters

- `refcon`: The refcon passed when the notification was installed.
- `iterator`: The notification iterator which now has new objects.

## See Also

### Callbacks

- [IOAsyncCallback](ioasynccallback.md): standard callback function for asynchronous I/O requests with lots of extra arguments beyond a refcon and result code.
- [IOAsyncCallback0](ioasynccallback0.md): standard callback function for asynchronous I/O requests with no extra arguments beyond a refcon and result code.
- [IOAsyncCallback1](ioasynccallback1.md): standard callback function for asynchronous I/O requests with one extra argument beyond a refcon and result code. This is often a count of the number of bytes transferred
- [IOAsyncCallback2](ioasynccallback2.md): standard callback function for asynchronous I/O requests with two extra arguments beyond a refcon and result code.
- [IOServiceInterestCallback](ioserviceinterestcallback.md): Callback function to be notified of changes in state of an IOService.

# IOServiceMatchingCallback (Objective-C)

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

Callback function to be notified of IOService publication.

## Declaration

```objectivec
typedef void (*IOServiceMatchingCallback)(void *refcon, io_iterator_t iterator);
```

## Parameters

- `refcon`: The refcon passed when the notification was installed.
- `iterator`: The notification iterator which now has new objects.

## See Also

### Callbacks

- [IOAsyncCallback](ioasynccallback.md): standard callback function for asynchronous I/O requests with lots of extra arguments beyond a refcon and result code.
- [IOAsyncCallback0](ioasynccallback0.md): standard callback function for asynchronous I/O requests with no extra arguments beyond a refcon and result code.
- [IOAsyncCallback1](ioasynccallback1.md): standard callback function for asynchronous I/O requests with one extra argument beyond a refcon and result code. This is often a count of the number of bytes transferred
- [IOAsyncCallback2](ioasynccallback2.md): standard callback function for asynchronous I/O requests with two extra arguments beyond a refcon and result code.
- [IOServiceInterestCallback](ioserviceinterestcallback.md): Callback function to be notified of changes in state of an IOService.
