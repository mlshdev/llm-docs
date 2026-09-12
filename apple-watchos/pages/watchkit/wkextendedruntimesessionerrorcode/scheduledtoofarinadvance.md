> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionerrorcode/scheduledtoofarinadvance](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionerrorcode/scheduledtoofarinadvance)

# WKExtendedRuntimeSessionErrorCode.scheduledTooFarInAdvance (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The app attempted to schedule a session too far in the future.

## Declaration

```swift
case scheduledTooFarInAdvance
```

<a id="Discussion"></a>

## Discussion

You can’t schedule alarm sessions more than 36 hours in advance. Other session types do not support scheduling.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorCode.unknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorCode.mustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorCode.notYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorCode.exceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorCode.barDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorCode.notApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.

# WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The app attempted to schedule a session too far in the future.

## Declaration

```objectivec
WKExtendedRuntimeSessionErrorScheduledTooFarInAdvance
```

<a id="Discussion"></a>

## Discussion

You can’t schedule alarm sessions more than 36 hours in advance. Other session types do not support scheduling.

## See Also

### Error Codes

- [WKExtendedRuntimeSessionErrorUnknown](unknown.md): An unknown error occurred.
- [WKExtendedRuntimeSessionErrorMustBeActiveToStartOrSchedule](mustbeactivetostartorschedule.md): The watchOS app attempted to start or schedule a session while not in an active state.
- [WKExtendedRuntimeSessionErrorNotYetStarted](notyetstarted.md): The app invalidated the session before it started.
- [WKExtendedRuntimeSessionErrorExceededResourceLimits](exceededresourcelimits.md): The session exceeded its resource limits.
- [WKExtendedRuntimeSessionErrorBARDisabled](bardisabled.md): The user has disabled background app refresh.
- [WKExtendedRuntimeSessionErrorNotApprovedToStartSession](notapprovedtostartsession.md): The app attempted to start a session, but doesn’t have a valid session type.
- [WKExtendedRuntimeSessionErrorNotApprovedToSchedule](notapprovedtoschedule.md): The app attempted to schedule a session, but the session type does not support scheduling.
