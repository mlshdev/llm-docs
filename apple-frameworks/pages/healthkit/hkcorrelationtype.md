> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelationtype](https://developer.apple.com/documentation/healthkit/hkcorrelationtype)

# HKCorrelationType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A type that identifies samples that group multiple subsamples.

## Declaration

```swift
class HKCorrelationType
```

<a id="overview"></a>

## Overview

The [HKCorrelationType](hkcorrelationtype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create a correlation type instance, use the object type’s [correlationType(forIdentifier:)](hkobjecttype/correlationtype%28foridentifier_%29.md) conveniance method.

Use correlation types to:

- Request permission to read or write matching quantity samples.
- Create and share matching quantity samples.
- Query for matching quantity samples.

HealthKit provides two correlation types: blood pressure and food.

<a id="Using-Correlation-Types"></a>

### Using Correlation Types

As with many HealthKit classes, don’t subclass correlation types.

This class reuses the same instance whenever possible. Letting multiple queries share the same workout type helps reduce the overall memory usage.

## Topics

### Creating Correlation Types

- [init(\_:)](hkcorrelationtype/init%28__%29.md): Creates a correlation type using the provided identifier.

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

- [HKCorrelationTypeIdentifier](hkcorrelationtypeidentifier.md): The identifiers that create correlation type objects.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKCorrelationType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A type that identifies samples that group multiple subsamples.

## Declaration

```objectivec
@interface HKCorrelationType : HKSampleType
```

<a id="overview"></a>

## Overview

The [HKCorrelationType](hkcorrelationtype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create a correlation type instance, use the object type’s [correlationTypeForIdentifier:](hkobjecttype/correlationtype%28foridentifier_%29.md) conveniance method.

Use correlation types to:

- Request permission to read or write matching quantity samples.
- Create and share matching quantity samples.
- Query for matching quantity samples.

HealthKit provides two correlation types: blood pressure and food.

<a id="Using-Correlation-Types"></a>

### Using Correlation Types

As with many HealthKit classes, don’t subclass correlation types.

This class reuses the same instance whenever possible. Letting multiple queries share the same workout type helps reduce the overall memory usage.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Related Documentation

- [HKCorrelationTypeIdentifier](hkcorrelationtypeidentifier.md): The identifiers that create correlation type objects.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
