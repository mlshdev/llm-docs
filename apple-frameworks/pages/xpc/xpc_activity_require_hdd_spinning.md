> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_require_hdd_spinning](https://developer.apple.com/documentation/xpc/xpc_activity_require_hdd_spinning)

# XPC_ACTIVITY_REQUIRE_HDD_SPINNING (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 7.0) · iPadOS 7.0+ (deprecated in 7.0) · Mac Catalyst 7.0+ (deprecated in 7.0) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A Boolean value indicating whether the activity should only be performed while the hard disk drive (HDD) is spinning.

## Declaration

```swift
let XPC_ACTIVITY_REQUIRE_HDD_SPINNING: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

Computers with flash storage are considered to be equivalent to HDD spinning. Defaults to `NO`.

## See Also

### Deprecated

- [XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL](xpc_activity_require_battery_level.md): Deprecated. An integer percentage of minimum battery charge required to allow the activity to run.

# XPC_ACTIVITY_REQUIRE_HDD_SPINNING (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 7.0) · iPadOS 7.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.9) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A Boolean value indicating whether the activity should only be performed while the hard disk drive (HDD) is spinning.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_REQUIRE_HDD_SPINNING;
```

<a id="Discussion"></a>

## Discussion

Computers with flash storage are considered to be equivalent to HDD spinning. Defaults to `NO`.

## See Also

### Deprecated

- [XPC_ACTIVITY_REQUIRE_BATTERY_LEVEL](xpc_activity_require_battery_level.md): Deprecated. An integer percentage of minimum battery charge required to allow the activity to run.
