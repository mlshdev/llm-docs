> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/metricsaggregator/group(_:_:)](https://developer.apple.com/documentation/evaluations/metricsaggregator/group(_:_:))

# group(\_:\_:)

**Framework:** Evaluations  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a group of related metrics.

## Declaration

```swift
mutating func group(_ name: String, _ body: (inout MetricsAggregator.Group) -> Void)
```

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

<a id="discussion"></a>

## Discussion

Use this to organize your metrics into logical groups for better readability.

<a id="Example"></a>

## Example

```swift
let accuracy = Metric("Accuracy")

func aggregateMetrics(using aggregator: inout MetricsAggregator) {
    aggregator.group("Quality Metrics") { group in
        group.computeMean(of: accuracy)
        group.computeMedian(of: accuracy)
    }
}
```

## See Also

### Grouping metrics

- [MetricsAggregator.Group](group.md): A grouped collection of related metrics.
