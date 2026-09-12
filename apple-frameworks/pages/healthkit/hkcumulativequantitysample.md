> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcumulativequantitysample](https://developer.apple.com/documentation/healthkit/hkcumulativequantitysample)

# HKCumulativeQuantitySample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that represents a cumulative quantity.

## Declaration

```swift
class HKCumulativeQuantitySample
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)

<a id="overview"></a>

## Overview

A quantity sample contains one or more [HKQuantity](hkquantity.md) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. Use these samples to store data that accumulates over time, such as step count, active energy burned, or walking distance.

The [HKCumulativeQuantitySample](hkcumulativequantitysample.md) class is a concrete subclass of the [HKQuantitySample](hkquantitysample.md) class. Cumulative quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

<a id="Extend-Cumulative-Quantity-Samples"></a>

### Extend Cumulative Quantity Samples

Like many HealthKit classes, you should not subclass the [HKCumulativeQuantitySample](hkcumulativequantitysample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [init(type:quantity:start:end:metadata:)](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md).

## Topics

### Accessing Calculated Data

- [sumQuantity](hkcumulativequantitysample/sumquantity.md): The sum of all the quantities contained by the sample.

## Relationships

### Inherits From

- [HKQuantitySample](hkquantitysample.md)

### Inherited By

- [HKCumulativeQuantitySeriesSample](hkcumulativequantityseriessample.md)

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

- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.

# HKCumulativeQuantitySample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that represents a cumulative quantity.

## Declaration

```objectivec
@interface HKCumulativeQuantitySample : HKQuantitySample
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)

<a id="overview"></a>

## Overview

A quantity sample contains one or more [HKQuantity](hkquantity.md) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. Use these samples to store data that accumulates over time, such as step count, active energy burned, or walking distance.

The [HKCumulativeQuantitySample](hkcumulativequantitysample.md) class is a concrete subclass of the [HKQuantitySample](hkquantitysample.md) class. Cumulative quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

<a id="Extend-Cumulative-Quantity-Samples"></a>

### Extend Cumulative Quantity Samples

Like many HealthKit classes, you should not subclass the [HKCumulativeQuantitySample](hkcumulativequantitysample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [quantitySampleWithType:quantity:startDate:endDate:metadata:](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md).

## Topics

### Accessing Calculated Data

- [sumQuantity](hkcumulativequantitysample/sumquantity.md): The sum of all the quantities contained by the sample.

## Relationships

### Inherits From

- [HKQuantitySample](hkquantitysample.md)

### Inherited By

- [HKCumulativeQuantitySeriesSample](hkcumulativequantityseriessample.md)

## See Also

### Basic samples

- [HKDiscreteQuantitySample](hkdiscretequantitysample.md): A sample that represents a discrete quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.
