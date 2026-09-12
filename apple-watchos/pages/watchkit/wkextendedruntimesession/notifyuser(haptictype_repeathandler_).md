> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextendedruntimesession/notifyuser(haptictype:repeathandler:)](https://developer.apple.com/documentation/watchkit/wkextendedruntimesession/notifyuser(haptictype:repeathandler:))

# notifyUser(hapticType:repeatHandler:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Play a repeating haptic alert.

## Declaration

```swift
func notifyUser(hapticType type: WKHapticType, repeatHandler: ((UnsafeMutablePointer<WKHapticType>) -> TimeInterval)? = nil)
```

## Parameters

- `type`: The type of haptic to play. For a complete list of haptic types, see [WKHapticType](../wkhaptictype.md).
- `repeatHandler`: An optional block that the system calls to set the frequency of the haptic feedback. The handler returns a valid time interval for the next haptic signal. This value must be greater than `0.0` and less than or equal to `60.0`. If `repeatHandler` is `nil`, the system uses the default time interval of `3.0` seconds.

  Use this block to change the haptic type by modifying the `outHapticType` parameter.

  - **`outHapticType`**: The next haptic. Set the value of this output parameter to change the haptic type.

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

For schedulable sessions such as smart alarms, call this method during the session to alert the user. When you call the method, the system plays repeating haptic feedback. If the app isn’t active, the system also displays a system alarm alert on the watch.

The haptic feedback repeats at the interval specified by the `repeatHandler`, and continues to repeat until the application or system alert invalidates the session.

- If the app isn’t active, the user can tap the Stop button to invalidate the session or tap the Open button to activate the app.
- If the app is active, the app must invalidate the session by calling its [invalidate()](invalidate%28%29.md) method.

Only call this method on a schedulable session that’s running: you must schedule the session using the [start(at:)](start%28at_%29.md) method, and the session’s state must equal [WKExtendedRuntimeSessionState.running](../wkextendedruntimesessionstate/running.md). During a smart alarm session, your app must call this method before the session expires.

# notifyUserWithHaptic:repeatHandler: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Play a repeating haptic alert.

## Declaration

```objectivec
- (void) notifyUserWithHaptic:(WKHapticType) type repeatHandler:(NSTimeInterval (^)(WKHapticType *outHapticType)) repeatHandler;
```

## Parameters

- `type`: The type of haptic to play. For a complete list of haptic types, see [WKHapticType](../wkhaptictype.md).
- `repeatHandler`: An optional block that the system calls to set the frequency of the haptic feedback. The handler returns a valid time interval for the next haptic signal. This value must be greater than `0.0` and less than or equal to `60.0`. If `repeatHandler` is `nil`, the system uses the default time interval of `3.0` seconds.

  Use this block to change the haptic type by modifying the `outHapticType` parameter.

  - **`outHapticType`**: The next haptic. Set the value of this output parameter to change the haptic type.

## Mentioned In

- [Using extended runtime sessions](../using-extended-runtime-sessions.md)

<a id="Discussion"></a>

## Discussion

For schedulable sessions such as smart alarms, call this method during the session to alert the user. When you call the method, the system plays repeating haptic feedback. If the app isn’t active, the system also displays a system alarm alert on the watch.

The haptic feedback repeats at the interval specified by the `repeatHandler`, and continues to repeat until the application or system alert invalidates the session.

- If the app isn’t active, the user can tap the Stop button to invalidate the session or tap the Open button to activate the app.
- If the app is active, the app must invalidate the session by calling its [invalidate](invalidate%28%29.md) method.

Only call this method on a schedulable session that’s running: you must schedule the session using the [startAtDate:](start%28at_%29.md) method, and the session’s state must equal [WKExtendedRuntimeSessionStateRunning](../wkextendedruntimesessionstate/running.md). During a smart alarm session, your app must call this method before the session expires.
