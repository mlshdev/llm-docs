> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrorcode/exceededresourcelimits](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrorcode/exceededresourcelimits)

# WKExtendedRuntimeSessionErrorCode.exceededResourceLimits (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The session exceeded its resource limits.

## Declaration

```swift
case exceededResourceLimits
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

During an extended runtime session, the system limits your app’s amortized CPU usage over time. If your app exceeds the limits during a 60-second window, the system cancels the session. Monitoring usage-per-minute allows your app to experience brief spikes of CPU usage, as long as the average remains low.

When the system cancels your session, it calls your delegate’s [extendedRuntimeSession(\_:didInvalidateWith:error:)](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method and passes a [WKExtendedRuntimeSessionInvalidationReason.error](../wkextendedruntimesessioninvalidationreason/error.md) reason with a [WKExtendedRuntimeSessionErrorCode.exceededResourceLimits](exceededresourcelimits.md) error.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorCode.unknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorCode.scheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorCode.notYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorCode.barDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

# WKExtendedRuntimeSessionErrorExceededResourceLimits (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The session exceeded its resource limits.

## Declaration

```objectivec
WKExtendedRuntimeSessionErrorExceededResourceLimits
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

During an extended runtime session, the system limits your app’s amortized CPU usage over time. If your app exceeds the limits during a 60-second window, the system cancels the session. Monitoring usage-per-minute allows your app to experience brief spikes of CPU usage, as long as the average remains low.

When the system cancels your session, it calls your delegate’s [extendedRuntimeSession:didInvalidateWithReason:error:](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method and passes a [WKExtendedRuntimeSessionInvalidationReasonError](../wkextendedruntimesessioninvalidationreason/error.md) reason with a [WKExtendedRuntimeSessionErrorExceededResourceLimits](exceededresourcelimits.md) error.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorUnknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorMustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorNotYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorBARDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorNotApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorNotApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.
