> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdeviceplacementside](https://developer.apple.com/documentation/healthkit/hkdeviceplacementside)

# HKDevicePlacementSide (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Values that indicate the placement of the device that measured a sample.

## Declaration

```swift
enum HKDevicePlacementSide
```

## Topics

### Placements

- [HKDevicePlacementSide.central](hkdeviceplacementside/central.md): A device predominately located near the center of the body.
- [HKDevicePlacementSide.left](hkdeviceplacementside/left.md): A device predominately located on the left side.
- [HKDevicePlacementSide.right](hkdeviceplacementside/right.md): A device predominately located on the right side.
- [HKDevicePlacementSide.unknown](hkdeviceplacementside/unknown.md): The system couldn’t determine the device’s placement.

### Initializers

- [init(rawValue:)](hkdeviceplacementside/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

# HKDevicePlacementSide (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Values that indicate the placement of the device that measured a sample.

## Declaration

```objectivec
enum HKDevicePlacementSide : NSInteger;
```

## Topics

### Placements

- [HKDevicePlacementSideCentral](hkdeviceplacementside/central.md): A device predominately located near the center of the body.
- [HKDevicePlacementSideLeft](hkdeviceplacementside/left.md): A device predominately located on the left side.
- [HKDevicePlacementSideRight](hkdeviceplacementside/right.md): A device predominately located on the right side.
- [HKDevicePlacementSideUnknown](hkdeviceplacementside/unknown.md): The system couldn’t determine the device’s placement.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.
