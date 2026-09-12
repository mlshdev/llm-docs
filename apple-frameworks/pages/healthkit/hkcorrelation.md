> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelation](https://developer.apple.com/documentation/healthkit/hkcorrelation)

# HKCorrelation (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A sample that groups multiple related samples into a single entry.

## Declaration

```swift
class HKCorrelation
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

HealthKit uses correlations to represent both blood pressure and food.

- Blood pressure correlations always include two quantity samples, representing the systolic and diastolic values.
- Food correlations can contain a wide range of dietary information about the food, including information about the fat, protein, carbohydrates, energy, and vitamins consumed.

In general, a food correlation should include at least a [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) sample. You can also add nutritional quantity samples for any other items you want to track. Use the [HKMetadataKeyFoodType](hkmetadatakeyfoodtype.md) key to indicate the food’s name.

The [HKCorrelation](hkcorrelation.md) class is a concrete subclass of the [HKSample](hksample.md) class. Correlations are immutable: You set the correlation’s properties when the object is first created, and they cannot change.

<a id="Extend-Correlation-Samples"></a>

### Extend Correlation Samples

As with many HealthKit classes, don’t subclass the [HKCorrelation](hkcorrelation.md) class. You can extend the correlation class by adding metadata with custom keys as appropriate for your app.

For more information, see the [init(type:start:end:objects:metadata:)](hkcorrelation/init%28type_start_end_objects_metadata_%29.md) method.

## Topics

### Creating Correlations

- [init(type:start:end:objects:)](hkcorrelation/init%28type_start_end_objects_%29.md): Instantiates and returns a new correlation instance.
- [init(type:start:end:objects:metadata:)](hkcorrelation/init%28type_start_end_objects_metadata_%29.md): Instantiates and returns a new correlation instance with the provided metadata.
- [init(type:start:end:objects:device:metadata:)](hkcorrelation/init%28type_start_end_objects_device_metadata_%29.md): Instantiates and returns a new correlation instance with the provided device and metadata.

### Getting Correlation Data

- [correlationType](hkcorrelation/correlationtype.md): The type for this correlation.
- [objects](hkcorrelation/objects.md): The set of sample objects that make up the correlation.
- [objects(for:)](hkcorrelation/objects%28for_%29.md): Returns a set containing all the objects of the specified type in the correlation.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCorrelation](hkpredicatekeypathcorrelation.md): The key path for accessing the object’s correlation inside a predicate format string.

### Initializers

- [init(type:startDate:endDate:objects:)](hkcorrelation/init%28type_startdate_enddate_objects_%29.md)
- [init(type:startDate:endDate:objects:device:metadata:)](hkcorrelation/init%28type_startdate_enddate_objects_device_metadata_%29.md)
- [init(type:startDate:endDate:objects:metadata:)](hkcorrelation/init%28type_startdate_enddate_objects_metadata_%29.md)

## Relationships

### Inherits From

- [HKSample](hksample.md)

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

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.

# HKCorrelation (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A sample that groups multiple related samples into a single entry.

## Declaration

```objectivec
@interface HKCorrelation : HKSample
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

HealthKit uses correlations to represent both blood pressure and food.

- Blood pressure correlations always include two quantity samples, representing the systolic and diastolic values.
- Food correlations can contain a wide range of dietary information about the food, including information about the fat, protein, carbohydrates, energy, and vitamins consumed.

In general, a food correlation should include at least a [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) sample. You can also add nutritional quantity samples for any other items you want to track. Use the [HKMetadataKeyFoodType](hkmetadatakeyfoodtype.md) key to indicate the food’s name.

The [HKCorrelation](hkcorrelation.md) class is a concrete subclass of the [HKSample](hksample.md) class. Correlations are immutable: You set the correlation’s properties when the object is first created, and they cannot change.

<a id="Extend-Correlation-Samples"></a>

### Extend Correlation Samples

As with many HealthKit classes, don’t subclass the [HKCorrelation](hkcorrelation.md) class. You can extend the correlation class by adding metadata with custom keys as appropriate for your app.

For more information, see the [correlationWithType:startDate:endDate:objects:metadata:](hkcorrelation/init%28type_start_end_objects_metadata_%29.md) method.

## Topics

### Creating Correlations

- [correlationWithType:startDate:endDate:objects:](hkcorrelation/init%28type_start_end_objects_%29.md): Instantiates and returns a new correlation instance.
- [correlationWithType:startDate:endDate:objects:metadata:](hkcorrelation/init%28type_start_end_objects_metadata_%29.md): Instantiates and returns a new correlation instance with the provided metadata.
- [correlationWithType:startDate:endDate:objects:device:metadata:](hkcorrelation/init%28type_start_end_objects_device_metadata_%29.md): Instantiates and returns a new correlation instance with the provided device and metadata.

### Getting Correlation Data

- [correlationType](hkcorrelation/correlationtype.md): The type for this correlation.
- [objects](hkcorrelation/objects.md): The set of sample objects that make up the correlation.
- [objectsForType:](hkcorrelation/objects%28for_%29.md): Returns a set containing all the objects of the specified type in the correlation.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathCorrelation](hkpredicatekeypathcorrelation.md): The key path for accessing the object’s correlation inside a predicate format string.

## Relationships

### Inherits From

- [HKSample](hksample.md)

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.
