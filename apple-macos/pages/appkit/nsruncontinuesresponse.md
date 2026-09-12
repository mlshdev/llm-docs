> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruncontinuesresponse](https://developer.apple.com/documentation/appkit/nsruncontinuesresponse)

# NSRunContinuesResponse (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Modal session is continuing (returned by [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md) only).

> Use [continue](nsapplication/modalresponse/continue.md) instead.

## Declaration

```swift
var NSRunContinuesResponse: Int { get }
```

## See Also

### Constants

- [NSRunAbortedResponse](nsrunabortedresponse.md): Deprecated. Modal session was broken with [abortModal()](nsapplication/abortmodal%28%29.md).
- [NSRunStoppedResponse](nsrunstoppedresponse.md): Deprecated. Modal session was broken with [stopModal()](nsapplication/stopmodal%28%29.md).

# NSRunContinuesResponse (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Modal session is continuing (returned by [runModalSession:](nsapplication/runmodalsession%28__%29.md) only).

> Use [NSModalResponseContinue](nsapplication/modalresponse/continue.md) instead.

## Declaration

```objectivec
NSRunContinuesResponse
```

## See Also

### Constants

- [NSRunAbortedResponse](nsrunabortedresponse.md): Deprecated. Modal session was broken with [abortModal](nsapplication/abortmodal%28%29.md).
- [NSRunStoppedResponse](nsrunstoppedresponse.md): Deprecated. Modal session was broken with [stopModal](nsapplication/stopmodal%28%29.md).
