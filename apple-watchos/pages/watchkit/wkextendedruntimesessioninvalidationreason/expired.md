> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason/expired](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason/expired)

# WKExtendedRuntimeSessionInvalidationReason.expired (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The session used all of its allocated time.

## Declaration

```swift
case expired
```

<a id="Discussion"></a>

## Discussion

Sessions can only run for a limited amount of time. Each session type has a different time limit. For more information, see the session’s [expirationDate](../wkextendedruntimesession/expirationdate.md) property.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.error](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReason.none](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReason.sessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

# WKExtendedRuntimeSessionInvalidationReasonExpired (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The session used all of its allocated time.

## Declaration

```objectivec
WKExtendedRuntimeSessionInvalidationReasonExpired
```

<a id="Discussion"></a>

## Discussion

Sessions can only run for a limited amount of time. Each session type has a different time limit. For more information, see the session’s [expirationDate](../wkextendedruntimesession/expirationdate.md) property.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonError](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReasonNone](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReasonSessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.
