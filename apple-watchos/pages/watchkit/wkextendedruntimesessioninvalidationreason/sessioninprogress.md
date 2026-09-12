> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason/sessioninprogress](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason/sessioninprogress)

# WKExtendedRuntimeSessionInvalidationReason.sessionInProgress (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

This app already has a running session.

## Declaration

```swift
case sessionInProgress
```

<a id="Discussion"></a>

## Discussion

Each app can only run one extended runtime session at a time.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.error](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReason.none](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReason.expired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

# WKExtendedRuntimeSessionInvalidationReasonSessionInProgress (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

This app already has a running session.

## Declaration

```objectivec
WKExtendedRuntimeSessionInvalidationReasonSessionInProgress
```

<a id="Discussion"></a>

## Discussion

Each app can only run one extended runtime session at a time.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonError](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReasonNone](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReasonExpired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.
