> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/isbatterymonitoringenabled](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/isbatterymonitoringenabled)

# isBatteryMonitoringEnabled (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

A Boolean value that determines whether the app can monitor the device’s battery.

## Declaration

```swift
var isBatteryMonitoringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to [false](https://developer.apple.com/documentation/swift/false). To monitor the device’s battery, set this property to [true](https://developer.apple.com/documentation/swift/true). This enables both the [batteryLevel](batterylevel.md) and [batteryState](batterystate.md) properties.

## See Also

### Reading Information About the Battery

- [batteryLevel](batterylevel.md): The battery’s current percent charge.
- [batteryState](batterystate.md): The device’s battery state.
- [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md): The battery’s charging state.

# batteryMonitoringEnabled (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 4.0+

A Boolean value that determines whether the app can monitor the device’s battery.

## Declaration

```objectivec
@property (nonatomic, getter=isBatteryMonitoringEnabled) BOOL batteryMonitoringEnabled;
```

<a id="Discussion"></a>

## Discussion

This property defaults to [false](https://developer.apple.com/documentation/swift/false). To monitor the device’s battery, set this property to [true](https://developer.apple.com/documentation/swift/true). This enables both the [batteryLevel](batterylevel.md) and [batteryState](batterystate.md) properties.

## See Also

### Reading Information About the Battery

- [batteryLevel](batterylevel.md): The battery’s current percent charge.
- [batteryState](batterystate.md): The device’s battery state.
- [WKInterfaceDeviceBatteryState](../wkinterfacedevicebatterystate.md): The battery’s charging state.
