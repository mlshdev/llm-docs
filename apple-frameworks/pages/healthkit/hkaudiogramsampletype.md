> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkaudiogramsampletype](https://developer.apple.com/documentation/healthkit/hkaudiogramsampletype)

# HKAudiogramSampleType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that identifies samples that contain audiogram data.

## Declaration

```swift
class HKAudiogramSampleType
```

<a id="overview"></a>

## Overview

The [HKAudiogramSampleType](hkaudiogramsampletype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create an audiogram sample type instance, use the object type’s [audiogramSampleType()](hkobjecttype/audiogramsampletype%28%29.md) convenience method.

Use audiogram sample types to:

- Request permission to read or write audiogram samples.
- Create and share audiogram samples.
- Query for audiogram samples.

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

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKAudiogramSampleType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that identifies samples that contain audiogram data.

## Declaration

```objectivec
@interface HKAudiogramSampleType : HKSampleType
```

<a id="overview"></a>

## Overview

The [HKAudiogramSampleType](hkaudiogramsampletype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create an audiogram sample type instance, use the object type’s [audiogramSampleType](hkobjecttype/audiogramsampletype%28%29.md) convenience method.

Use audiogram sample types to:

- Request permission to read or write audiogram samples.
- Create and share audiogram samples.
- Query for audiogram samples.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
