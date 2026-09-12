> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrorcode/notyetstarted](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrorcode/notyetstarted)

# WKExtendedRuntimeSessionErrorCode.notYetStarted (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The app invalidated the session before it started.

## Declaration

```swift
case notYetStarted
```

<a id="Discussion"></a>

## Discussion

The app called the [invalidate()](../wkextendedruntimesession/invalidate%28%29.md) method on a session before calling its [start()](../wkextendedruntimesession/start%28%29.md) method.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorCode.unknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorCode.scheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorCode.exceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorCode.barDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

# WKExtendedRuntimeSessionErrorNotYetStarted (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The app invalidated the session before it started.

## Declaration

```objectivec
WKExtendedRuntimeSessionErrorNotYetStarted
```

<a id="Discussion"></a>

## Discussion

The app called the [invalidate](../wkextendedruntimesession/invalidate%28%29.md) method on a session before calling its [start](../wkextendedruntimesession/start%28%29.md) method.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorUnknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorMustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorExceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorBARDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorNotApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorNotApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.
