> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_require_battery_level](https://developer.apple.com/documentation/xpc/xpc_activity_require_battery_level)

# XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 7.0) · iPadOS 7.0+ (deprecated in 7.0) · Mac Catalyst 7.0+ (deprecated in 7.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An integer percentage of minimum battery charge required to allow the activity to run.

## Declaration

```swift
let XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

A default minimum battery level is determined by the system.

## See Also

### Deprecated

- [XPC_ACTIVITY_REQUIRE_HDD_SPINNING](xpc_activity_require_hdd_spinning.md): Deprecated. A Boolean value indicating whether the activity should only be performed while the hard disk drive (HDD) is spinning.

# XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 7.0) · iPadOS 7.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An integer percentage of minimum battery charge required to allow the activity to run.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL;
```

<a id="Discussion"></a>

## Discussion

A default minimum battery level is determined by the system.

## See Also

### Deprecated

- [XPC_ACTIVITY_REQUIRE_HDD_SPINNING](xpc_activity_require_hdd_spinning.md): Deprecated. A Boolean value indicating whether the activity should only be performed while the hard disk drive (HDD) is spinning.
