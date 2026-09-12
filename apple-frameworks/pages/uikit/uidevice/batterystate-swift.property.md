> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/batterystate-swift.property](https://developer.apple.com/documentation/uikit/uidevice/batterystate-swift.property)

# batteryState (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The battery state for the device.

## Declaration

```swift
var batteryState: UIDevice.BatteryState { get }
```

<a id="Discussion"></a>

## Discussion

The value for [batteryState](batterystate-swift.property.md) is one of the constants in [UIDevice.BatteryState](batterystate-swift.enum.md).

If battery monitoring is not enabled, the value of this property is [UIDevice.BatteryState.unknown](batterystate-swift.enum/unknown.md).

## See Also

### Getting the device battery state

- [batteryLevel](batterylevel.md): The battery charge level for the device.
- [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [UIDevice.BatteryState](batterystate-swift.enum.md): Constants that describe the battery power state of the device.

# batteryState (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The battery state for the device.

## Declaration

```objectivec
@property (nonatomic, readonly) UIDeviceBatteryState batteryState;
```

<a id="Discussion"></a>

## Discussion

The value for [batteryState](batterystate-swift.property.md) is one of the constants in [UIDeviceBatteryState](batterystate-swift.enum.md).

If battery monitoring is not enabled, the value of this property is [UIDeviceBatteryStateUnknown](batterystate-swift.enum/unknown.md).

## See Also

### Getting the device battery state

- [batteryLevel](batterylevel.md): The battery charge level for the device.
- [batteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [UIDeviceBatteryState](batterystate-swift.enum.md): Constants that describe the battery power state of the device.
