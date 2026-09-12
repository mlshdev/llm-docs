> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason/none](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason/none)

# WKExtendedRuntimeSessionInvalidationReason.none (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The session ended normally.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

The system uses this reason when you stop a session by calling its [invalidate()](../wkextendedruntimesession/invalidate%28%29.md) method.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.error](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReason.sessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReason.expired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

# WKExtendedRuntimeSessionInvalidationReasonNone (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The session ended normally.

## Declaration

```objectivec
WKExtendedRuntimeSessionInvalidationReasonNone
```

<a id="Discussion"></a>

## Discussion

The system uses this reason when you stop a session by calling its [invalidate](../wkextendedruntimesession/invalidate%28%29.md) method.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonError](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReasonSessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReasonExpired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.
