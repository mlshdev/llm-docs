> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytype](https://developer.apple.com/documentation/healthkit/hkcategorytype)

# HKCategoryType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A type that identifies samples that contain a value from a small set of possible values.

## Declaration

```swift
class HKCategoryType
```

## Mentioned In

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md)

<a id="overview"></a>

## Overview

The [HKCategoryType](hkcategorytype.md) class is a concrete subclass of the HKObjectType class. To create a category type instance, use the [init(\_:)](hkcategorytype/init%28__%29.md) convenience method.  For example, the following code creates a category sample type for handwashing events.

```swift
let handwashingCategoryType = HKCategoryType(.handwashingEvent)
```

Use category types to:

- Request permission to read or write matching category samples.
- Create and share matching category samples.
- Query for matching category samples.

For a complete list of category types, refer to [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md).

## Topics

### Creating Category Types

- [init(\_:)](hkcategorytype/init%28__%29.md): Creates a category type using the provided identifier.

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

- [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKCategoryType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A type that identifies samples that contain a value from a small set of possible values.

## Declaration

```objectivec
@interface HKCategoryType : HKSampleType
```

## Mentioned In

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md)

<a id="overview"></a>

## Overview

The [HKCategoryType](hkcategorytype.md) class is a concrete subclass of the HKObjectType class. To create a category type instance, use the [init(\_:)](hkcategorytype/init%28__%29.md) convenience method.  For example, the following code creates a category sample type for handwashing events.

```swift
let handwashingCategoryType = HKCategoryType(.handwashingEvent)
```

Use category types to:

- Request permission to read or write matching category samples.
- Create and share matching category samples.
- Query for matching category samples.

For a complete list of category types, refer to [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md).

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Related Documentation

- [HKCategoryTypeIdentifier](hkcategorytypeidentifier.md): Identifiers for creating category types.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKQuantityType](hkquantitytype.md): A type that identifies samples that store numerical values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
