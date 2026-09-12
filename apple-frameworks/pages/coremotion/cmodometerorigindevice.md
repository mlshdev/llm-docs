> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmodometerorigindevice](https://developer.apple.com/documentation/coremotion/cmodometerorigindevice)

# CMOdometerOriginDevice (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 10.15+ · visionOS 1.0+ · watchOS 8.4+

The device that the odometer sample originates from.

## Declaration

```swift
enum CMOdometerOriginDevice
```

## Topics

### Device origins

- [CMOdometerOriginDevice.unknown](cmodometerorigindevice/unknown.md): The origin of the odometer sample is unknown.
- [CMOdometerOriginDevice.local](cmodometerorigindevice/local.md): The origin of the odometer sample comes from the same device that requests the sample.
- [CMOdometerOriginDevice.remote](cmodometerorigindevice/remote.md): The origin of the odometer sample comes from a device that’s paired with the local device.

### Initializers

- [init(rawValue:)](cmodometerorigindevice/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the device

- [originDevice](cmodometerdata/origindevice.md): The device that measures the data.

# CMOdometerOriginDevice (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 10.15+ · visionOS 1.0+ · watchOS 8.4+

The device that the odometer sample originates from.

## Declaration

```objectivec
enum CMOdometerOriginDevice : NSInteger;
```

## Topics

### Device origins

- [CMOdometerOriginDeviceUnknown](cmodometerorigindevice/unknown.md): The origin of the odometer sample is unknown.
- [CMOdometerOriginDeviceLocal](cmodometerorigindevice/local.md): The origin of the odometer sample comes from the same device that requests the sample.
- [CMOdometerOriginDeviceRemote](cmodometerorigindevice/remote.md): The origin of the odometer sample comes from a device that’s paired with the local device.

## See Also

### Getting the device

- [originDevice](cmodometerdata/origindevice.md): The device that measures the data.
