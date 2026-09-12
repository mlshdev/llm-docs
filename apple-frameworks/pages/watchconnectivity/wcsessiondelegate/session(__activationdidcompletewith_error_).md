> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:activationdidcompletewith:error:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:activationdidcompletewith:error:))

# session(\_:activationDidCompleteWith:error:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

Tells the delegate that the session has finished activating.

## Declaration

```swift
func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: (any Error)?)
```

## Parameters

- `session`: The session object whose activation completed.
- `activationState`: The state of the session. Sessions normally move to the [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md) state upon success or the [WCSessionActivationState.notActivated](../wcsessionactivationstate/notactivated.md) state when there is an error. On iOS, the session may also move to the [WCSessionActivationState.inactive](../wcsessionactivationstate/inactive.md) state if there is data waiting to be delivered from a previous session.
- `error`: An error object indicating that a problem occurred or `nil` if activation completed successfully. When the `activationState` parameter contains the value [WCSessionActivationState.notActivated](../wcsessionactivationstate/notactivated.md), this parameter contains the error object describing the reason for the failure.

<a id="Discussion"></a>

## Discussion

You must implement this method to support asynchronous activation and quick watch switching. Your implementation should check the value of the `activationState` parameter to see if communication with the counterpart app is possible. When the state is [WCSessionActivationState.activated](../wcsessionactivationstate/activated.md), you may communicate normally with the other app.

## See Also

### Managing Session Activation

- [sessionDidBecomeInactive(\_:)](sessiondidbecomeinactive%28__%29.md): Tells the delegate that the session will stop communicating with the current Apple Watch.
- [sessionDidDeactivate(\_:)](sessiondiddeactivate%28__%29.md): Tells the delegate that the session has delivered all the data from the previous session, and that communication with the Apple Watch has ended.

# session:activationDidCompleteWithState:error: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.2+

Tells the delegate that the session has finished activating.

## Declaration

```objectivec
- (void) session:(WCSession *) session activationDidCompleteWithState:(WCSessionActivationState) activationState error:(NSError *) error;
```

## Parameters

- `session`: The session object whose activation completed.
- `activationState`: The state of the session. Sessions normally move to the [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md) state upon success or the [WCSessionActivationStateNotActivated](../wcsessionactivationstate/notactivated.md) state when there is an error. On iOS, the session may also move to the [WCSessionActivationStateInactive](../wcsessionactivationstate/inactive.md) state if there is data waiting to be delivered from a previous session.
- `error`: An error object indicating that a problem occurred or `nil` if activation completed successfully. When the `activationState` parameter contains the value [WCSessionActivationStateNotActivated](../wcsessionactivationstate/notactivated.md), this parameter contains the error object describing the reason for the failure.

<a id="Discussion"></a>

## Discussion

You must implement this method to support asynchronous activation and quick watch switching. Your implementation should check the value of the `activationState` parameter to see if communication with the counterpart app is possible. When the state is [WCSessionActivationStateActivated](../wcsessionactivationstate/activated.md), you may communicate normally with the other app.

## See Also

### Managing Session Activation

- [sessionDidBecomeInactive:](sessiondidbecomeinactive%28__%29.md): Tells the delegate that the session will stop communicating with the current Apple Watch.
- [sessionDidDeactivate:](sessiondiddeactivate%28__%29.md): Tells the delegate that the session has delivered all the data from the previous session, and that communication with the Apple Watch has ended.
