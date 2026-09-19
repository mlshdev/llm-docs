> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/evaluationrunerrors/metricsnotfound

# metricsNotFound

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Metric names referenced by `MetricsAggregator` that no evaluator produced.

## Declaration

```swift
var metricsNotFound: [String]
```

<a id="discussion"></a>

## Discussion

Typically a typo or missing evaluator; empty on a clean run and when no sample produced inference.
