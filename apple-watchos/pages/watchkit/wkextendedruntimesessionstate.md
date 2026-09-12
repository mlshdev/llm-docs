> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionstate](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionstate)

# WKExtendedRuntimeSessionState (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The activation states for an extended runtime session.

## Declaration

```swift
enum WKExtendedRuntimeSessionState
```

## Topics

### Session States

- [WKExtendedRuntimeSessionState.notStarted](wkextendedruntimesessionstate/notstarted.md): The app has not yet started or scheduled the session.
- [WKExtendedRuntimeSessionState.scheduled](wkextendedruntimesessionstate/scheduled.md): The app has scheduled the session to run at a future date.
- [WKExtendedRuntimeSessionState.running](wkextendedruntimesessionstate/running.md): The session is actively running.
- [WKExtendedRuntimeSessionState.invalid](wkextendedruntimesessionstate/invalid.md): Either the session has encountered an error, or it has stopped running.

### Initializers

- [init(rawValue:)](wkextendedruntimesessionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Session State

- [start()](wkextendedruntimesession/start%28%29.md): Starts running the session.
- [start(at:)](wkextendedruntimesession/start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate()](wkextendedruntimesession/invalidate%28%29.md): Stops the session.
- [state](wkextendedruntimesession/state.md): The session’s current state.
- [expirationDate](wkextendedruntimesession/expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](wkextendedruntimesession/requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](wkextendedruntimesessionautolaunchauthorizationstatus.md)

# WKExtendedRuntimeSessionState (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The activation states for an extended runtime session.

## Declaration

```objectivec
enum WKExtendedRuntimeSessionState : NSInteger;
```

## Topics

### Session States

- [WKExtendedRuntimeSessionStateNotStarted](wkextendedruntimesessionstate/notstarted.md): The app has not yet started or scheduled the session.
- [WKExtendedRuntimeSessionStateScheduled](wkextendedruntimesessionstate/scheduled.md): The app has scheduled the session to run at a future date.
- [WKExtendedRuntimeSessionStateRunning](wkextendedruntimesessionstate/running.md): The session is actively running.
- [WKExtendedRuntimeSessionStateInvalid](wkextendedruntimesessionstate/invalid.md): Either the session has encountered an error, or it has stopped running.

## See Also

### Managing the Session State

- [start](wkextendedruntimesession/start%28%29.md): Starts running the session.
- [startAtDate:](wkextendedruntimesession/start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](wkextendedruntimesession/invalidate%28%29.md): Stops the session.
- [state](wkextendedruntimesession/state.md): The session’s current state.
- [expirationDate](wkextendedruntimesession/expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](wkextendedruntimesession/requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](wkextendedruntimesessionautolaunchauthorizationstatus.md)
