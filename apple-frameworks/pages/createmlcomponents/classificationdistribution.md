> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationdistribution](https://developer.apple.com/documentation/createmlcomponents/classificationdistribution)

# ClassificationDistribution

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A classification distribution that contains a probability for each classification label.

## Declaration

```swift
struct ClassificationDistribution<Label> where Label : Hashable
```

## Topics

### Creating the distribution

- [init(\_:)](classificationdistribution/init%28__%29.md): Creates a classification distribution.

### Getting the properties

- [endIndex](classificationdistribution/endindex.md): The index of the final element in the classification distribution.
- [labelsSortedByProbability](classificationdistribution/labelssortedbyprobability.md): The labels sorted by decreasing probability.
- [mostLikelyLabel](classificationdistribution/mostlikelylabel.md): The label with the highest probability.
- [startIndex](classificationdistribution/startindex.md): The index of the initial element in the classification distribution.

### Getting the index

- [index(after:)](classificationdistribution/index%28after_%29.md): Returns the index immediately after an element index.
- [index(before:)](classificationdistribution/index%28before_%29.md): Returns the index immediately before an element index.

### Labeling and mapping

- [topLabels(\_:)](classificationdistribution/toplabels%28__%29.md): Computes the most likely labels in the classification set.
- [map(\_:)](classificationdistribution/map%28__%29.md): Creates a new classification distribution by applying a transformation to every element.

### Accessing by subscript

- [subscript(\_:)](classificationdistribution/subscript%28__%29.md): Accesses a contiguous range of elements.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Metrics

- [Classification](classification.md): An item in a classification result.
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
