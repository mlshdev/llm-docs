> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metricsaggregator/computemode(of:)](https://developer.apple.com/documentation/evaluations/metricsaggregator/computemode(of:))

# computeMode(of:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Computes the mode of a metric and adds it to the aggregated results.

## Declaration

```swift
mutating func computeMode(of metric: Metric)
```

## Parameters

- `metric`: The metric to aggregate.

## See Also

### Computing standard aggregations

- [computeMean(of:)](computemean%28of_%29.md): Computes the mean of a metric and adds it to the aggregated results.
- [computeMedian(of:)](computemedian%28of_%29.md): Computes the median of a metric and adds it to the aggregated results.
- [computeMinimum(of:)](computeminimum%28of_%29.md): Computes the minimum value of a metric and adds it to the aggregated results.
- [computeMaximum(of:)](computemaximum%28of_%29.md): Computes the maximum value of a metric and adds it to the aggregated results.
