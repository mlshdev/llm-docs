> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_repeating](https://developer.apple.com/documentation/xpc/xpc_activity_repeating)

# XPC_ACTIVITY_REPEATING (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A Boolean property that indicates whether this is a repeating activity.

## Declaration

```swift
let XPC_ACTIVITY_REPEATING: UnsafePointer<CChar>
```

## See Also

### Scheduling

- [XPC_ACTIVITY_DELAY](xpc_activity_delay.md): An integer property that indicates the number of seconds to delay before beginning the activity.
- [XPC_ACTIVITY_GRACE_PERIOD](xpc_activity_grace_period.md): An integer property that indicates the number of seconds to allow as a grace period before the scheduling of the activity becomes more aggressive.

# XPC_ACTIVITY_REPEATING (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A Boolean property that indicates whether this is a repeating activity.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_REPEATING;
```

## See Also

### Scheduling

- [XPC_ACTIVITY_DELAY](xpc_activity_delay.md): An integer property that indicates the number of seconds to delay before beginning the activity.
- [XPC_ACTIVITY_GRACE_PERIOD](xpc_activity_grace_period.md): An integer property that indicates the number of seconds to allow as a grace period before the scheduling of the activity becomes more aggressive.
