> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_allow_battery](https://developer.apple.com/documentation/xpc/xpc_activity_allow_battery)

# XPC_ACTIVITY_ALLOW_BATTERY (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A Boolean value that indicates whether to allow the activity to run while the computer is on battery power.

## Declaration

```swift
let XPC_ACTIVITY_ALLOW_BATTERY: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

The default value is `false` for maintenance priority activity and `true` for utility priority activity.

## See Also

### Power consumption

- [XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP](xpc_activity_require_screen_sleep.md): A Boolean value that indicates whether the activity performs only while the primary screen is in sleep mode.
- [XPC_ACTIVITY_PREVENT_DEVICE_SLEEP](xpc_activity_prevent_device_sleep.md): A Boolean that indicates whether the activity prevents the system from sleeping while on battery power.

# XPC_ACTIVITY_ALLOW_BATTERY (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A Boolean value that indicates whether to allow the activity to run while the computer is on battery power.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_ALLOW_BATTERY;
```

<a id="Discussion"></a>

## Discussion

The default value is `false` for maintenance priority activity and `true` for utility priority activity.

## See Also

### Power consumption

- [XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP](xpc_activity_require_screen_sleep.md): A Boolean value that indicates whether the activity performs only while the primary screen is in sleep mode.
- [XPC_ACTIVITY_PREVENT_DEVICE_SLEEP](xpc_activity_prevent_device_sleep.md): A Boolean that indicates whether the activity prevents the system from sleeping while on battery power.
