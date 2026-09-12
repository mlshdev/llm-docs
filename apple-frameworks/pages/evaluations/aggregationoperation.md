> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/aggregationoperation](https://developer.apple.com/documentation/evaluations/aggregationoperation)

# AggregationOperation

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The type of aggregation operation used to compute a summary statistic.

## Declaration

```swift
enum AggregationOperation
```

<a id="overview"></a>

## Overview

Each case pairs a statistical function with the [Metric](metric.md) it operates on, except [AggregationOperation.custom(label:)](aggregationoperation/custom%28label_%29.md) which represents a custom computation.

## Topics

### Enumeration Cases

- [AggregationOperation.custom(label:)](aggregationoperation/custom%28label_%29.md): A custom aggregation identified by its label.
- [AggregationOperation.maximum(of:)](aggregationoperation/maximum%28of_%29.md): The maximum of the metric’s values.
- [AggregationOperation.mean(of:)](aggregationoperation/mean%28of_%29.md): The arithmetic mean of the metric’s values.
- [AggregationOperation.median(of:)](aggregationoperation/median%28of_%29.md): The median of the metric’s values.
- [AggregationOperation.minimum(of:)](aggregationoperation/minimum%28of_%29.md): The minimum of the metric’s values.
- [AggregationOperation.mode(of:)](aggregationoperation/mode%28of_%29.md): The mode of the metric’s values.
- [AggregationOperation.standardDeviation(of:)](aggregationoperation/standarddeviation%28of_%29.md): The standard deviation of the metric’s values.
- [AggregationOperation.variance(of:)](aggregationoperation/variance%28of_%29.md): The variance of the metric’s values.

### Instance Properties

- [label](aggregationoperation/label.md): The display label this operation produces.

### Default Implementations

- [Decodable Implementations](aggregationoperation/decodable-implementations.md)
- [Encodable Implementations](aggregationoperation/encodable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting aggregate results

- [AggregateMetric](aggregatemetric.md): An aggregate statistic computed from a metric’s results across the evaluation dataset.
