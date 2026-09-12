> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoredimension/metric](https://developer.apple.com/documentation/evaluations/scoredimension/metric)

# metric

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A metric identifier that uses this dimension’s name.

## Declaration

```swift
var metric: Metric { get }
```

<a id="discussion"></a>

## Discussion

Use this to reference the dimension’s metric in [MetricsAggregator](../metricsaggregator.md) without repeating the name as a raw string:

```swift
let relevance = ScoreDimension("Relevance", scale: .numeric([...]))
aggregator.computeMean(of: relevance.metric)
```

## See Also

### Inspecting a dimension

- [scale](scale.md): The scoring scale for this dimension.
- [description](description.md): An optional description providing additional context for the model judge about what this dimension measures.
