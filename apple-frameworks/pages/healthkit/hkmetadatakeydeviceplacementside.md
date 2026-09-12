> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeydeviceplacementside](https://developer.apple.com/documentation/healthkit/hkmetadatakeydeviceplacementside)

# HKMetadataKeyDevicePlacementSide (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key for metadata indicating the placement of the device that measured a sample.

## Declaration

```swift
let HKMetadataKeyDevicePlacementSide: String
```

<a id="Discussion"></a>

## Discussion

This key takes an [NSNumber](../foundation/nsnumber.md) that contains a value from [HKDevicePlacementSide](hkdeviceplacementside.md).

For mobility samples, like [walkingSpeed](hkquantitytypeidentifier/walkingspeed.md) or [walkingDoubleSupportPercentage](hkquantitytypeidentifier/walkingdoublesupportpercentage.md), this metadata key records the placement of the device as determined by the system.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

# HKMetadataKeyDevicePlacementSide (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The key for metadata indicating the placement of the device that measured a sample.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyDevicePlacementSide;
```

<a id="Discussion"></a>

## Discussion

This key takes an [NSNumber](../foundation/nsnumber.md) that contains a value from [HKDevicePlacementSide](hkdeviceplacementside.md).

For mobility samples, like [HKQuantityTypeIdentifierWalkingSpeed](hkquantitytypeidentifier/walkingspeed.md) or [HKQuantityTypeIdentifierWalkingDoubleSupportPercentage](hkquantitytypeidentifier/walkingdoublesupportpercentage.md), this metadata key records the placement of the device as determined by the system.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.
