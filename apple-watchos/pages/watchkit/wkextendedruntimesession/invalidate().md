> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/invalidate()](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/invalidate())

# invalidate() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Stops the session.

## Declaration

```swift
func invalidate()
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

This method stops a running session. If you’ve scheduled a session, it cancels the session. If the session isn’t yet running or scheduled, this method triggers a [WKExtendedRuntimeSessionErrorCode.notYetStarted](../wkextendedruntimesessionerrorcode/notyetstarted.md) error.

For sessions started with [start(at:)](start%28at_%29.md), you can only call [invalidate()](invalidate%28%29.md) when the app is active. For all other sessions, you can call [invalidate()](invalidate%28%29.md) to end a session at any time.

After calling [invalidate()](invalidate%28%29.md), you can no longer run the session. Create and start a new session instead.

## See Also

### Managing the Session State

- [start()](start%28%29.md): Starts running the session.
- [start(at:)](start%28at_%29.md): Schedules a session to start running at a future date.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)

# invalidate (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Stops the session.

## Declaration

```objectivec
- (void) invalidate;
```

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

This method stops a running session. If you’ve scheduled a session, it cancels the session. If the session isn’t yet running or scheduled, this method triggers a [WKExtendedRuntimeSessionErrorNotYetStarted](../wkextendedruntimesessionerrorcode/notyetstarted.md) error.

For sessions started with [startAtDate:](start%28at_%29.md), you can only call [invalidate](invalidate%28%29.md) when the app is active. For all other sessions, you can call [invalidate](invalidate%28%29.md) to end a session at any time.

After calling [invalidate](invalidate%28%29.md), you can no longer run the session. Create and start a new session instead.

## See Also

### Managing the Session State

- [start](start%28%29.md): Starts running the session.
- [startAtDate:](start%28at_%29.md): Schedules a session to start running at a future date.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)
