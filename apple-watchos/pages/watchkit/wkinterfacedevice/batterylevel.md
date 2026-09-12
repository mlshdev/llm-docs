> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/batterylevel](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/batterylevel)

# batteryLevel (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

The battery’s current percent charge.

## Declaration

```swift
var batteryLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

If battery monitoring is enabled, this property is set to a value between `0.0` (0% charge) and `1.0` (100% charge). When the [batteryState](batterystate.md) property is set to [WKInterfaceDeviceBatteryState.unknown](../wkinterfacedevicebatterystate/unknown.md) (for example, when battery monitoring is disabled), the value is `-1.0`.

## See Also

### Reading Information About the Battery

- [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryState](batterystate.md): The device’s battery state.
- [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md): The battery’s charging state.

# batteryLevel (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

The battery’s current percent charge.

## Declaration

```objectivec
@property (nonatomic, readonly) float batteryLevel;
```

<a id="Discussion"></a>

## Discussion

If battery monitoring is enabled, this property is set to a value between `0.0` (0% charge) and `1.0` (100% charge). When the [batteryState](batterystate.md) property is set to [WKInterfaceDeviceBatteryStateUnknown](../wkinterfacedevicebatterystate/unknown.md) (for example, when battery monitoring is disabled), the value is `-1.0`.

## See Also

### Reading Information About the Battery

- [batteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryState](batterystate.md): The device’s battery state.
- [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md): The battery’s charging state.
