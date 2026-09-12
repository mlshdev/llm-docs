> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogramtype](https://developer.apple.com/documentation/healthkit/hkelectrocardiogramtype)

# HKElectrocardiogramType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A type that identifies samples containing electrocardiogram data.

## Declaration

```swift
class HKElectrocardiogramType
```

<a id="overview"></a>

## Overview

The [HKElectrocardiogramType](hkelectrocardiogramtype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create an electrocardiogram type instance, use the object type’s [electrocardiogramType()](hkobjecttype/electrocardiogramtype%28%29.md) convenience method.

Use the electrocardiogram type to:

- Request permission to read electrocardiogram samples
- Query for electrocardiogram samples

Electrocardiogram samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new electrocardiogram samples to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Heart \> Electrocardiograms (ECG) \> Add Data.

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
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKElectrocardiogramType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A type that identifies samples containing electrocardiogram data.

## Declaration

```objectivec
@interface HKElectrocardiogramType : HKSampleType
```

<a id="overview"></a>

## Overview

The [HKElectrocardiogramType](hkelectrocardiogramtype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create an electrocardiogram type instance, use the object type’s [electrocardiogramType](hkobjecttype/electrocardiogramtype%28%29.md) convenience method.

Use the electrocardiogram type to:

- Request permission to read electrocardiogram samples
- Query for electrocardiogram samples

Electrocardiogram samples are read-only. You can request permission to read the samples using this identifier, but you can’t request authorization to share them. This means you can’t save new electrocardiogram samples to the HealthKit store. To add test data in iOS Simulator, open the Health app and select Browse \> Heart \> Electrocardiograms (ECG) \> Add Data.

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
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
