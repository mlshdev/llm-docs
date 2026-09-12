> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classification](https://developer.apple.com/documentation/createmlcomponents/classification)

# Classification

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An item in a classification result.

## Declaration

```swift
struct Classification<Label> where Label : Hashable
```

## Topics

### Creating the item

- [init(label:probability:)](classification/init%28label_probability_%29.md): Creates a classification with label and probability.

### Getting the properties

- [label](classification/label.md): The classification label.
- [probability](classification/probability.md): The classification probability. A value between 0 and 1.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics

- [ClassificationDistribution](classificationdistribution.md): A classification distribution that contains a probability for each classification label.
- [ClassificationMetrics](classificationmetrics.md): Classification metrics.
- [MultiLabelClassificationMetrics](multilabelclassificationmetrics.md): Multi-label classification metrics.
- [rootMeanSquaredError(\_:)](rootmeansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [rootMeanSquaredError(\_:\_:)](rootmeansquarederror%28____%29.md): Computes the root mean squared error between predicted and ground truth values.
- [maximumAbsoluteError(\_:)](maximumabsoluteerror%28__%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [maximumAbsoluteError(\_:\_:)](maximumabsoluteerror%28____%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:)](meanabsoluteerror%28__%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:\_:)](meanabsoluteerror%28____%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsolutePercentageError(\_:)](meanabsolutepercentageerror%28__%29.md): Computes the mean absolute percentage error between predicted and ground truth values.
- [meanSquaredError(\_:)](meansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [meanSquaredError(\_:\_:)](meansquarederror%28____%29.md): Computes the mean squared error between predicted and ground truth values.
