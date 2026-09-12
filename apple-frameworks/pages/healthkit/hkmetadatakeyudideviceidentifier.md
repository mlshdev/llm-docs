> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyudideviceidentifier](https://developer.apple.com/documentation/healthkit/hkmetadatakeyudideviceidentifier)

# HKMetadataKeyUDIDeviceIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The device identifier portion of a device’s UDI (unique device identifier).

## Declaration

```swift
let HKMetadataKeyUDIDeviceIdentifier: String
```

<a id="Discussion"></a>

## Discussion

The device identifier can be used to reference the GUDID (Globally Unique Device Identification Database).

This key takes a string value.

> **Note**

>  In iOS 9.0 and later, the use of this key is discouraged. Use the [HKDevice](hkdevice.md) class instead.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.

# HKMetadataKeyUDIDeviceIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The device identifier portion of a device’s UDI (unique device identifier).

## Declaration

```objectivec
extern NSString * const HKMetadataKeyUDIDeviceIdentifier;
```

<a id="Discussion"></a>

## Discussion

The device identifier can be used to reference the GUDID (Globally Unique Device Identification Database).

This key takes a string value.

> **Note**

>  In iOS 9.0 and later, the use of this key is discouraged. Use the [HKDevice](hkdevice.md) class instead.

## See Also

### Device Information Keys

- [HKMetadataKeyDeviceSerialNumber](hkmetadatakeydeviceserialnumber.md): The key for the serial number of the device that generated the data.
- [HKMetadataKeyUDIProductionIdentifier](hkmetadatakeyudiproductionidentifier.md): The production identifier portion of a device’s UDI (unique device identifier).
- [HKMetadataKeyDigitalSignature](hkmetadatakeydigitalsignature.md): A digital signature that can be used to validate the origin of the HealthKit object.
- [HKMetadataKeyDeviceName](hkmetadatakeydevicename.md): The name of the device that took this reading.
- [HKMetadataKeyDeviceManufacturerName](hkmetadatakeydevicemanufacturername.md): The name of the manufacturer of the device that took this reading.
- [HKMetadataKeyDevicePlacementSide](hkmetadatakeydeviceplacementside.md): The key for metadata indicating the placement of the device that measured a sample.
- [HKDevicePlacementSide](hkdeviceplacementside.md): Values that indicate the placement of the device that measured a sample.
- [HKMetadataKeyAppleDeviceCalibrated](hkmetadatakeyappledevicecalibrated.md): The key for metadata indicating whether the system had data from a sufficient amount of calibrated sensors when recording the sample.
