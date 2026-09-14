> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacedevicebatterystate/unknown

# WKInterfaceDeviceBatteryState.unknown (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 4.0+

An unknown battery-charging state.

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

When the device’s [isBatteryMonitoringEnabled](../wkinterfacedevice/isbatterymonitoringenabled.md) property is set to [false](https://developer.apple.com/documentation/swift/false), its [batteryState](../wkinterfacedevice/batterystate.md) property is set to [WKInterfaceDeviceBatteryState.unknown](unknown.md).

## See Also

### Battery States

- [WKInterfaceDeviceBatteryState.charging](charging.md): The device is connected to a charger, but its battery charge is under 100%.
- [WKInterfaceDeviceBatteryState.full](full.md): The device is connected to a charger, and its battery is charged to 100%.
- [WKInterfaceDeviceBatteryState.unplugged](unplugged.md): The device is not connected to a charger and is running on battery power.

# WKInterfaceDeviceBatteryStateUnknown (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 4.0+

An unknown battery-charging state.

## Declaration

```objectivec
WKInterfaceDeviceBatteryStateUnknown
```

<a id="Discussion"></a>

## Discussion

When the device’s [batteryMonitoringEnabled](../wkinterfacedevice/isbatterymonitoringenabled.md) property is set to [false](https://developer.apple.com/documentation/swift/false), its [batteryState](../wkinterfacedevice/batterystate.md) property is set to [WKInterfaceDeviceBatteryStateUnknown](unknown.md).

## See Also

### Battery States

- [WKInterfaceDeviceBatteryStateCharging](charging.md): The device is connected to a charger, but its battery charge is under 100%.
- [WKInterfaceDeviceBatteryStateFull](full.md): The device is connected to a charger, and its battery is charged to 100%.
- [WKInterfaceDeviceBatteryStateUnplugged](unplugged.md): The device is not connected to a charger and is running on battery power.
