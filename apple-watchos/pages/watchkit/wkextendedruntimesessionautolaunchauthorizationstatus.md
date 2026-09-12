> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesessionautolaunchauthorizationstatus](https://developer.apple.com/documentation/watchkit/wkextendedruntimesessionautolaunchauthorizationstatus)

# WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 9.0+

## Declaration

```swift
enum WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus
```

## Topics

### Enumeration Cases

- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus.active](wkextendedruntimesessionautolaunchauthorizationstatus/active.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus.inactive](wkextendedruntimesessionautolaunchauthorizationstatus/inactive.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus.unknown](wkextendedruntimesessionautolaunchauthorizationstatus/unknown.md)

### Initializers

- [init(rawValue:)](wkextendedruntimesessionautolaunchauthorizationstatus/init%28rawvalue_%29.md)

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
- [WKExtendedRuntimeSessionState](wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](wkextendedruntimesession/expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](wkextendedruntimesession/requestautolaunchauthorizationstatus%28completion_%29.md)

# WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 9.0+

## Declaration

```objectivec
enum WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus : NSInteger;
```

## Topics

### Enumeration Cases

- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatusActive](wkextendedruntimesessionautolaunchauthorizationstatus/active.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatusInactive](wkextendedruntimesessionautolaunchauthorizationstatus/inactive.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatusUnknown](wkextendedruntimesessionautolaunchauthorizationstatus/unknown.md)

## See Also

### Managing the Session State

- [start](wkextendedruntimesession/start%28%29.md): Starts running the session.
- [startAtDate:](wkextendedruntimesession/start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](wkextendedruntimesession/invalidate%28%29.md): Stops the session.
- [state](wkextendedruntimesession/state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](wkextendedruntimesession/expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](wkextendedruntimesession/requestautolaunchauthorizationstatus%28completion_%29.md)
