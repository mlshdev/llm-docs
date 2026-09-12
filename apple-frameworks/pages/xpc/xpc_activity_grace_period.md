> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_grace_period](https://developer.apple.com/documentation/xpc/xpc_activity_grace_period)

# XPC_ACTIVITY_GRACE_PERIOD (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

An integer property that indicates the number of seconds to allow as a grace period before the scheduling of the activity becomes more aggressive.

## Declaration

```swift
let XPC_ACTIVITY_GRACE_PERIOD: UnsafePointer<CChar>
```

## See Also

### Scheduling

- [XPC_ACTIVITY_REPEATING](xpc_activity_repeating.md): A Boolean property that indicates whether this is a repeating activity.
- [XPC_ACTIVITY_DELAY](xpc_activity_delay.md): An integer property that indicates the number of seconds to delay before beginning the activity.

# XPC_ACTIVITY_GRACE_PERIOD (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

An integer property that indicates the number of seconds to allow as a grace period before the scheduling of the activity becomes more aggressive.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_GRACE_PERIOD;
```

## See Also

### Scheduling

- [XPC_ACTIVITY_REPEATING](xpc_activity_repeating.md): A Boolean property that indicates whether this is a repeating activity.
- [XPC_ACTIVITY_DELAY](xpc_activity_delay.md): An integer property that indicates the number of seconds to delay before beginning the activity.
