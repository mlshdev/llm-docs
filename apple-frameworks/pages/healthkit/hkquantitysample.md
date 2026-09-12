> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitysample](https://developer.apple.com/documentation/healthkit/hkquantitysample)

# HKQuantitySample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A sample that represents a quantity, including the value and the units.

## Declaration

```swift
class HKQuantitySample
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

A quantity sample contains one or more [HKQuantity](hkquantity.md) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. For example, you can use quantity samples to record the user’s height, the user’s current heart rate, or the number of calories in a hamburger. HealthKit provides a wide range of quantity types, letting you track many different health and fitness features.

The [HKQuantitySample](hkquantitysample.md) class is a subclass of the [HKSample](hksample.md) class. Quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

In iOS 13 and later and watchOS 6 and later, [HKQuantitySample](hkquantitysample.md) is an abstract superclass for the [HKCumulativeQuantitySample](hkcumulativequantitysample.md) and [HKDiscreteQuantitySample](hkdiscretequantitysample.md) concrete subclasses. The system automatically selects the correct subclass based on the [HKQuantityType](hkquantitytype.md) object used to create the sample.

<a id="Extend-Quantity-Samples"></a>

### Extend Quantity Samples

Like many HealthKit classes, you should not subclass the [HKQuantitySample](hkquantitysample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [init(type:quantity:start:end:metadata:)](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md).

## Topics

### Creating Quantity Samples

- [init(type:quantity:start:end:)](hkquantitysample/init%28type_quantity_start_end_%29.md): Returns a sample containing a numeric measurement.
- [init(type:quantity:start:end:metadata:)](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md): Returns a sample containing a numeric measurement with the provided metadata.
- [init(type:quantity:start:end:device:metadata:)](hkquantitysample/init%28type_quantity_start_end_device_metadata_%29.md): Returns a sample containing a numeric measurement with the provided device and metadata.

### Getting Property Data

- [quantity](hkquantitysample/quantity.md): The quantity for this sample.
- [count](hkquantitysample/count.md): The number of quantities contained in this sample.
- [quantityType](hkquantitysample/quantitytype.md): The quantity type for this sample.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathQuantity](hkpredicatekeypathquantity.md): The key path for accessing the sample’s quantity.
- [HKPredicateKeyPathCount](hkpredicatekeypathcount.md): A key path for the sample’s count.

### Initializers

- [init(type:quantity:startDate:endDate:)](hkquantitysample/init%28type_quantity_startdate_enddate_%29.md)
- [init(type:quantity:startDate:endDate:device:metadata:)](hkquantitysample/init%28type_quantity_startdate_enddate_device_metadata_%29.md)
- [init(type:quantity:startDate:endDate:metadata:)](hkquantitysample/init%28type_quantity_startdate_enddate_metadata_%29.md)

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Inherited By

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md)
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md)

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
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.

# HKQuantitySample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A sample that represents a quantity, including the value and the units.

## Declaration

```objectivec
@interface HKQuantitySample : HKSample
```

## Mentioned In

- [About the HealthKit framework](about-the-healthkit-framework.md)
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

A quantity sample contains one or more [HKQuantity](hkquantity.md) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. For example, you can use quantity samples to record the user’s height, the user’s current heart rate, or the number of calories in a hamburger. HealthKit provides a wide range of quantity types, letting you track many different health and fitness features.

The [HKQuantitySample](hkquantitysample.md) class is a subclass of the [HKSample](hksample.md) class. Quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

In iOS 13 and later and watchOS 6 and later, [HKQuantitySample](hkquantitysample.md) is an abstract superclass for the [HKCumulativeQuantitySample](hkcumulativequantitysample.md) and [HKDiscreteQuantitySample](hkdiscretequantitysample.md) concrete subclasses. The system automatically selects the correct subclass based on the [HKQuantityType](hkquantitytype.md) object used to create the sample.

<a id="Extend-Quantity-Samples"></a>

### Extend Quantity Samples

Like many HealthKit classes, you should not subclass the [HKQuantitySample](hkquantitysample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [quantitySampleWithType:quantity:startDate:endDate:metadata:](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md).

## Topics

### Creating Quantity Samples

- [quantitySampleWithType:quantity:startDate:endDate:](hkquantitysample/init%28type_quantity_start_end_%29.md): Returns a sample containing a numeric measurement.
- [quantitySampleWithType:quantity:startDate:endDate:metadata:](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md): Returns a sample containing a numeric measurement with the provided metadata.
- [quantitySampleWithType:quantity:startDate:endDate:device:metadata:](hkquantitysample/init%28type_quantity_start_end_device_metadata_%29.md): Returns a sample containing a numeric measurement with the provided device and metadata.

### Getting Property Data

- [quantity](hkquantitysample/quantity.md): The quantity for this sample.
- [count](hkquantitysample/count.md): The number of quantities contained in this sample.
- [quantityType](hkquantitysample/quantitytype.md): The quantity type for this sample.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathQuantity](hkpredicatekeypathquantity.md): The key path for accessing the sample’s quantity.
- [HKPredicateKeyPathCount](hkpredicatekeypathcount.md): A key path for the sample’s count.

## Relationships

### Inherits From

- [HKSample](hksample.md)

### Inherited By

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md)
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md)

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.
