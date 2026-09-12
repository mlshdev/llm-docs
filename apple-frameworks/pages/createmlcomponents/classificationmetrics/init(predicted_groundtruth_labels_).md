> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/init(predicted:groundtruth:labels:)](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/init(predicted:groundtruth:labels:))

# init(predicted:groundTruth:labels:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates classification metrics for predicted and ground truth labels.

## Declaration

```swift
init<Predicted, Correct>(predicted: Predicted, groundTruth: Correct, labels: Set<Label>) where Label == Predicted.Element, Predicted : Sequence, Correct : Sequence, Predicted.Element == Correct.Element
```

<a id="discussion"></a>

## Discussion

The predicted and ground truth collections are matched element by element in the order they are provided. Both collections must have the same number of elements. Labels not in the labels set are ignored.

- Parameters

  - predicted: The predicted labels.
  - groundTruth: The true labels.
  - labels: The set of labels to consider.

## See Also

### Creating the distribution

- [init(\_:\_:)](init%28____%29.md): Creates classification metrics for predicted and ground truth labels.
- [init()](init%28%29.md): Creates empty classification metrics.
- [init(\_:)](init%28__%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
- [init(\_:labels:)](init%28__labels_%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
