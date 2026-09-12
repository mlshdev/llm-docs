> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/init(classifications:groundtruth:strategy:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/init(classifications:groundtruth:strategy:))

# init(classifications:groundTruth:strategy:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates multi-label classification metrics for classifications and ground truth labels.

## Declaration

```swift
init(classifications: some Sequence<ClassificationDistribution<Label>>, groundTruth: some Sequence<Set<Label>>, strategy: MultiLabelClassificationMetrics<Label>.ThresholdSelectionStrategy) throws
```

## Parameters

- `classifications`: A sequence of classifications.
- `groundTruth`: A sequence of true labels.
- `strategy`: A label confidence threshold selection strategy.

<a id="discussion"></a>

## Discussion

The classifications and ground truth sequences are matched element by element in the order they are provided. Both sequences must have the same number of elements.

## See Also

### Creating the distribution

- [init(\_:strategy:)](init%28__strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(\_:strategy:labels:)](init%28__strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:labels:)](init%28classifications_groundtruth_strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(confidenceThresholds:)](init%28confidencethresholds_%29.md): Conforms when `Label` conforms to `Hashable`. Creates empty multi-label classification metrics.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy](thresholdselectionstrategy.md): Conforms when `Label` conforms to `Hashable`. A strategy for selecting a confidence threshold.
