> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevicebatterystate](https://developer.apple.com/documentation/watchkit/wkinterfacedevicebatterystate)

# WKInterfaceDeviceBatteryState (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

The battery’s charging state.

## Declaration

```swift
enum WKInterfaceDeviceBatteryState
```

## Topics

### Battery States

- [WKInterfaceDeviceBatteryState.charging](wkinterfacedevicebatterystate/charging.md): The device is connected to a charger, but its battery charge is under 100%.
- [WKInterfaceDeviceBatteryState.full](wkinterfacedevicebatterystate/full.md): The device is connected to a charger, and its battery is charged to 100%.
- [WKInterfaceDeviceBatteryState.unknown](wkinterfacedevicebatterystate/unknown.md): An unknown battery-charging state.
- [WKInterfaceDeviceBatteryState.unplugged](wkinterfacedevicebatterystate/unplugged.md): The device is not connected to a charger and is running on battery power.

### Initializers

- [init(rawValue:)](wkinterfacedevicebatterystate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading Information About the Battery

- [isBatteryMonitoringEnabled](wkinterfacedevice/isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryLevel](wkinterfacedevice/batterylevel.md): The battery’s current percent charge.
- [batteryState](wkinterfacedevice/batterystate.md): The device’s battery state.

# WKInterfaceDeviceBatteryState (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

The battery’s charging state.

## Declaration

```objectivec
enum WKInterfaceDeviceBatteryState : NSInteger;
```

## Topics

### Battery States

- [WKInterfaceDeviceBatteryStateCharging](wkinterfacedevicebatterystate/charging.md): The device is connected to a charger, but its battery charge is under 100%.
- [WKInterfaceDeviceBatteryStateFull](wkinterfacedevicebatterystate/full.md): The device is connected to a charger, and its battery is charged to 100%.
- [WKInterfaceDeviceBatteryStateUnknown](wkinterfacedevicebatterystate/unknown.md): An unknown battery-charging state.
- [WKInterfaceDeviceBatteryStateUnplugged](wkinterfacedevicebatterystate/unplugged.md): The device is not connected to a charger and is running on battery power.

## See Also

### Reading Information About the Battery

- [batteryMonitoringEnabled](wkinterfacedevice/isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryLevel](wkinterfacedevice/batterylevel.md): The battery’s current percent charge.
- [batteryState](wkinterfacedevice/batterystate.md): The device’s battery state.
