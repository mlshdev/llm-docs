> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_state_done](https://developer.apple.com/documentation/xpc/xpc_activity_state_done)

# XPC_ACTIVITY_STATE_DONE (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The activity is complete.

## Declaration

```swift
var XPC_ACTIVITY_STATE_DONE: Int { get }
```

<a id="Discussion"></a>

## Discussion

An app may pass this value to [xpc_activity_set_state(\_:\_:)](xpc_activity_set_state%28____%29.md) to indicate when the activity completes. For nonrepeating activity, the resources for the activity automatically release upon return from the handler block. For repeating activity, timers present in the activity’s criteria reset.

## See Also

### State

- [xpc_activity_get_state(\_:)](xpc_activity_get_state%28__%29.md): Returns the current state of an activity.
- [xpc_activity_set_state(\_:\_:)](xpc_activity_set_state%28____%29.md): Updates the current state of an activity.
- [xpc_activity_should_defer(\_:)](xpc_activity_should_defer%28__%29.md): Tests whether to defer an activity.
- [xpc_activity_state_t](xpc-activity-state-t-swift-consts.md): A type that represents the state of an activity.
- [xpc_activity_state_t](xpc_activity_state_t.md): A type that represents the state of an activity.
- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.

# XPC_ACTIVITY_STATE_DONE (Objective-C)

**Framework:** XPC  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The activity is complete.

## Declaration

```objectivec
XPC_ACTIVITY_STATE_DONE
```

<a id="Discussion"></a>

## Discussion

An app may pass this value to [xpc_activity_set_state](xpc_activity_set_state%28____%29.md) to indicate when the activity completes. For nonrepeating activity, the resources for the activity automatically release upon return from the handler block. For repeating activity, timers present in the activity’s criteria reset.

## See Also

### State

- [xpc_activity_get_state](xpc_activity_get_state%28__%29.md): Returns the current state of an activity.
- [xpc_activity_set_state](xpc_activity_set_state%28____%29.md): Updates the current state of an activity.
- [xpc_activity_should_defer](xpc_activity_should_defer%28__%29.md): Tests whether to defer an activity.
- [xpc_activity_state_t](xpc-activity-state-t-swift-consts.md): A type that represents the state of an activity.
- [xpc_activity_state_t](xpc_activity_state_t.md): A type that represents the state of an activity.
- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
