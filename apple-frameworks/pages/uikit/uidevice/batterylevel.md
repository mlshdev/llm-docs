> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/batterylevel](https://developer.apple.com/documentation/uikit/uidevice/batterylevel)

# batteryLevel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The battery charge level for the device.

## Declaration

```swift
var batteryLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

Battery level ranges from 0.0 (fully discharged) to 1.0 (100% charged). Before accessing this property, ensure that battery monitoring is enabled.

If battery monitoring is not enabled, battery state is [UIDevice.BatteryState.unknown](batterystate-swift.enum/unknown.md) and the value of this property is –1.0.

## See Also

### Getting the device battery state

- [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [batteryState](batterystate-swift.property.md): The battery state for the device.
- [UIDevice.BatteryState](batterystate-swift.enum.md): Constants that describe the battery power state of the device.

# batteryLevel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The battery charge level for the device.

## Declaration

```objectivec
@property (nonatomic, readonly) float batteryLevel;
```

<a id="Discussion"></a>

## Discussion

Battery level ranges from 0.0 (fully discharged) to 1.0 (100% charged). Before accessing this property, ensure that battery monitoring is enabled.

If battery monitoring is not enabled, battery state is [UIDeviceBatteryStateUnknown](batterystate-swift.enum/unknown.md) and the value of this property is –1.0.

## See Also

### Getting the device battery state

- [batteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [batteryState](batterystate-swift.property.md): The battery state for the device.
- [UIDeviceBatteryState](batterystate-swift.enum.md): Constants that describe the battery power state of the device.
