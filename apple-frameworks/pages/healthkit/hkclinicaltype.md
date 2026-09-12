> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicaltype](https://developer.apple.com/documentation/healthkit/hkclinicaltype)

# HKClinicalType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A type that identifies samples that contain clinical record data.

## Declaration

```swift
class HKClinicalType
```

## Topics

### Creating Clinical Types

- [init(\_:)](hkclinicaltype/init%28__%29.md): Creates a clinical type using the provided identifier.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [allergyRecord](hkclinicaltypeidentifier/allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [conditionRecord](hkclinicaltypeidentifier/conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [immunizationRecord](hkclinicaltypeidentifier/immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [labResultRecord](hkclinicaltypeidentifier/labresultrecord.md): A type identifier for records of lab results.
- [medicationRecord](hkclinicaltypeidentifier/medicationrecord.md): A type identifier for records of medication.
- [procedureRecord](hkclinicaltypeidentifier/procedurerecord.md): A type identifier for records of procedures.
- [vitalSignRecord](hkclinicaltypeidentifier/vitalsignrecord.md): A type identifier for records of vital signs.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKClinicalType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 5.0+

A type that identifies samples that contain clinical record data.

## Declaration

```objectivec
@interface HKClinicalType : HKSampleType
```

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Related Documentation

- [HKClinicalRecord](hkclinicalrecord.md): A sample that stores a clinical record.
- [HKClinicalTypeIdentifierAllergyRecord](hkclinicaltypeidentifier/allergyrecord.md): A type identifier for records of allergic or intolerant reactions.
- [HKClinicalTypeIdentifierConditionRecord](hkclinicaltypeidentifier/conditionrecord.md): A type identifier for records of a condition, problem, diagnosis, or other event.
- [HKClinicalTypeIdentifierImmunizationRecord](hkclinicaltypeidentifier/immunizationrecord.md): A type identifier for records of the current or historical administration of vaccines.
- [HKClinicalTypeIdentifierLabResultRecord](hkclinicaltypeidentifier/labresultrecord.md): A type identifier for records of lab results.
- [HKClinicalTypeIdentifierMedicationRecord](hkclinicaltypeidentifier/medicationrecord.md): A type identifier for records of medication.
- [HKClinicalTypeIdentifierProcedureRecord](hkclinicaltypeidentifier/procedurerecord.md): A type identifier for records of procedures.
- [HKClinicalTypeIdentifierVitalSignRecord](hkclinicaltypeidentifier/vitalsignrecord.md): A type identifier for records of vital signs.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
