> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_activity_prevent_device_sleep](https://developer.apple.com/documentation/xpc/xpc_activity_prevent_device_sleep)

# XPC_ACTIVITY_PREVENT_DEVICE_SLEEP (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 12.0+

A Boolean that indicates whether the activity prevents the system from sleeping while on battery power.

## Declaration

```swift
let XPC_ACTIVITY_PREVENT_DEVICE_SLEEP: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

When set to `true`, the activity scheduler takes the necessary power assertions to keep the device awake, excluding the screen. Only set this property for activities that perform critical system functions, and that system sleep can’t interrupt. Note that setting this property can affect battery life.

## See Also

### Power consumption

- [XPC_ACTIVITY_ALLOW_BATTERY](xpc_activity_allow_battery.md): A Boolean value that indicates whether to allow the activity to run while the computer is on battery power.
- [XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP](xpc_activity_require_screen_sleep.md): A Boolean value that indicates whether the activity performs only while the primary screen is in sleep mode.

# XPC_ACTIVITY_PREVENT_DEVICE_SLEEP (Objective-C)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** macOS 12.0+

A Boolean that indicates whether the activity prevents the system from sleeping while on battery power.

## Declaration

```objectivec
extern const char * const XPC_ACTIVITY_PREVENT_DEVICE_SLEEP;
```

<a id="Discussion"></a>

## Discussion

When set to `true`, the activity scheduler takes the necessary power assertions to keep the device awake, excluding the screen. Only set this property for activities that perform critical system functions, and that system sleep can’t interrupt. Note that setting this property can affect battery life.

## See Also

### Power consumption

- [XPC_ACTIVITY_ALLOW_BATTERY](xpc_activity_allow_battery.md): A Boolean value that indicates whether to allow the activity to run while the computer is on battery power.
- [XPC_ACTIVITY_REQUIRE_SCREEN_SLEEP](xpc_activity_require_screen_sleep.md): A Boolean value that indicates whether the activity performs only while the primary screen is in sleep mode.
