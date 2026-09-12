> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metricsaggregator/computestandarddeviation(of:)](https://developer.apple.com/documentation/evaluations/metricsaggregator/computestandarddeviation(of:))

# computeStandardDeviation(of:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Computes the standard deviation of a metric and adds it to the aggregated results.

## Declaration

```swift
mutating func computeStandardDeviation(of metric: Metric)
```

## Parameters

- `metric`: The metric to aggregate.

## See Also

### Computing variability

- [computeVariance(of:)](computevariance%28of_%29.md): Computes the variance of a metric and adds it to the aggregated results.
