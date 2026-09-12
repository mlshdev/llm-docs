> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunstoppedresponse](https://developer.apple.com/documentation/appkit/nsrunstoppedresponse)

# NSRunStoppedResponse (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Modal session was broken with [stopModal()](nsapplication/stopmodal%28%29.md).

> Use [stop](nsapplication/modalresponse/stop.md) instead.

## Declaration

```swift
var NSRunStoppedResponse: Int { get }
```

## See Also

### Constants

- [NSRunAbortedResponse](nsrunabortedresponse.md): Deprecated. Modal session was broken with [abortModal()](nsapplication/abortmodal%28%29.md).
- [NSRunContinuesResponse](nsruncontinuesresponse.md): Deprecated. Modal session is continuing (returned by [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md) only).

# NSRunStoppedResponse (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Modal session was broken with [stopModal](nsapplication/stopmodal%28%29.md).

> Use [NSModalResponseStop](nsapplication/modalresponse/stop.md) instead.

## Declaration

```objectivec
NSRunStoppedResponse
```

## See Also

### Constants

- [NSRunAbortedResponse](nsrunabortedresponse.md): Deprecated. Modal session was broken with [abortModal](nsapplication/abortmodal%28%29.md).
- [NSRunContinuesResponse](nsruncontinuesresponse.md): Deprecated. Modal session is continuing (returned by [runModalSession:](nsapplication/runmodalsession%28__%29.md) only).
