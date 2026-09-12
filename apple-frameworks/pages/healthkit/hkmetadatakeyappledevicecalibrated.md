> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyappledevicecalibrated](https://developer.apple.com/documentation/healthkit/hkmetadatakeyappledevicecalibrated)

# HKMetadataKeyAppleDeviceCalibrated (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

## Declaration

```swift
let HKMetadataKeyAppleDeviceCalibrated: String
```

<a id="Discussion"></a>

## Discussion

This key takes a Boolean value. If it’s [true](https://developer.apple.com/documentation/swift/true), the system has enough high-quality data to make an accurate estimate. If it’s [false](https://developer.apple.com/documentation/swift/false), the system provides an estimate based on data that may be less accurate.

The key is read-only.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.

# HKMetadataKeyAppleDeviceCalibrated (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyAppleDeviceCalibrated;
```

<a id="Discussion"></a>

## Discussion

This key takes a Boolean value. If it’s [true](https://developer.apple.com/documentation/swift/true), the system has enough high-quality data to make an accurate estimate. If it’s [false](https://developer.apple.com/documentation/swift/false), the system provides an estimate based on data that may be less accurate.

The key is read-only.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
