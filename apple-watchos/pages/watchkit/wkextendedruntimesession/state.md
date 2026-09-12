> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/state](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/state)

# state (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

The session’s current state.

## Declaration

```swift
var state: WKExtendedRuntimeSessionState { get }
```

<a id="Discussion"></a>

## Discussion

For a list of session states, see [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md).

## See Also

### Managing the Session State

- [start()](start%28%29.md): Starts running the session.
- [start(at:)](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate()](invalidate%28%29.md): Stops the session.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)

# state (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

The session’s current state.

## Declaration

```objectivec
@property (nonatomic, readonly) WKExtendedRuntimeSessionState state;
```

<a id="Discussion"></a>

## Discussion

For a list of session states, see [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md).

## See Also

### Managing the Session State

- [start](start%28%29.md): Starts running the session.
- [startAtDate:](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](invalidate%28%29.md): Stops the session.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)
