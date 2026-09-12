> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicebattery/state](https://developer.apple.com/documentation/gamecontroller/gcdevicebattery/state)

# GCDeviceBattery.State (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that indicates whether a device’s battery has power and is charging.

## Declaration

```swift
enum State
```

## Topics

### States

- [GCDeviceBattery.State.unknown](state/unknown.md): The state of the device’s battery is unknown.
- [GCDeviceBattery.State.discharging](state/discharging.md): The device’s battery is discharging.
- [GCDeviceBattery.State.charging](state/charging.md): The device’s battery has power and is charging, but isn’t fully charged.
- [GCDeviceBattery.State.full](state/full.md): The device’s battery has power and is fully charged.

### Initializers

- [init(rawValue:)](state/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the battery level and state

- [batteryLevel](batterylevel.md): The charge level of a device’s battery.
- [batteryState](batterystate.md): The state of a device’s battery.

# GCDeviceBatteryState (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A state that indicates whether a device’s battery has power and is charging.

## Declaration

```objectivec
enum GCDeviceBatteryState : NSInteger;
```

## Topics

### States

- [GCDeviceBatteryStateUnknown](state/unknown.md): The state of the device’s battery is unknown.
- [GCDeviceBatteryStateDischarging](state/discharging.md): The device’s battery is discharging.
- [GCDeviceBatteryStateCharging](state/charging.md): The device’s battery has power and is charging, but isn’t fully charged.
- [GCDeviceBatteryStateFull](state/full.md): The device’s battery has power and is fully charged.

## See Also

### Getting the battery level and state

- [batteryLevel](batterylevel.md): The charge level of a device’s battery.
- [batteryState](batterystate.md): The state of a device’s battery.
