> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/init(_:labels:)](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/init(_:labels:))

# init(\_:labels:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates classification metrics for a sequence of predicted and ground truth label pairs.

## Declaration

```swift
init(_ pairs: some Sequence<(predicted: Label, label: Label)>, labels: Set<Label>)
```

## Parameters

- `pairs`: A sequence of predicted and true label pairs.
- `labels`: The set of labels to consider.

## See Also

### Creating the distribution

- [init(\_:\_:)](init%28____%29.md): Creates classification metrics for predicted and ground truth labels.
- [init()](init%28%29.md): Creates empty classification metrics.
- [init(\_:)](init%28__%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
- [init(predicted:groundTruth:labels:)](init%28predicted_groundtruth_labels_%29.md): Creates classification metrics for predicted and ground truth labels.
