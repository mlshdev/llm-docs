> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_unregister(_:)](https://developer.apple.com/documentation/xpc/xpc_activity_unregister(_:))

# xpc_activity_unregister(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Unregisters an activity with the specified identifier.

## Declaration

```swift
func xpc_activity_unregister(_ identifier: UnsafePointer<CChar>)
```

## Parameters

- `identifier`: The identifier of the activity to unregister.

<a id="Discussion"></a>

## Discussion

A dynamically registered activity will be deleted in response to this call. Statically registered activity (from a launchd property list) will be reverted to its original criteria if any modifications were made.

Unregistering an activity has no effect on any outstanding [xpc_activity_t](xpc_activity_t.md) objects or any currently executing [xpc_activity_handler_t](xpc_activity_handler_t.md) blocks; however, no new handler block invocations will be made after it is unregistered.

## See Also

### Registration

- [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.

# xpc_activity_unregister (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.9+

Unregisters an activity with the specified identifier.

## Declaration

```objectivec
extern void xpc_activity_unregister(const char *identifier);
```

## Parameters

- `identifier`: The identifier of the activity to unregister.

<a id="Discussion"></a>

## Discussion

A dynamically registered activity will be deleted in response to this call. Statically registered activity (from a launchd property list) will be reverted to its original criteria if any modifications were made.

Unregistering an activity has no effect on any outstanding [xpc_activity_t](xpc_activity_t.md) objects or any currently executing [xpc_activity_handler_t](xpc_activity_handler_t.md) blocks; however, no new handler block invocations will be made after it is unregistered.

## See Also

### Registration

- [xpc_activity_register](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.
