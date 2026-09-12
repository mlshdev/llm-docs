> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_priority_maintenance](https://developer.apple.com/documentation/xpc/xpc_activity_priority_maintenance)

# XPC_ACTIVITY_PRIORITY_MAINTENANCE (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A string that indicates an activity is maintenance priority.

## Declaration

```swift
let XPC_ACTIVITY_PRIORITY_MAINTENANCE: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

Maintenance priority is intended for user-invisible maintenance tasks such as garbage collection or optimization.

## See Also

### Priority

- [XPC_ACTIVITY_PRIORITY](xpc_activity_priority.md): A string property that indicates the priority of the activity.
- [XPC_ACTIVITY_PRIORITY_UTILITY](xpc_activity_priority_utility.md): A string that indicates an activity is utility priority.

# XPC_ACTIVITY_PRIORITY_MAINTENANCE (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A string that indicates an activity is maintenance priority.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_PRIORITY_MAINTENANCE;
```

<a id="Discussion"></a>

## Discussion

Maintenance priority is intended for user-invisible maintenance tasks such as garbage collection or optimization.

## See Also

### Priority

- [XPC_ACTIVITY_PRIORITY](xpc_activity_priority.md): A string property that indicates the priority of the activity.
- [XPC_ACTIVITY_PRIORITY_UTILITY](xpc_activity_priority_utility.md): A string that indicates an activity is utility priority.
