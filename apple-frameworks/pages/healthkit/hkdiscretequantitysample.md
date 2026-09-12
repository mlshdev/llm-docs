> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdiscretequantitysample](https://developer.apple.com/documentation/healthkit/hkdiscretequantitysample)

# HKDiscreteQuantitySample (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that represents a discrete quantity.

## Declaration

```swift
class HKDiscreteQuantitySample
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)

<a id="overview"></a>

## Overview

A quantity sample contains one or more [HKQuantity](hkquantity.md) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. Use these samples to store data representing independent measurements, such as height, heart rate, or temperature.

The [HKDiscreteQuantitySample](hkdiscretequantitysample.md) class is a concrete subclass of the [HKQuantitySample](hkquantitysample.md) class. Discrete quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

<a id="Extend-Discrete-Quantity-Samples"></a>

### Extend Discrete Quantity Samples

Like many HealthKit classes, you should not subclass the [HKDiscreteQuantitySample](hkdiscretequantitysample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [init(type:quantity:start:end:metadata:)](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md).

## Topics

### Accessing Calculated Values

- [averageQuantity](hkdiscretequantitysample/averagequantity.md): The average of all quantities contained by the sample.
- [maximumQuantity](hkdiscretequantitysample/maximumquantity.md): The maximum quantity contained by the sample.
- [minimumQuantity](hkdiscretequantitysample/minimumquantity.md): The minimum value contained by the sample.
- [mostRecentQuantity](hkdiscretequantitysample/mostrecentquantity.md): The most recent quantity contained by the sample.
- [mostRecentQuantityDateInterval](hkdiscretequantitysample/mostrecentquantitydateinterval.md): The date interval for the most recent quantity contained by the sample.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathMin](hkpredicatekeypathmin.md): The key path for the sample’s minimum quantity.
- [HKPredicateKeyPathAverage](hkpredicatekeypathaverage.md): The key path for the sample’s average quantity.
- [HKPredicateKeyPathMax](hkpredicatekeypathmax.md): The key path for the sample’s maximum quantity.
- [HKPredicateKeyPathMostRecent](hkpredicatekeypathmostrecent.md): The key path for the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentStartDate](hkpredicatekeypathmostrecentstartdate.md): The key path for the start date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentEndDate](hkpredicatekeypathmostrecentenddate.md): The key path for the end date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentDuration](hkpredicatekeypathmostrecentduration.md): A key path for the duration of the sample’s most recent quantity.

## Relationships

### Inherits From

- [HKQuantitySample](hkquantitysample.md)

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
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.

# HKDiscreteQuantitySample (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A sample that represents a discrete quantity.

## Declaration

```objectivec
@interface HKDiscreteQuantitySample : HKQuantitySample
```

## Mentioned In

- [Accessing condensed workout samples](accessing-condensed-workout-samples.md)

<a id="overview"></a>

## Overview

A quantity sample contains one or more [HKQuantity](hkquantity.md) objects. Each quantity represents a single piece of data with a single numeric value and the value’s associated units. Use these samples to store data representing independent measurements, such as height, heart rate, or temperature.

The [HKDiscreteQuantitySample](hkdiscretequantitysample.md) class is a concrete subclass of the [HKQuantitySample](hkquantitysample.md) class. Discrete quantity samples are immutable; you set the sample’s properties when you create it, and they cannot change.

<a id="Extend-Discrete-Quantity-Samples"></a>

### Extend Discrete Quantity Samples

Like many HealthKit classes, you should not subclass the [HKDiscreteQuantitySample](hkdiscretequantitysample.md) class. You may extend this class by adding metadata with custom keys to save related data used by your app.

For more information, see [quantitySampleWithType:quantity:startDate:endDate:metadata:](hkquantitysample/init%28type_quantity_start_end_metadata_%29.md).

## Topics

### Accessing Calculated Values

- [averageQuantity](hkdiscretequantitysample/averagequantity.md): The average of all quantities contained by the sample.
- [maximumQuantity](hkdiscretequantitysample/maximumquantity.md): The maximum quantity contained by the sample.
- [minimumQuantity](hkdiscretequantitysample/minimumquantity.md): The minimum value contained by the sample.
- [mostRecentQuantity](hkdiscretequantitysample/mostrecentquantity.md): The most recent quantity contained by the sample.
- [mostRecentQuantityDateInterval](hkdiscretequantitysample/mostrecentquantitydateinterval.md): The date interval for the most recent quantity contained by the sample.

### Specifying Predicate Key Paths

- [HKPredicateKeyPathMin](hkpredicatekeypathmin.md): The key path for the sample’s minimum quantity.
- [HKPredicateKeyPathAverage](hkpredicatekeypathaverage.md): The key path for the sample’s average quantity.
- [HKPredicateKeyPathMax](hkpredicatekeypathmax.md): The key path for the sample’s maximum quantity.
- [HKPredicateKeyPathMostRecent](hkpredicatekeypathmostrecent.md): The key path for the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentStartDate](hkpredicatekeypathmostrecentstartdate.md): The key path for the start date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentEndDate](hkpredicatekeypathmostrecentenddate.md): The key path for the end date of the sample’s most recent quantity.
- [HKPredicateKeyPathMostRecentDuration](hkpredicatekeypathmostrecentduration.md): A key path for the duration of the sample’s most recent quantity.

## Relationships

### Inherits From

- [HKQuantitySample](hkquantitysample.md)

## See Also

### Basic samples

- [HKCumulativeQuantitySample](hkcumulativequantitysample.md): A sample that represents a cumulative quantity.
- [HKQuantitySample](hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKCategorySample](hkcategorysample.md): A sample with values from a short list of possible values.
- [HKCorrelation](hkcorrelation.md): A sample that groups multiple related samples into a single entry.
- [Units and quantities](units-and-quantities.md): Objects used to specify a quantity for a given unit, and to convert between units.
- [Metadata Keys](metadata-keys.md): Constants used to add metadata to objects stored in HealthKit.
