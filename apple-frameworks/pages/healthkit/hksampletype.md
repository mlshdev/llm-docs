> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksampletype](https://developer.apple.com/documentation/healthkit/hksampletype)

# HKSampleType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

## Declaration

```swift
class HKSampleType
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

The [HKSampleType](hksampletype.md) class is an abstract subclass of the [HKObjectType](hkobjecttype.md) class, used to represent data samples. Never instantiate an [HKSampleType](hksampletype.md) object directly. Instead, work with one of its concrete subclasses: [HKCategoryType](hkcategorytype.md), [HKCorrelationType](hkcorrelationtype.md), [HKQuantityType](hkquantitytype.md), or [HKWorkoutType](hkworkouttype.md) classes.

## Topics

### Checking the Duration Restriction

- [isMinimumDurationRestricted](hksampletype/isminimumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a minimum time interval between the start and end dates.
- [minimumAllowedDuration](hksampletype/minimumallowedduration.md): The minimum duration if the sample type has a restricted duration.
- [isMaximumDurationRestricted](hksampletype/ismaximumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a maximum time interval between the start and end dates.
- [maximumAllowedDuration](hksampletype/maximumallowedduration.md): The maximum duration if the sample type has a restricted duration.

### Checking on Recalibrating Estimates

- [allowsRecalibrationForEstimates](hksampletype/allowsrecalibrationforestimates.md): A Boolean value that indicates whether HealthKit supports recalibrating the prediction algorithm used to produce estimates for this sample type.

## Relationships

### Inherits From

- [HKObjectType](hkobjecttype.md)

### Inherited By

- [HKAudiogramSampleType](hkaudiogramsampletype.md)
- [HKCategoryType](hkcategorytype.md)
- [HKClinicalType](hkclinicaltype.md)
- [HKCorrelationType](hkcorrelationtype.md)
- [HKDocumentType](hkdocumenttype.md)
- [HKElectrocardiogramType](hkelectrocardiogramtype.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKPrescriptionType](hkprescriptiontype.md)
- [HKQuantityType](hkquantitytype.md)
- [HKScoredAssessmentType](hkscoredassessmenttype.md)
- [HKSeriesType](hkseriestype.md)
- [HKStateOfMindType](hkstateofmindtype.md)
- [HKWorkoutType](hkworkouttype.md)

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

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.

# HKSampleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

## Declaration

```objectivec
@interface HKSampleType : HKObjectType
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

The [HKSampleType](hksampletype.md) class is an abstract subclass of the [HKObjectType](hkobjecttype.md) class, used to represent data samples. Never instantiate an [HKSampleType](hksampletype.md) object directly. Instead, work with one of its concrete subclasses: [HKCategoryType](hkcategorytype.md), [HKCorrelationType](hkcorrelationtype.md), [HKQuantityType](hkquantitytype.md), or [HKWorkoutType](hkworkouttype.md) classes.

## Topics

### Checking the Duration Restriction

- [isMinimumDurationRestricted](hksampletype/isminimumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a minimum time interval between the start and end dates.
- [minimumAllowedDuration](hksampletype/minimumallowedduration.md): The minimum duration if the sample type has a restricted duration.
- [isMaximumDurationRestricted](hksampletype/ismaximumdurationrestricted.md): A Boolean value that indicates whether samples of this type have a maximum time interval between the start and end dates.
- [maximumAllowedDuration](hksampletype/maximumallowedduration.md): The maximum duration if the sample type has a restricted duration.

### Checking on Recalibrating Estimates

- [allowsRecalibrationForEstimates](hksampletype/allowsrecalibrationforestimates.md): A Boolean value that indicates whether HealthKit supports recalibrating the prediction algorithm used to produce estimates for this sample type.

## Relationships

### Inherits From

- [HKObjectType](hkobjecttype.md)

### Inherited By

- [HKAudiogramSampleType](hkaudiogramsampletype.md)
- [HKCategoryType](hkcategorytype.md)
- [HKClinicalType](hkclinicaltype.md)
- [HKCorrelationType](hkcorrelationtype.md)
- [HKDocumentType](hkdocumenttype.md)
- [HKElectrocardiogramType](hkelectrocardiogramtype.md)
- [HKMedicationDoseEventType](hkmedicationdoseeventtype.md)
- [HKPrescriptionType](hkprescriptiontype.md)
- [HKQuantityType](hkquantitytype.md)
- [HKScoredAssessmentType](hkscoredassessmenttype.md)
- [HKSeriesType](hkseriestype.md)
- [HKStateOfMindType](hkstateofmindtype.md)
- [HKWorkoutType](hkworkouttype.md)

## See Also

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
