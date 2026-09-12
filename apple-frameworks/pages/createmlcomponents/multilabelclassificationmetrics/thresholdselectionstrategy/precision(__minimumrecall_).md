> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/thresholdselectionstrategy/precision(_:minimumrecall:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/thresholdselectionstrategy/precision(_:minimumrecall:))

# MultiLabelClassificationMetrics.ThresholdSelectionStrategy.precision(\_:minimumRecall:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

A confidence threshold strategy for a specific precision that has at least a minimum recall value.

## Declaration

```swift
case precision(Float, minimumRecall: Float)
```

<a id="discussion"></a>

## Discussion

This strategy selects a threshold for each label by searching for the specified precision value on the label’s precision-recall curve. At the precision, the recall must be greater than or equal to the minimum recall value, otherwise a NaN threshold for the corresponding label is returned.

Use this strategy to reduce the rate of false-positive predictions while constraining the false-negative predictions.

## See Also

### Selection strategies

- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.balancedPrecisionAndRecall](balancedprecisionandrecall.md): A confidence threshold strategy that balances precision and recall equivalently.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.fixed(\_:)](fixed%28__%29.md): A confidence threshold strategy that uses the specified thresholds for each label.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy.recall(\_:minimumPrecision:)](recall%28__minimumprecision_%29.md): A confidence threshold strategy for a recall precision that has at least a minimum precision value.
