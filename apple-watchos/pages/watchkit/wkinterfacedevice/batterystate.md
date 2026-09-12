> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/batterystate](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/batterystate)

# batteryState (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

The device’s battery state.

## Declaration

```swift
var batteryState: WKInterfaceDeviceBatteryState { get }
```

<a id="Discussion"></a>

## Discussion

If battery monitoring is enabled, this property is set to the device’s current battery state. For a list of possible states, see [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md).

If battery monitoring is disabled, this property is set to [WKInterfaceDeviceBatteryState.unknown](../wkinterfacedevicebatterystate/unknown.md).

## See Also

### Reading Information About the Battery

- [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryLevel](batterylevel.md): The battery’s current percent charge.
- [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md): The battery’s charging state.

# batteryState (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

The device’s battery state.

## Declaration

```objectivec
@property (nonatomic, readonly) WKInterfaceDeviceBatteryState batteryState;
```

<a id="Discussion"></a>

## Discussion

If battery monitoring is enabled, this property is set to the device’s current battery state. For a list of possible states, see [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md).

If battery monitoring is disabled, this property is set to [WKInterfaceDeviceBatteryStateUnknown](../wkinterfacedevicebatterystate/unknown.md).

## See Also

### Reading Information About the Battery

- [batteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that determines whether the app can monitor the device’s battery.
- [batteryLevel](batterylevel.md): The battery’s current percent charge.
- [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md): The battery’s charging state.
