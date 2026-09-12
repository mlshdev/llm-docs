> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/thresholdselectionstrategy/balancedprecisionandrecall](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/thresholdselectionstrategy/balancedprecisionandrecall)

# MultiLabelClassificationMetrics.ThresholdSelectionStrategy.balancedPrecisionAndRecall

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A confidence threshold strategy that balances precision and recall equivalently.

## Declaration

```swift
case balancedPrecisionAndRecall
```

<a id="discussion"></a>

## Discussion

Use this strategy to select a threshold for each label to maximize the f1-score.

## See Also

### Selection strategies

- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.fixed(\_:)](fixed%28__%29.md): A confidence threshold strategy that uses the specified thresholds for each label.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.precision(\_:minimumRecall:)](precision%28__minimumrecall_%29.md): A confidence threshold strategy for a specific precision that has at least a minimum recall value.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.recall(\_:minimumPrecision:)](recall%28__minimumprecision_%29.md): A confidence threshold strategy for a recall precision that has at least a minimum precision value.
