> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_t](https://developer.apple.com/documentation/xpc/xpc_activity_t)

# xpc_activity_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An XPC activity object.

## Declaration

```swift
typealias xpc_activity_t = xpc_object_t
```

<a id="Discussion"></a>

## Discussion

This object represents a set of execution criteria and a current execution state for background activity on the system. After registering an activity, the system evaluates its criteria to determine whether the activity is eligible to run under current system conditions. When an activity becomes eligible to run, its execution state updates and an invocation of its handler block occurs.

## See Also

### Registration

- [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister(\_:)](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.

# xpc_activity_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An XPC activity object.

## Declaration

```objectivec
typedef xpc_object_t xpc_activity_t;
```

<a id="Discussion"></a>

## Discussion

This object represents a set of execution criteria and a current execution state for background activity on the system. After registering an activity, the system evaluates its criteria to determine whether the activity is eligible to run under current system conditions. When an activity becomes eligible to run, its execution state updates and an invocation of its handler block occurs.

## See Also

### Registration

- [xpc_activity_register](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_handler_t](xpc_activity_handler_t.md): A block to call when an XPC activity becomes eligible to run.
