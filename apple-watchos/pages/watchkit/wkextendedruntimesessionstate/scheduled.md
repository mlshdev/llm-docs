> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionstate/scheduled](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionstate/scheduled)

# WKExtendedRuntimeSessionState.scheduled (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The app has scheduled the session to run at a future date.

## Declaration

```swift
case scheduled
```

<a id="Discussion"></a>

## Discussion

The session transitions to the [WKExtendedRuntimeSessionState.scheduled](scheduled.md) state when you call the [start(at:)](../wkextendedruntimesession/start%28at_%29.md) method. It remains in this state until the start date arrives. Then it transitions to the running state.

## See Also

### Session States

- [WKExtendedRuntimeSessionState.notStarted](notstarted.md): The app has not yet started or scheduled the session.
- [WKExtendedRuntimeSessionState.running](running.md): The session is actively running.
- [WKExtendedRuntimeSessionState.invalid](invalid.md): Either the session has encountered an error, or it has stopped running.

# WKExtendedRuntimeSessionStateScheduled (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The app has scheduled the session to run at a future date.

## Declaration

```objectivec
WKExtendedRuntimeSessionStateScheduled
```

<a id="Discussion"></a>

## Discussion

The session transitions to the [WKExtendedRuntimeSessionStateScheduled](scheduled.md) state when you call the [startAtDate:](../wkextendedruntimesession/start%28at_%29.md) method. It remains in this state until the start date arrives. Then it transitions to the running state.

## See Also

### Session States

- [WKExtendedRuntimeSessionStateNotStarted](notstarted.md): The app has not yet started or scheduled the session.
- [WKExtendedRuntimeSessionStateRunning](running.md): The session is actively running.
- [WKExtendedRuntimeSessionStateInvalid](invalid.md): Either the session has encountered an error, or it has stopped running.
