> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcdevicebattery/batterystate

# batteryState (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The state of a device’s battery.

## Declaration

```swift
var batteryState: GCDeviceBattery.State { get }
```

## See Also

### Getting the battery level and state

- [batteryLevel](batterylevel.md): The charge level of a device’s battery.
- [GCDeviceBattery.State](state.md): A state that indicates whether a device’s battery has power and is charging.

# batteryState (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The state of a device’s battery.

## Declaration

```objectivec
@property (nonatomic, readonly) GCDeviceBatteryState batteryState;
```

## See Also

### Getting the battery level and state

- [batteryLevel](batterylevel.md): The charge level of a device’s battery.
- [GCDeviceBatteryState](state.md): A state that indicates whether a device’s battery has power and is charging.
