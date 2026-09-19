> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkquantityaggregationstyle/discretearithmetic

# HKQuantityAggregationStyle.discreteArithmetic (Swift)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Discrete samples that can be averaged over time using an arithmetic mean.

## Declaration

```swift
case discreteArithmetic
```

<a id="Discussion"></a>

## Discussion

Use discrete types to monitor changes in a value over time. Body mass, heart rate, temperature, and respiratory rate are all discrete quantity types. You can also query for the minimum or maximum value in a given time period.

## See Also

### Aggregation Styles

- [HKQuantityAggregationStyle.cumulative](cumulative.md): Cumulative samples that can be summed over time.
- [HKQuantityAggregationStyle.discreteTemporallyWeighted](discretetemporallyweighted.md): Discrete samples that can be averaged over a time interval using a temporally weighted integration function.
- [HKQuantityAggregationStyle.discreteEquivalentContinuousLevel](discreteequivalentcontinuouslevel.md): Discrete samples that can be combined over a time interval by computing the equivalent continuous sound level.

# HKQuantityAggregationStyleDiscreteArithmetic (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Discrete samples that can be averaged over time using an arithmetic mean.

## Declaration

```objectivec
HKQuantityAggregationStyleDiscreteArithmetic
```

<a id="Discussion"></a>

## Discussion

Use discrete types to monitor changes in a value over time. Body mass, heart rate, temperature, and respiratory rate are all discrete quantity types. You can also query for the minimum or maximum value in a given time period.

## See Also

### Aggregation Styles

- [HKQuantityAggregationStyleCumulative](cumulative.md): Cumulative samples that can be summed over time.
- [HKQuantityAggregationStyleDiscreteTemporallyWeighted](discretetemporallyweighted.md): Discrete samples that can be averaged over a time interval using a temporally weighted integration function.
- [HKQuantityAggregationStyleDiscreteEquivalentContinuousLevel](discreteequivalentcontinuouslevel.md): Discrete samples that can be combined over a time interval by computing the equivalent continuous sound level.
