> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionstate/notstarted](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionstate/notstarted)

# WKExtendedRuntimeSessionState.notStarted (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 6.0+

The app has not yet started or scheduled the session.

## Declaration

```swift
case notStarted
```

<a id="Discussion"></a>

## Discussion

When you instantiate a new session, it stays in the [WKExtendedRuntimeSessionState.notStarted](notstarted.md) state until you call the session’s [start()](../wkextendedruntimesession/start%28%29.md) or [start(at:)](../wkextendedruntimesession/start%28at_%29.md) method.

## See Also

### Session States

- [WKExtendedRuntimeSessionState.scheduled](scheduled.md): The app has scheduled the session to run at a future date.
- [WKExtendedRuntimeSessionState.running](running.md): The session is actively running.
- [WKExtendedRuntimeSessionState.invalid](invalid.md): Either the session has encountered an error, or it has stopped running.

# WKExtendedRuntimeSessionStateNotStarted (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 6.0+

The app has not yet started or scheduled the session.

## Declaration

```objectivec
WKExtendedRuntimeSessionStateNotStarted
```

<a id="Discussion"></a>

## Discussion

When you instantiate a new session, it stays in the [WKExtendedRuntimeSessionStateNotStarted](notstarted.md) state until you call the session’s [start](../wkextendedruntimesession/start%28%29.md) or [startAtDate:](../wkextendedruntimesession/start%28at_%29.md) method.

## See Also

### Session States

- [WKExtendedRuntimeSessionStateScheduled](scheduled.md): The app has scheduled the session to run at a future date.
- [WKExtendedRuntimeSessionStateRunning](running.md): The session is actively running.
- [WKExtendedRuntimeSessionStateInvalid](invalid.md): Either the session has encountered an error, or it has stopped running.
