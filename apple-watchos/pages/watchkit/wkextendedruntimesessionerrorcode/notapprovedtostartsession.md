> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrorcode/notapprovedtostartsession](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrorcode/notapprovedtostartsession)

# WKExtendedRuntimeSessionErrorCode.notApprovedToStartSession (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The app attempted to start a session, but doesn’t have a valid session type.

## Declaration

```swift
case notApprovedToStartSession
```

<a id="Discussion"></a>

## Discussion

To use extended runtime sessions, your app must enable the Background Mode capability and select a session type.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorCode.unknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorCode.scheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorCode.notYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorCode.exceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorCode.barDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

# WKExtendedRuntimeSessionErrorNotApprovedToStartSession (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The app attempted to start a session, but doesn’t have a valid session type.

## Declaration

```objectivec
WKExtendedRuntimeSessionErrorNotApprovedToStartSession
```

<a id="Discussion"></a>

## Discussion

To use extended runtime sessions, your app must enable the Background Mode capability and select a session type.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorUnknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance](scheduledtoofarinadvance.md): The app attempted to schedule a session too far in the future.
- [WKExtendedRuntimeSessionErrorMustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorNotYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorExceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorBARDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorNotApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.
