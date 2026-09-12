> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason/suppressedbysystem](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason/suppressedbysystem)

# WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The system is in a state that doesn’t allow sessions of this type.

## Declaration

```swift
case suppressedBySystem
```

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.error](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReason.none](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReason.sessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReason.expired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.

# WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The system is in a state that doesn’t allow sessions of this type.

## Declaration

```objectivec
WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem
```

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonError](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReasonNone](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReasonSessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReasonExpired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
