> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_check_in](https://developer.apple.com/documentation/xpc/xpc_activity_check_in)

# XPC_ACTIVITY_CHECK_IN (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A constant to check in with the system for a previously registered activity using the same identifier.

## Declaration

```swift
let XPC_ACTIVITY_CHECK_IN: xpc_object_t
```

<a id="Discussion"></a>

## Discussion

Pass this constant to [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md) as the criteria dictionary to check in with the system for previously registered activity using the same identifier (for example, an activity from a launchd property list).

## See Also

### Registration

- [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister(\_:)](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.

# XPC_ACTIVITY_CHECK_IN (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A constant to check in with the system for a previously registered activity using the same identifier.

## Declaration

```objectivec
extern xpc_object_t const XPC_ACTIVITY_CHECK_IN;
```

<a id="Discussion"></a>

## Discussion

Pass this constant to [xpc_activity_register](xpc_activity_register%28______%29.md) as the criteria dictionary to check in with the system for previously registered activity using the same identifier (for example, an activity from a launchd property list).

## See Also

### Registration

- [xpc_activity_register](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.
