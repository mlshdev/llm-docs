> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/thresholdselectionstrategy](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/thresholdselectionstrategy)

# MultiLabelClassificationMetrics.ThresholdSelectionStrategy

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A strategy for selecting a confidence threshold.

## Declaration

```swift
enum ThresholdSelectionStrategy
```

## Topics

### Selection strategies

- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.balancedPrecisionAndRecall](thresholdselectionstrategy/balancedprecisionandrecall.md): A confidence threshold strategy that balances precision and recall equivalently.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.fixed(\_:)](thresholdselectionstrategy/fixed%28__%29.md): A confidence threshold strategy that uses the specified thresholds for each label.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.precision(\_:minimumRecall:)](thresholdselectionstrategy/precision%28__minimumrecall_%29.md): A confidence threshold strategy for a specific precision that has at least a minimum recall value.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.recall(\_:minimumPrecision:)](thresholdselectionstrategy/recall%28__minimumprecision_%29.md): A confidence threshold strategy for a recall precision that has at least a minimum precision value.

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

### Creating the distribution

- [init(\_:strategy:)](init%28__strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(\_:strategy:labels:)](init%28__strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:)](init%28classifications_groundtruth_strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:labels:)](init%28classifications_groundtruth_strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(confidenceThresholds:)](init%28confidencethresholds_%29.md): Conforms when `Label` conforms to `Hashable`. Creates empty multi-label classification metrics.
