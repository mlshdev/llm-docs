> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/init(_:strategy:labels:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/init(_:strategy:labels:))

# init(\_:strategy:labels:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates multi-label classification metrics for classifications and ground truth labels.

## Declaration

```swift
init(_ pairs: some Sequence<(classification: ClassificationDistribution<Label>, labels: Set<Label>)>, strategy: MultiLabelClassificationMetrics<Label>.ThresholdSelectionStrategy, labels: Set<Label>) throws
```

## Parameters

- `pairs`: A sequence of pairs with a classification distribution and a set of labels.
- `strategy`: A label confidence threshold selection strategy.
- `labels`: The set of labels to consider.

## See Also

### Creating the distribution

- [init(\_:strategy:)](init%28__strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:)](init%28classifications_groundtruth_strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:labels:)](init%28classifications_groundtruth_strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(confidenceThresholds:)](init%28confidencethresholds_%29.md): Conforms when `Label` conforms to `Hashable`. Creates empty multi-label classification metrics.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy](thresholdselectionstrategy.md): Conforms when `Label` conforms to `Hashable`. A strategy for selecting a confidence threshold.
