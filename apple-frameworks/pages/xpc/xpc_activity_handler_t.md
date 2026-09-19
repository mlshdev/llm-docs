> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpc_activity_handler_t

# xpc_activity_handler_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block to call when an XPC activity becomes eligible to run.

## Declaration

```swift
typealias xpc_activity_handler_t = (xpc_activity_t) -> Void
```

## See Also

### Registration

- [xpc_activity_register(\_:\_:\_:)](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister(\_:)](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.

# xpc_activity_handler_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block to call when an XPC activity becomes eligible to run.

## Declaration

```objectivec
typedef void (^)(NSObject<OS_xpc_object> *) xpc_activity_handler_t;
```

## See Also

### Registration

- [xpc_activity_register](xpc_activity_register%28______%29.md): Registers an activity with the system.
- [xpc_activity_unregister](xpc_activity_unregister%28__%29.md): Unregisters an activity with the specified identifier.
- [XPC_ACTIVITY_CHECK_IN](xpc_activity_check_in.md): A constant to check in with the system for a previously registered activity using the same identifier.
- [xpc_activity_t](xpc_activity_t.md): An XPC activity object.
