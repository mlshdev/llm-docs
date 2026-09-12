> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/aggregatemetric](https://developer.apple.com/documentation/evaluations/aggregatemetric)

# AggregateMetric

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

An aggregate statistic computed from a metric’s results across the evaluation dataset.

## Declaration

```swift
struct AggregateMetric
```

<a id="overview"></a>

## Overview

```swift
let accuracy = Metric("Accuracy")
let op = AggregationOperation.mean(of: accuracy)
print(op.label) // "Mean of Accuracy"
```

The summary DataFrame stores one `AggregateMetric` for each column. Each value records the operation that produced it, and derives its display label and source metric name from the operation.

## Topics

### Instance Properties

- [group](aggregatemetric/group.md): The group this aggregate belongs to, if any.
- [label](aggregatemetric/label.md): The display label for this aggregate.
- [operation](aggregatemetric/operation.md): The aggregation operation that produced this value.
- [sourceMetric](aggregatemetric/sourcemetric.md): The name of the source metric.
- [value](aggregatemetric/value.md): The aggregate value.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting aggregate results

- [AggregationOperation](aggregationoperation.md): The type of aggregation operation used to compute a summary statistic.
