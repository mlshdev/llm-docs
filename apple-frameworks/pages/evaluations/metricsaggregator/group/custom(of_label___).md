> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/metricsaggregator/group/custom(of:label:_:)

# custom(of:label:\_:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Computes a custom aggregation and adds it to the group.

## Declaration

```swift
mutating func custom(of metric: Metric, label: String, _ body: ([Double]) -> Double)
```

## Parameters

- `metric`: The metric to aggregate.
- `label`: The label for this statistic in the aggregated results.
- `body`: A closure that receives the metric’s values and returns a computed statistic.
