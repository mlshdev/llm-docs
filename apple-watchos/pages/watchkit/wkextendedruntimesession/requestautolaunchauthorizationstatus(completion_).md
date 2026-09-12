> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/requestautolaunchauthorizationstatus(completion:)](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/requestautolaunchauthorizationstatus(completion:))

# requestAutoLaunchAuthorizationStatus(completion:) (Swift)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 9.0+

## Declaration

```swift
class func requestAutoLaunchAuthorizationStatus(completion: @escaping @Sendable (WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus, (any Error)?) -> Void)
```

```swift
class func requestAutoLaunchAuthorizationStatus() async throws -> WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus
```

## See Also

### Managing the Session State

- [start()](start%28%29.md): Starts running the session.
- [start(at:)](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate()](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)

# requestAutoLaunchAuthorizationStatusWithCompletion: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 9.0+

## Declaration

```objectivec
+ (void) requestAutoLaunchAuthorizationStatusWithCompletion:(void (^)(WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus authorizationStatus, NSError *error)) completion;
```

## See Also

### Managing the Session State

- [start](start%28%29.md): Starts running the session.
- [startAtDate:](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)
