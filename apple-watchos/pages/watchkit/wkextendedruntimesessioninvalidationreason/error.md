> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessioninvalidationreason/error](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessioninvalidationreason/error)

# WKExtendedRuntimeSessionInvalidationReason.error (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

An error prevented the session from running.

## Declaration

```swift
case error
```

<a id="Discussion"></a>

## Discussion

When the system passes this value to your extension delegate’s [extendedRuntimeSession(\_:didInvalidateWith:error:)](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method, check the `error` parameter for additional information about the error.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReason.none](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReason.sessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReason.expired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReason.resignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReason.suppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.

# WKExtendedRuntimeSessionInvalidationReasonError (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

An error prevented the session from running.

## Declaration

```objectivec
WKExtendedRuntimeSessionInvalidationReasonError
```

<a id="Discussion"></a>

## Discussion

When the system passes this value to your extension delegate’s [extendedRuntimeSession:didInvalidateWithReason:error:](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method, check the `error` parameter for additional information about the error.

## See Also

### Invalidation Reasons

- [WKExtendedRuntimeSessionInvalidationReasonNone](none.md): The session ended normally.
- [WKExtendedRuntimeSessionInvalidationReasonSessionInProgress](sessioninprogress.md): This app already has a running session.
- [WKExtendedRuntimeSessionInvalidationReasonExpired](expired.md): The session used all of its allocated time.
- [WKExtendedRuntimeSessionInvalidationReasonResignedFrontmost](resignedfrontmost.md): The app lost its frontmost status.
- [WKExtendedRuntimeSessionInvalidationReasonSuppressedBySystem](suppressedbysystem.md): The system is in a state that doesn’t allow sessions of this type.
