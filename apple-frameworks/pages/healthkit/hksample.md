> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksample](https://developer.apple.com/documentation/healthkit/hksample)

# HKSample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A HealthKit sample represents a piece of data associated with a start and end time.

## Declaration

```swift
class HKSample
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)

<a id="overview"></a>

## Overview

The `HKSample` class is an abstract class. You should never instantiate a `HKSample` object directly. Instead, you always work with one of its concrete subclasses: [HKCategorySample](hkcategorysample.md), [HKQuantitySample](hkquantitysample.md), [HKCorrelation](hkcorrelation.md), or [HKWorkout](hkworkout.md) classes.

HealthKit samples are all immutable: You set the sample’s properties when you create it, and they cannot change.

If the sample represents data over a duration, the start time must be earlier than the end time. If the sample represents data at a particular instant, the start and end times can be the same.

## Topics

### Accessing the Sample’s Data

- [startDate](hksample/startdate.md): The sample’s start date.
- [endDate](hksample/enddate.md): The sample’s end date.
- [hasUndeterminedDuration](hksample/hasundeterminedduration.md): Indicates whether the sample has an unknown duration.
- [sampleType](hksample/sampletype.md): The sample type.

### Specifying Sort Identifiers

- [HKSampleSortIdentifierStartDate](hksamplesortidentifierstartdate.md): A constant for sorting samples based on their start date.
- [HKSampleSortIdentifierEndDate](hksamplesortidentifierenddate.md): A constant for sorting samples based on their end date.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathStartDate](hkpredicatekeypathstartdate.md): The key path for accessing the sample’s start date.
- [HKPredicateKeyPathEndDate](hkpredicatekeypathenddate.md): The key path for accessing the sample’s end date.

## Relationships

### Inherits From

- [HKObject](hkobject.md)

### Inherited By

- [HKAudiogramSample](hkaudiogramsample.md)
- [HKCategorySample](hkcategorysample.md)
- [HKClinicalRecord](hkclinicalrecord.md)
- [HKCorrelation](hkcorrelation.md)
- [HKDocumentSample](hkdocumentsample.md)
- [HKElectrocardiogram](hkelectrocardiogram.md)
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKQuantitySample](hkquantitysample.md)
- [HKScoredAssessment](hkscoredassessment.md)
- [HKSeriesSample](hkseriessample.md)
- [HKStateOfMind](hkstateofmind.md)
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md)
- [HKVisionPrescription](hkvisionprescription.md)
- [HKWorkout](hkworkout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Abstract superclasses

- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKObject](hkobject.md): A piece of data that can be stored inside the HealthKit store.

# HKSample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A HealthKit sample represents a piece of data associated with a start and end time.

## Declaration

```objectivec
@interface HKSample : HKObject
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md)

<a id="overview"></a>

## Overview

The `HKSample` class is an abstract class. You should never instantiate a `HKSample` object directly. Instead, you always work with one of its concrete subclasses: [HKCategorySample](hkcategorysample.md), [HKQuantitySample](hkquantitysample.md), [HKCorrelation](hkcorrelation.md), or [HKWorkout](hkworkout.md) classes.

HealthKit samples are all immutable: You set the sample’s properties when you create it, and they cannot change.

If the sample represents data over a duration, the start time must be earlier than the end time. If the sample represents data at a particular instant, the start and end times can be the same.

## Topics

### Accessing the Sample’s Data

- [startDate](hksample/startdate.md): The sample’s start date.
- [endDate](hksample/enddate.md): The sample’s end date.
- [hasUndeterminedDuration](hksample/hasundeterminedduration.md): Indicates whether the sample has an unknown duration.
- [sampleType](hksample/sampletype.md): The sample type.

### Specifying Sort Identifiers

- [HKSampleSortIdentifierStartDate](hksamplesortidentifierstartdate.md): A constant for sorting samples based on their start date.
- [HKSampleSortIdentifierEndDate](hksamplesortidentifierenddate.md): A constant for sorting samples based on their end date.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathStartDate](hkpredicatekeypathstartdate.md): The key path for accessing the sample’s start date.
- [HKPredicateKeyPathEndDate](hkpredicatekeypathenddate.md): The key path for accessing the sample’s end date.

## Relationships

### Inherits From

- [HKObject](hkobject.md)

### Inherited By

- [HKAudiogramSample](hkaudiogramsample.md)
- [HKCategorySample](hkcategorysample.md)
- [HKClinicalRecord](hkclinicalrecord.md)
- [HKCorrelation](hkcorrelation.md)
- [HKDocumentSample](hkdocumentsample.md)
- [HKElectrocardiogram](hkelectrocardiogram.md)
- [HKMedicationDoseEvent](hkmedicationdoseevent.md)
- [HKQuantitySample](hkquantitysample.md)
- [HKScoredAssessment](hkscoredassessment.md)
- [HKSeriesSample](hkseriessample.md)
- [HKStateOfMind](hkstateofmind.md)
- [HKVerifiableClinicalRecord](hkverifiableclinicalrecord.md)
- [HKVisionPrescription](hkvisionprescription.md)
- [HKWorkout](hkworkout.md)

## See Also

### Abstract superclasses

- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKObject](hkobject.md): A piece of data that can be stored inside the HealthKit store.
