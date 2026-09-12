> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/expirationdate](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/expirationdate)

# expirationDate (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

The time and date when the session expires.

## Declaration

```swift
var expirationDate: Date? { get }
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

Use this property to determine how much time remains before the session stops running.

This property starts set to `nil`. The system assigns a date as soon as the session starts running. This property remains valid, even after the session becomes invalid.

## See Also

### Managing the Session State

- [start()](start%28%29.md): Starts running the session.
- [start(at:)](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate()](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [requestAutoLaunchAuthorizationStatus(completion:)](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)

# expirationDate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 6.0+

The time and date when the session expires.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDate * expirationDate;
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

Use this property to determine how much time remains before the session stops running.

This property starts set to `nil`. The system assigns a date as soon as the session starts running. This property remains valid, even after the session becomes invalid.

## See Also

### Managing the Session State

- [start](start%28%29.md): Starts running the session.
- [startAtDate:](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)
