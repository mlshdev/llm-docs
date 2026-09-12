> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/start(at:)](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/start(at:))

# start(at:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Schedules a session to start running at a future date.

## Declaration

```swift
func start(at date: Date)
```

## Parameters

- `date`: The time and date when the session starts running.

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

Use [start(at:)](start%28at_%29.md) to set up a scheduable session. You must call this method while your app is running in the foreground. However, when the scheduled date and time arrives, the session starts running regardless of your app’s current state. If your app isn’t running, the system launches your app and calls your extension delegate’s [handle(\_:)](../wkextensiondelegate/handle%28__%29-4qxgv.md) method to start the session. If you don’t set the session’s delegate in the [handle(\_:)](../wkextensiondelegate/handle%28__%29-4qxgv.md) method, the system ends the session.

> **Important**

>  You can only use this method for alarm sessions.

If you call this method with a date that has already passed, the system tries to immediately starts the session, but the session is only given 30 minutes from the provided date. If the date is more than one minute in the past, this method fails.

## See Also

### Managing the Session State

- [start()](start%28%29.md): Starts running the session.
- [invalidate()](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatus(completion:)](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)

# startAtDate: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Schedules a session to start running at a future date.

## Declaration

```objectivec
- (void) startAtDate:(NSDate *) date;
```

## Parameters

- `date`: The time and date when the session starts running.

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

Use [startAtDate:](start%28at_%29.md) to set up a scheduable session. You must call this method while your app is running in the foreground. However, when the scheduled date and time arrives, the session starts running regardless of your app’s current state. If your app isn’t running, the system launches your app and calls your extension delegate’s [handleExtendedRuntimeSession:](../wkextensiondelegate/handle%28__%29-4qxgv.md) method to start the session. If you don’t set the session’s delegate in the [handleExtendedRuntimeSession:](../wkextensiondelegate/handle%28__%29-4qxgv.md) method, the system ends the session.

> **Important**

>  You can only use this method for alarm sessions.

If you call this method with a date that has already passed, the system tries to immediately starts the session, but the session is only given 30 minutes from the provided date. If the date is more than one minute in the past, this method fails.

## See Also

### Managing the Session State

- [start](start%28%29.md): Starts running the session.
- [invalidate](invalidate%28%29.md): Stops the session.
- [state](state.md): The session’s current state.
- [WKExtendedRuntimeSessionState](../wkextendedruntimesessionstate.md): The activation states for an extended runtime session.
- [expirationDate](expirationdate.md): The time and date when the session expires.
- [requestAutoLaunchAuthorizationStatusWithCompletion:](requestautolaunchauthorizationstatus%28completion_%29.md)
- [WKExtendedRuntimeSessionAutoLaunchAuthorizationStatus](../wkextendedruntimesessionautolaunchauthorizationstatus.md)
