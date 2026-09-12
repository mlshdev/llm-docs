> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityaggregationstyle/cumulative](https://developer.apple.com/documentation/healthkit/hkquantityaggregationstyle/cumulative)

# HKQuantityAggregationStyle.cumulative (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Cumulative samples that can be summed over time.

## Declaration

```swift
case cumulative
```

<a id="Discussion"></a>

## Discussion

Use cumulative types to measure a total value over a given time period. Step count, distance, inhaler usage, nutritional information, and energy burned are all cumulative quantity types.

## See Also

### Aggregation Styles

- [HKQuantityAggregationStyle.discreteArithmetic](discretearithmetic.md): Discrete samples that can be averaged over time using an arithmetic mean.
- [HKQuantityAggregationStyle.discreteTemporallyWeighted](discretetemporallyweighted.md): Discrete samples that can be averaged over a time interval using a temporally weighted integration function.
- [HKQuantityAggregationStyle.discreteEquivalentContinuousLevel](discreteequivalentcontinuouslevel.md): Discrete samples that can be combined over a time interval by computing the equivalent continuous sound level.

# HKQuantityAggregationStyleCumulative (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Cumulative samples that can be summed over time.

## Declaration

```objectivec
HKQuantityAggregationStyleCumulative
```

<a id="Discussion"></a>

## Discussion

Use cumulative types to measure a total value over a given time period. Step count, distance, inhaler usage, nutritional information, and energy burned are all cumulative quantity types.

## See Also

### Aggregation Styles

- [HKQuantityAggregationStyleDiscreteArithmetic](discretearithmetic.md): Discrete samples that can be averaged over time using an arithmetic mean.
- [HKQuantityAggregationStyleDiscreteTemporallyWeighted](discretetemporallyweighted.md): Discrete samples that can be averaged over a time interval using a temporally weighted integration function.
- [HKQuantityAggregationStyleDiscreteEquivalentContinuousLevel](discreteequivalentcontinuouslevel.md): Discrete samples that can be combined over a time interval by computing the equivalent continuous sound level.
