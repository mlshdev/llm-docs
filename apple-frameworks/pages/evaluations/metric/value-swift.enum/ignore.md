> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metric/value-swift.enum/ignore](https://developer.apple.com/documentation/evaluations/metric/value-swift.enum/ignore)

# Metric.Value.ignore

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The metric doesn’t apply to this sample and aggregators skip it.

## Declaration

```swift
case ignore
```

<a id="discussion"></a>

## Discussion

Use this when a sample doesn’t have the necessary data for evaluation, such as when no tool expectations exist for a tool trajectory metric. Aggregators skip these results when computing statistics like mean.
