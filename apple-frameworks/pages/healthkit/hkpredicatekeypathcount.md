> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkpredicatekeypathcount](https://developer.apple.com/documentation/healthkit/hkpredicatekeypathcount)

# HKPredicateKeyPathCount (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key path for the sample’s count.

## Declaration

```swift
let HKPredicateKeyPathCount: String
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Variables

- [bleedingAfterPregnancy](hkcategorytypeidentifier/bleedingafterpregnancy.md): A category type that records bleeding after pregnancy as a symptom.
- [bleedingDuringPregnancy](hkcategorytypeidentifier/bleedingduringpregnancy.md): A category type that records bleeding during pregnancy as a symptom.
- [sleepApneaEvent](hkcategorytypeidentifier/sleepapneaevent.md)
- [HKDevicePropertyKeyFirmwareVersion](hkdevicepropertykeyfirmwareversion.md): The device’s firmware version.
- [HKDevicePropertyKeyHardwareVersion](hkdevicepropertykeyhardwareversion.md): The device’s hardware version.
- [HKDevicePropertyKeyLocalIdentifier](hkdevicepropertykeylocalidentifier.md): A unique identifier for the device on the hardware running the app. For more information, see [localIdentifier](hkdevice/localidentifier.md).
- [HKDevicePropertyKeyManufacturer](hkdevicepropertykeymanufacturer.md): The device’s manufacturer.
- [HKDevicePropertyKeyModel](hkdevicepropertykeymodel.md): The device’s model.
- [HKDevicePropertyKeyName](hkdevicepropertykeyname.md): The device’s name.
- [HKDevicePropertyKeySoftwareVersion](hkdevicepropertykeysoftwareversion.md): The device’s software version.
- [HKDevicePropertyKeyUDIDeviceIdentifier](hkdevicepropertykeyudideviceidentifier.md): The device’s UDI Device Identifier.
- [GAD7](hkscoredassessmenttypeidentifier/gad7.md)
- [PHQ9](hkscoredassessmenttypeidentifier/phq9.md)
- [HKSourceRevisionAnyOperatingSystem](hksourcerevisionanyoperatingsystem.md): A constant that matches any operating system.
- [HKSourceRevisionAnyProductType](hksourcerevisionanyproducttype.md): A constant that matches any product type.

# HKPredicateKeyPathCount (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key path for the sample’s count.

## Declaration

```objectivec
extern NSString * const HKPredicateKeyPathCount;
```

<a id="Discussion"></a>

## Discussion

Use this constant whenever you want to include a sample’s quantity in a predicate format string. Add a `%K` placeholder to the format string, and then pass this constant as an argument.

## See Also

### Variables

- [HKCategoryTypeIdentifierBleedingAfterPregnancy](hkcategorytypeidentifier/bleedingafterpregnancy.md): A category type that records bleeding after pregnancy as a symptom.
- [HKCategoryTypeIdentifierBleedingDuringPregnancy](hkcategorytypeidentifier/bleedingduringpregnancy.md): A category type that records bleeding during pregnancy as a symptom.
- [HKCategoryTypeIdentifierSleepApneaEvent](hkcategorytypeidentifier/sleepapneaevent.md)
- [HKDevicePropertyKeyFirmwareVersion](hkdevicepropertykeyfirmwareversion.md): The device’s firmware version.
- [HKDevicePropertyKeyHardwareVersion](hkdevicepropertykeyhardwareversion.md): The device’s hardware version.
- [HKDevicePropertyKeyLocalIdentifier](hkdevicepropertykeylocalidentifier.md): A unique identifier for the device on the hardware running the app. For more information, see [localIdentifier](hkdevice/localidentifier.md).
- [HKDevicePropertyKeyManufacturer](hkdevicepropertykeymanufacturer.md): The device’s manufacturer.
- [HKDevicePropertyKeyModel](hkdevicepropertykeymodel.md): The device’s model.
- [HKDevicePropertyKeyName](hkdevicepropertykeyname.md): The device’s name.
- [HKDevicePropertyKeySoftwareVersion](hkdevicepropertykeysoftwareversion.md): The device’s software version.
- [HKDevicePropertyKeyUDIDeviceIdentifier](hkdevicepropertykeyudideviceidentifier.md): The device’s UDI Device Identifier.
- [HKScoredAssessmentTypeIdentifierGAD7](hkscoredassessmenttypeidentifier/gad7.md)
- [HKScoredAssessmentTypeIdentifierPHQ9](hkscoredassessmenttypeidentifier/phq9.md)
- [HKSourceRevisionAnyOperatingSystem](hksourcerevisionanyoperatingsystem.md): A constant that matches any operating system.
- [HKSourceRevisionAnyProductType](hksourcerevisionanyproducttype.md): A constant that matches any product type.
