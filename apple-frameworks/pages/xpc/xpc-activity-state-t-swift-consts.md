> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc-activity-state-t-swift-consts](https://developer.apple.com/documentation/xpc/xpc-activity-state-t-swift-consts)

# xpc_activity_state_t (Swift)

**Framework:** XPC  
**Kind:** API Collection

A type that represents the state of an activity.

<a id="overview"></a>

## Overview

An activity is in one of the states that [xpc_activity_state_t](xpc_activity_state_t.md) defines. Apps may check the current state of the activity using [xpc_activity_get_state(\_:)](xpc_activity_get_state%28__%29.md) in the handler block that you provide to [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md).

The app can modify the state of the activity by calling [xpc_activity_set_state(\_:\_:)](xpc_activity_set_state%28____%29.md) with one of the following:

- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md)
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md)
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md)

## Topics

### Constants

- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md): The activity is complete.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.

## See Also

### State

- [xpc_activity_get_state(\_:)](xpc_activity_get_state%28__%29.md): Returns the current state of an activity.
- [xpc_activity_set_state(\_:\_:)](xpc_activity_set_state%28____%29.md): Updates the current state of an activity.
- [xpc_activity_should_defer(\_:)](xpc_activity_should_defer%28__%29.md): Tests whether to defer an activity.
- [xpc_activity_state_t](xpc_activity_state_t.md): A type that represents the state of an activity.
- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md): The activity is complete.

# xpc_activity_state_t (Objective-C)

**Framework:** XPC  
**Kind:** API Collection

A type that represents the state of an activity.

<a id="overview"></a>

## Overview

An activity is in one of the states that [xpc_activity_state_t](xpc_activity_state_t.md) defines. Apps may check the current state of the activity using [xpc_activity_get_state](xpc_activity_get_state%28__%29.md) in the handler block that you provide to [xpc_activity_register](xpc_activity_register%28______%29.md).

The app can modify the state of the activity by calling [xpc_activity_set_state](xpc_activity_set_state%28____%29.md) with one of the following:

- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md)
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md)
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md)

## Topics

### Constants

- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md): The activity is complete.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.

## See Also

### State

- [xpc_activity_get_state](xpc_activity_get_state%28__%29.md): Returns the current state of an activity.
- [xpc_activity_set_state](xpc_activity_set_state%28____%29.md): Updates the current state of an activity.
- [xpc_activity_should_defer](xpc_activity_should_defer%28__%29.md): Tests whether to defer an activity.
- [xpc_activity_state_t](xpc_activity_state_t.md): A type that represents the state of an activity.
- [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md): The activity has completed a check-in with the system.
- [XPC_ACTIVITY_STATE_WAIT](xpc_activity_state_wait.md): The activity is waiting for an opportunity to run.
- [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md): The activity is eligible to run according to its criteria.
- [XPC_ACTIVITY_STATE_DEFER](xpc_activity_state_defer.md): The activity needs to wait until it satisfies its criteria again.
- [XPC_ACTIVITY_STATE_CONTINUE](xpc_activity_state_continue.md): The activity continues its operation beyond the return of its handler block.
- [XPC_ACTIVITY_STATE_DONE](xpc_activity_state_done.md): The activity is complete.
