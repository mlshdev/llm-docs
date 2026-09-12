> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_register(_:_:_:)](https://developer.apple.com/documentation/xpc/xpc_activity_register(_:_:_:))

# xpc_activity_register(\_:\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Registers an activity with the system.

## Declaration

```swift
func xpc_activity_register(_ identifier: UnsafePointer<CChar>, _ criteria: xpc_object_t, _ handler: @escaping xpc_activity_handler_t)
```

## Parameters

- `identifier`: A unique identifier for the activity. Each application has its own namespace.
- `criteria`: A dictionary of criteria for the activity.
- `handler`: The handler block to be called when the activity changes state to one of the following states:

  - [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md) (optional)
  - [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md)

  The handler block is never invoked reentrantly. It will be invoked on a dispatch queue with an appropriate priority to perform the activity.

<a id="Discussion"></a>

## Discussion

Registers a new activity with the system. The criteria of the activity are described by the dictionary passed to this function. If an activity with the same identifier already exists, the criteria provided override the existing criteria unless the special dictionary [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md) is used. The [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md) dictionary instructs the system to first look up an existing activity without modifying its criteria. Once the existing activity is found (or a new one is created with an empty set of criteria) the handler will be called with an activity object in the [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md) state.

## See Also

### Registration

- [xpc_activity_unregister(\_:)](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.

# xpc_activity_register (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Registers an activity with the system.

## Declaration

```objectivec
extern void xpc_activity_register(const char *identifier, xpc_object_t criteria, xpc_activity_handler_t handler);
```

## Parameters

- `identifier`: A unique identifier for the activity. Each application has its own namespace.
- `criteria`: A dictionary of criteria for the activity.
- `handler`: The handler block to be called when the activity changes state to one of the following states:

  - [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md) (optional)
  - [XPC_ACTIVITY_STATE_RUN](xpc_activity_state_run.md)

  The handler block is never invoked reentrantly. It will be invoked on a dispatch queue with an appropriate priority to perform the activity.

<a id="Discussion"></a>

## Discussion

Registers a new activity with the system. The criteria of the activity are described by the dictionary passed to this function. If an activity with the same identifier already exists, the criteria provided override the existing criteria unless the special dictionary [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md) is used. The [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md) dictionary instructs the system to first look up an existing activity without modifying its criteria. Once the existing activity is found (or a new one is created with an empty set of criteria) the handler will be called with an activity object in the [XPC_ACTIVITY_STATE_CHECK_IN](xpc_activity_state_check_in.md) state.

## See Also

### Registration

- [xpc_activity_unregister](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.
