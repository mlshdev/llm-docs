> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidevice/batterystate-swift.enum](https://developer.apple.com/documentation/uikit/uidevice/batterystate-swift.enum)

# UIDevice.BatteryState (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the battery power state of the device.

## Declaration

```swift
enum BatteryState
```

<a id="overview"></a>

## Overview

These constants are used by the [batteryState](batterystate-swift.property.md) property.

## Topics

### Constants

- [UIDevice.BatteryState.unknown](batterystate-swift.enum/unknown.md): The battery state for the device can’t be determined.
- [UIDevice.BatteryState.unplugged](batterystate-swift.enum/unplugged.md): The device isn’t plugged into power; the battery is discharging.
- [UIDevice.BatteryState.charging](batterystate-swift.enum/charging.md): The device is plugged into power and the battery is less than 100% charged.
- [UIDevice.BatteryState.full](batterystate-swift.enum/full.md): The device is plugged into power and the battery is 100% charged.

### Initializers

- [init(rawValue:)](batterystate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the device battery state

- [batteryLevel](batterylevel.md): The battery charge level for the device.
- [isBatteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [batteryState](batterystate-swift.property.md): The battery state for the device.

# UIDeviceBatteryState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that describe the battery power state of the device.

## Declaration

```objectivec
enum UIDeviceBatteryState : NSInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [batteryState](batterystate-swift.property.md) property.

## Topics

### Constants

- [UIDeviceBatteryStateUnknown](batterystate-swift.enum/unknown.md): The battery state for the device can’t be determined.
- [UIDeviceBatteryStateUnplugged](batterystate-swift.enum/unplugged.md): The device isn’t plugged into power; the battery is discharging.
- [UIDeviceBatteryStateCharging](batterystate-swift.enum/charging.md): The device is plugged into power and the battery is less than 100% charged.
- [UIDeviceBatteryStateFull](batterystate-swift.enum/full.md): The device is plugged into power and the battery is 100% charged.

## See Also

### Getting the device battery state

- [batteryLevel](batterylevel.md): The battery charge level for the device.
- [batteryMonitoringEnabled](isbatterymonitoringenabled.md): A Boolean value that indicates whether battery monitoring is enabled.
- [batteryState](batterystate-swift.property.md): The battery state for the device.
