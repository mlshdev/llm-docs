> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_priority_utility](https://developer.apple.com/documentation/xpc/xpc_activity_priority_utility)

# XPC_ACTIVITY_PRIORITY_UTILITY (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A string that indicates an activity is utility priority.

## Declaration

```swift
let XPC_ACTIVITY_PRIORITY_UTILITY: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

Utility priority is intended for user-visible tasks such as fetching data from the network, copying files, or importing data.

## See Also

### Priority

- [XPC_ACTIVITY_PRIORITY](xpc_activity_priority.md): A string property that indicates the priority of the activity.
- [XPC_ACTIVITY_PRIORITY_MAINTENANCE](xpc_activity_priority_maintenance.md): A string that indicates an activity is maintenance priority.

# XPC_ACTIVITY_PRIORITY_UTILITY (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A string that indicates an activity is utility priority.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_PRIORITY_UTILITY;
```

<a id="Discussion"></a>

## Discussion

Utility priority is intended for user-visible tasks such as fetching data from the network, copying files, or importing data.

## See Also

### Priority

- [XPC_ACTIVITY_PRIORITY](xpc_activity_priority.md): A string property that indicates the priority of the activity.
- [XPC_ACTIVITY_PRIORITY_MAINTENANCE](xpc_activity_priority_maintenance.md): A string that indicates an activity is maintenance priority.
