> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/init(confidencethresholds:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/init(confidencethresholds:))

# init(confidenceThresholds:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates empty multi-label classification metrics.

## Declaration

```swift
init(confidenceThresholds: [Label : Float])
```

## Parameters

- `confidenceThresholds`: A dictionary of label and confidence thresholds.

## See Also

### Creating the distribution

- [init(\_:strategy:)](init%28__strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(\_:strategy:labels:)](init%28__strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:)](init%28classifications_groundtruth_strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:labels:)](init%28classifications_groundtruth_strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy](thresholdselectionstrategy.md): Conforms when `Label` conforms to `Hashable`. A strategy for selecting a confidence threshold.
