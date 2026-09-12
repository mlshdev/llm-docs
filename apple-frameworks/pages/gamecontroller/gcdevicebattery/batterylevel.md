> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicebattery/batterylevel](https://developer.apple.com/documentation/gamecontroller/gcdevicebattery/batterylevel)

# batteryLevel (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The charge level of a device’s battery.

## Declaration

```swift
var batteryLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

The battery level is a percentage ranging from `0.0` (fully discharged) to `1.0` (100% charged). The default value for this property is `0.0`.

## See Also

### Getting the battery level and state

- [batteryState](batterystate.md): The state of a device’s battery.
- [GCDeviceBattery.State](state.md): A state that indicates whether a device’s battery has power and is charging.

# batteryLevel (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The charge level of a device’s battery.

## Declaration

```objectivec
@property (nonatomic, readonly) float batteryLevel;
```

<a id="Discussion"></a>

## Discussion

The battery level is a percentage ranging from `0.0` (fully discharged) to `1.0` (100% charged). The default value for this property is `0.0`.

## See Also

### Getting the battery level and state

- [batteryState](batterystate.md): The state of a device’s battery.
- [GCDeviceBatteryState](state.md): A state that indicates whether a device’s battery has power and is charging.
