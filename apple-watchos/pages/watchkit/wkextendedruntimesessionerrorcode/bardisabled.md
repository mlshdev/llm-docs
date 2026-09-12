> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrorcode/bardisabled](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrorcode/bardisabled)

# WKExtendedRuntimeSessionErrorCode.barDisabled (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The user has disabled background app refresh.

## Declaration

```swift
case barDisabled
```

<a id="Discussion"></a>

## Discussion

If the user has disabled Background App Refresh for this app, any attempt to schedule a session by calling the [start(at:)](../wkextendedruntimesession/start%28at_%29.md) method fails. The system calls your delegate’s [extendedRuntimeSession(\_:didInvalidateWith:error:)](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method and passes a [WKExtendedRuntimeSessionInvalidationReason.error](../wkextendedruntimesessioninvalidationreason/error.md) reason with a [WKExtendedRuntimeSessionErrorCode.barDisabled](bardisabled.md) error.

Users can turn off Background App Refresh by selecting General \> Background App Refresh in the Watch App.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorCode.unknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorCode.scheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorCode.notYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorCode.exceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

# WKExtendedRuntimeSessionErrorBARDisabled (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The user has disabled background app refresh.

## Declaration

```objectivec
WKExtendedRuntimeSessionErrorBARDisabled
```

<a id="Discussion"></a>

## Discussion

If the user has disabled Background App Refresh for this app, any attempt to schedule a session by calling the [startAtDate:](../wkextendedruntimesession/start%28at_%29.md) method fails. The system calls your delegate’s [extendedRuntimeSession:didInvalidateWithReason:error:](../wkextendedruntimesessiondelegate/extendedruntimesession%28__didinvalidatewith_error_%29.md) method and passes a [WKExtendedRuntimeSessionInvalidationReasonError](../wkextendedruntimesessioninvalidationreason/error.md) reason with a [WKExtendedRuntimeSessionErrorBARDisabled](bardisabled.md) error.

Users can turn off Background App Refresh by selecting General \> Background App Refresh in the Watch App.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorUnknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorMustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorNotYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorExceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorNotApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorNotApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.
