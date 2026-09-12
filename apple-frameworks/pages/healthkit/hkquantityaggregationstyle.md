> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityaggregationstyle](https://developer.apple.com/documentation/healthkit/hkquantityaggregationstyle)

# HKQuantityAggregationStyle (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constant values that describe how quantities can be aggregated over time.

## Declaration

```swift
enum HKQuantityAggregationStyle
```

<a id="overview"></a>

## Overview

A quantity type’s aggregation style determines the type of statistics queries that you can perform. Discrete types support average, minimum, and maximum queries. Cumulative types support only sum queries. For more information, see [HKStatisticsQuery](hkstatisticsquery.md).

## Topics

### Aggregation Styles

- [HKQuantityAggregationStyle.cumulative](hkquantityaggregationstyle/cumulative.md): Cumulative samples that can be summed over time.
- [HKQuantityAggregationStyle.discreteArithmetic](hkquantityaggregationstyle/discretearithmetic.md): Discrete samples that can be averaged over time using an arithmetic mean.
- [HKQuantityAggregationStyle.discreteTemporallyWeighted](hkquantityaggregationstyle/discretetemporallyweighted.md): Discrete samples that can be averaged over a time interval using a temporally weighted integration function.
- [HKQuantityAggregationStyle.discreteEquivalentContinuousLevel](hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md): Discrete samples that can be combined over a time interval by computing the equivalent continuous sound level.

### Deprecated Styles

- [discrete](hkquantityaggregationstyle/discrete.md): Deprecated. Discrete samples may be averaged over time.

### Initializers

- [init(rawValue:)](hkquantityaggregationstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Quantity Type Data

- [aggregationStyle](hkquantitytype/aggregationstyle.md): The aggregation style for the given quantity type.
- [is(compatibleWith:)](hkquantitytype/is%28compatiblewith_%29.md): Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.

# HKQuantityAggregationStyle (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constant values that describe how quantities can be aggregated over time.

## Declaration

```objectivec
enum HKQuantityAggregationStyle : NSInteger;
```

<a id="overview"></a>

## Overview

A quantity type’s aggregation style determines the type of statistics queries that you can perform. Discrete types support average, minimum, and maximum queries. Cumulative types support only sum queries. For more information, see [HKStatisticsQuery](hkstatisticsquery.md).

## Topics

### Aggregation Styles

- [HKQuantityAggregationStyleCumulative](hkquantityaggregationstyle/cumulative.md): Cumulative samples that can be summed over time.
- [HKQuantityAggregationStyleDiscreteArithmetic](hkquantityaggregationstyle/discretearithmetic.md): Discrete samples that can be averaged over time using an arithmetic mean.
- [HKQuantityAggregationStyleDiscreteTemporallyWeighted](hkquantityaggregationstyle/discretetemporallyweighted.md): Discrete samples that can be averaged over a time interval using a temporally weighted integration function.
- [HKQuantityAggregationStyleDiscreteEquivalentContinuousLevel](hkquantityaggregationstyle/discreteequivalentcontinuouslevel.md): Discrete samples that can be combined over a time interval by computing the equivalent continuous sound level.

### Deprecated Styles

- [HKQuantityAggregationStyleDiscrete](hkquantityaggregationstyle/discrete.md): Deprecated. Discrete samples may be averaged over time.

## See Also

### Accessing Quantity Type Data

- [aggregationStyle](hkquantitytype/aggregationstyle.md): The aggregation style for the given quantity type.
- [isCompatibleWithUnit:](hkquantitytype/is%28compatiblewith_%29.md): Returns a Boolean value that indicates whether the quantity type is compatible with the given unit.
