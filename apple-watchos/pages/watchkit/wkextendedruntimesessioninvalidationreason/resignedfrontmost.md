> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason/resignedfrontmost](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason/resignedfrontmost)

# WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The app lost its frontmost status.

## Declaration

```swift
case resignedFrontmost
```

<a id="Discussion"></a>

## Discussion

If the session type doesn’t grant background execution time, the session stops as soon as the app loses its frontmost app status. Users can dismiss the frontmost app by pressing the Digital Crown, tapping a notification, or launching another app. For more information, see `Understand Frontmost App State`.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.error](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReason.none](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReason.sessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReason.expired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

# WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The app lost its frontmost status.

## Declaration

```objectivec
WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost
```

<a id="Discussion"></a>

## Discussion

If the session type doesn’t grant background execution time, the session stops as soon as the app loses its frontmost app status. Users can dismiss the frontmost app by pressing the Digital Crown, tapping a notification, or launching another app. For more information, see `Understand Frontmost App State`.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonError](error.md): An error prevented the session from running.
- [WKExtendedRuntimeSessionInvalidationReasonNone](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReasonSessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReasonExpired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.
