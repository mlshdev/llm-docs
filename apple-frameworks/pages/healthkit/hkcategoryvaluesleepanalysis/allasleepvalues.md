> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluesleepanalysis/allasleepvalues](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis/allasleepvalues)

# allAsleepValues

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

A set of values that represents the possible stages of sleep.

## Declaration

```swift
static var allAsleepValues: Set<HKCategoryValueSleepAnalysis> { get }
```

<a id="Discussion"></a>

## Discussion

This value includes [asleep](asleep.md), [HKCategoryValueSleepAnalysis.asleepCore](asleepcore.md), [HKCategoryValueSleepAnalysis.asleepDeep](asleepdeep.md), [HKCategoryValueSleepAnalysis.asleepREM](asleeprem.md), and [HKCategoryValueSleepAnalysis.asleepUnspecified](asleepunspecified.md).
