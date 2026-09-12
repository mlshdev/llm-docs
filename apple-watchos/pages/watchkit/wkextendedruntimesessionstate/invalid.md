> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionstate/invalid](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionstate/invalid)

# WKExtendedRuntimeSessionState.invalid (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

Either the session has encountered an error, or it has stopped running.

## Declaration

```swift
case invalid
```

<a id="Discussion"></a>

## Discussion

The system passes a [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md) value to the session delegate’s [extendedRuntimeSession(\_:didInvalidateWith:error:)](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method. Use this value to determine why the session became invalid.

## See Also

### Session States

- [WKExtendedRuntimeSessionState.notStarted](notstarted.md): The app has not yet started or scheduled the session.
- [WKExtendedRuntimeSessionState.scheduled](scheduled.md): The app has scheduled the session to run at a future date.
- [WKExtendedRuntimeSessionState.running](running.md): The session is actively running.

# WKExtendedRuntimeSessionStateInvalid (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

Either the session has encountered an error, or it has stopped running.

## Declaration

```objectivec
WKExtendedRuntimeSessionStateInvalid
```

<a id="Discussion"></a>

## Discussion

The system passes a [WKExtendedRuntimeSessionInvalidationReason](../wkextendedruntimesessioninvalidationreason.md) value to the session delegate’s [extendedRuntimeSession:didInvalidateWithReason:error:](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method. Use this value to determine why the session became invalid.

## See Also

### Session States

- [WKExtendedRuntimeSessionStateNotStarted](notstarted.md): The app has not yet started or scheduled the session.
- [WKExtendedRuntimeSessionStateScheduled](scheduled.md): The app has scheduled the session to run at a future date.
- [WKExtendedRuntimeSessionStateRunning](running.md): The session is actively running.
