> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/isbatterymonitoringenabled](https://developer.apple.com/documentation/uikit/uidevice/isbatterymonitoringenabled)

# isBatteryMonitoringEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether battery monitoring is enabled.

## Declaration

```swift
var isBatteryMonitoringEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Enable battery monitoring if your app needs to be notified of changes to the battery state, or if you want to check the battery charge level.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which:

- Disables the posting of battery-related notifications
- Disables the ability to read battery charge level and battery state

## See Also

### Related Documentation

- [batteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [batteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.

### Getting the device battery state

- [batteryLevel](batterylevel.md): The battery charge level for the device.
- [batteryState](batterystate-swift.property.md): The battery state for the device.
- [UIDevice.BatteryState](batterystate-swift.enum.md): Constants that describe the battery power state of the device.

# batteryMonitoringEnabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether battery monitoring is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isBatteryMonitoringEnabled) BOOL batteryMonitoringEnabled;
```

<a id="Discussion"></a>

## Discussion

Enable battery monitoring if your app needs to be notified of changes to the battery state, or if you want to check the battery charge level.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which:

- Disables the posting of battery-related notifications
- Disables the ability to read battery charge level and battery state

## See Also

### Related Documentation

- [UIDeviceBatteryLevelDidChangeNotification](batteryleveldidchangenotification.md): A notification that posts when the battery level changes.
- [UIDeviceBatteryStateDidChangeNotification](batterystatedidchangenotification.md): A notification that posts when battery state changes.

### Getting the device battery state

- [batteryLevel](batterylevel.md): The battery charge level for the device.
- [batteryState](batterystate-swift.property.md): The battery state for the device.
- [UIDeviceBatteryState](batterystate-swift.enum.md): Constants that describe the battery power state of the device.
