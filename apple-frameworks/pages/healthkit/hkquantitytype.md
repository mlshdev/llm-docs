> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytype](https://developer.apple.com/documentation/healthkit/hkquantitytype)

# HKQuantityType (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A type that identifies samples that store numerical values.

## Declaration

```swift
class HKQuantityType
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

The [HKQuantityType](hkquantitytype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create a quantity type instance, use the object type’s [quantityType(forIdentifier:)](hkobjecttype/quantitytype%28foridentifier_%29.md) convenience method.

Use quantity types to:

- Request permission to read or write matching quantity samples.
- Create and share matching quantity samples.
- Query for matching quantity samples.

## Topics

### Creating Quantity Types

- [init(\_:)](hkquantitytype/init%28__%29.md): Creates a quantity type using the provided identifier.

### Accessing Quantity Type Data

- [aggregationStyle](hkquantitytype/aggregationstyle.md): The aggregation style for the given quantity type.
- [HKQuantityAggregationStyle](hkquantityaggregationstyle.md): Constant values that describe how quantities can be aggregated over time.
- [is(compatibleWith:)](hkquantitytype/is%28compatiblewith_%29.md): Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.

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

- [HKQuantityTypeIdentifier](hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.

# HKQuantityType (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A type that identifies samples that store numerical values.

## Declaration

```objectivec
@interface HKQuantityType : HKSampleType
```

## Mentioned In

- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

The [HKQuantityType](hkquantitytype.md) class is a concrete subclass of the [HKObjectType](hkobjecttype.md) class. To create a quantity type instance, use the object type’s [quantityTypeForIdentifier:](hkobjecttype/quantitytype%28foridentifier_%29.md) convenience method.

Use quantity types to:

- Request permission to read or write matching quantity samples.
- Create and share matching quantity samples.
- Query for matching quantity samples.

## Topics

### Accessing Quantity Type Data

- [aggregationStyle](hkquantitytype/aggregationstyle.md): The aggregation style for the given quantity type.
- [HKQuantityAggregationStyle](hkquantityaggregationstyle.md): Constant values that describe how quantities can be aggregated over time.
- [isCompatibleWithUnit:](hkquantitytype/is%28compatiblewith_%29.md): Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.

## Relationships

### Inherits From

- [HKSampleType](hksampletype.md)

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.

### Object type subclasses

- [HKCharacteristicType](hkcharacteristictype.md): A type that represents data that doesn’t typically change over time.
- [HKCategoryType](hkcategorytype.md): A type that identifies samples that contain a value from a small set of possible values.
- [HKCorrelationType](hkcorrelationtype.md): A type that identifies samples that group multiple subsamples.
- [HKActivitySummaryType](hkactivitysummarytype.md): A type that identifies activity summary objects.
- [HKAudiogramSampleType](hkaudiogramsampletype.md): A type that identifies samples that contain audiogram data.
- [HKElectrocardiogramType](hkelectrocardiogramtype.md): A type that identifies samples containing electrocardiogram data.
- [HKSeriesType](hkseriestype.md): A type that indicates the data stored in a series sample.
- [HKClinicalType](hkclinicaltype.md): A type that identifies samples that contain clinical record data.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKObjectType](hkobjecttype.md): An abstract superclass with subclasses that identify a specific type of data for the HealthKit store.
- [HKSampleType](hksampletype.md): An abstract superclass for all classes that identify a specific type of sample when working with the HealthKit store.
