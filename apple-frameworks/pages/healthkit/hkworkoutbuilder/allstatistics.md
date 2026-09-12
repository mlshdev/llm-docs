> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/allstatistics](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/allstatistics)

# allStatistics (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A dictionary that contains all the statistics for the workout builder.

## Declaration

```swift
var allStatistics: [HKQuantityType : HKStatistics] { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object for each [HKQuantityType](../hkquantitytype.md), based on the [HKQuantitySample](../hkquantitysample.md) objects collected by the workout builder.

# allStatistics (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A dictionary that contains all the statistics for the workout builder.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<HKQuantityType *,HKStatistics *> * allStatistics;
```

<a id="Discussion"></a>

## Discussion

HealthKit calculates an [HKStatistics](../hkstatistics.md) object for each [HKQuantityType](../hkquantitytype.md), based on the [HKQuantitySample](../hkquantitysample.md) objects collected by the workout builder.
