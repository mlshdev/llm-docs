> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyudiproductionidentifier](https://developer.apple.com/documentation/healthkit/hkmetadatakeyudiproductionidentifier)

# HKMetadataKeyUDIProductionIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The production identifier portion of a device’s UDI (unique device identifier).

## Declaration

```swift
let HKMetadataKeyUDIProductionIdentifier: String
```

<a id="Discussion"></a>

## Discussion

Although the production identifier is part of a device’s UDI, it is not saved in the FDA’s GUDID (Globally Unique Device Identifier Database), and its use in HealthKit is now discouraged to protect user privacy. Apps that need this information should store it outside the HealthKit store.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

# HKMetadataKeyUDIProductionIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The production identifier portion of a device’s UDI (unique device identifier).

## Declaration

```objectivec
extern NSString * const HKMetadataKeyUDIProductionIdentifier;
```

<a id="Discussion"></a>

## Discussion

Although the production identifier is part of a device’s UDI, it is not saved in the FDA’s GUDID (Globally Unique Device Identifier Database), and its use in HealthKit is now discouraged to protect user privacy. Apps that need this information should store it outside the HealthKit store.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIDeviceIdentifier](hkmetadatakeyudideviceidentifier.md): The device identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.
