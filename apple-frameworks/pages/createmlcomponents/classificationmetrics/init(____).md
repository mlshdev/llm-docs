> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/init(_:_:)](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/init(_:_:))

# init(\_:\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates classification metrics for predicted and ground truth labels.

## Declaration

```swift
init<Predicted, Correct>(_ predicted: Predicted, _ groundTruth: Correct) where Label == Predicted.Element, Predicted : Collection, Correct : Collection, Predicted.Element == Correct.Element
```

<a id="discussion"></a>

## Discussion

The predicted and ground truth collections are matched element by element in the order they are provided. Both collections must have the same number of elements.

- Parameters

  - predicted: The predicted labels.
  - groundTruth: The true labels.

## See Also

### Creating the distribution

- [init()](init%28%29.md): Creates empty classification metrics.
- [init(\_:)](init%28__%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
- [init(\_:labels:)](init%28__labels_%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
- [init(predicted:groundTruth:labels:)](init%28predicted_groundtruth_labels_%29.md): Creates classification metrics for predicted and ground truth labels.
