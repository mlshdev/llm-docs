> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityaggregationstyle/discrete](https://developer.apple.com/documentation/healthkit/hkquantityaggregationstyle/discrete)

# discrete (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Discrete samples may be averaged over time.

> Use [HKQuantityAggregationStyle.discreteArithmetic](discretearithmetic.md) instead.

## Declaration

```swift
static var discrete: HKQuantityAggregationStyle { get }
```

<a id="Discussion"></a>

## Discussion

You typically use discrete types to monitor the change in the value over time. For example, body mass, heart rate, temperature, and respiratory rate are all discrete quantity types. You can also query for the minimum or maximum value in a given time period.

# HKQuantityAggregationStyleDiscrete (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Discrete samples may be averaged over time.

> Use [HKQuantityAggregationStyleDiscreteArithmetic](discretearithmetic.md) instead.

## Declaration

```objectivec
HKQuantityAggregationStyleDiscrete
```

<a id="Discussion"></a>

## Discussion

You typically use discrete types to monitor the change in the value over time. For example, body mass, heart rate, temperature, and respiratory rate are all discrete quantity types. You can also query for the minimum or maximum value in a given time period.
