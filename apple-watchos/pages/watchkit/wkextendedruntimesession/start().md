> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/start()](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/start())

# start() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Starts running the session.

## Declaration

```swift
func start()
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

Use [start()](start%28%29.md) to begin a session. You must call this method while your app is running in the foreground.

You can’t use the [start()](start%28%29.md) method to set up a schedulable session (such as a smart alarm session). Call the [start(at:)](start%28at_%29.md) method instead.

## See Also

### Managing the Session State

- [start(at:)](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate()](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)

# start (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Starts running the session.

## Declaration

```objectivec
- (void) start;
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

Use [start](start%28%29.md) to begin a session. You must call this method while your app is running in the foreground.

You can’t use the [start](start%28%29.md) method to set up a schedulable session (such as a smart alarm session). Call the [startAtDate:](start%28at_%29.md) method instead.

## See Also

### Managing the Session State

- [startAtDate:](start%28at_%29.md): Schedules a session to start running at a future date.
- [invalidate](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)
