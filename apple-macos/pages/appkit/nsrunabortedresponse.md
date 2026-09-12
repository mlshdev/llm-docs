> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrunabortedresponse](https://developer.apple.com/documentation/appkit/nsrunabortedresponse)

# NSRunAbortedResponse (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Modal session was broken with [abortModal()](nsapplication/abortmodal%28%29.md).

> Use [abort](nsapplication/modalresponse/abort.md) instead.

## Declaration

```swift
var NSRunAbortedResponse: Int { get }
```

## See Also

### Constants

- [NSRunContinuesResponse](nsruncontinuesresponse.md): Deprecated. Modal session is continuing (returned by [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md) only).
- [NSRunStoppedResponse](nsrunstoppedresponse.md): Deprecated. Modal session was broken with [stopModal()](nsapplication/stopmodal%28%29.md).

# NSRunAbortedResponse (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Modal session was broken with [abortModal](nsapplication/abortmodal%28%29.md).

> Use [NSModalResponseAbort](nsapplication/modalresponse/abort.md) instead.

## Declaration

```objectivec
NSRunAbortedResponse
```

## See Also

### Constants

- [NSRunContinuesResponse](nsruncontinuesresponse.md): Deprecated. Modal session is continuing (returned by [runModalSession:](nsapplication/runmodalsession%28__%29.md) only).
- [NSRunStoppedResponse](nsrunstoppedresponse.md): Deprecated. Modal session was broken with [stopModal](nsapplication/stopmodal%28%29.md).
