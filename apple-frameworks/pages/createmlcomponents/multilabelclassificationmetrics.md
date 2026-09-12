> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics)

# MultiLabelClassificationMetrics

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Multi-label classification metrics.

## Declaration

```swift
struct MultiLabelClassificationMetrics<Label> where Label : Hashable
```

## Topics

### Creating the distribution

- [init(\_:strategy:)](multilabelclassificationmetrics/init%28__strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(\_:strategy:labels:)](multilabelclassificationmetrics/init%28__strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:)](multilabelclassificationmetrics/init%28classifications_groundtruth_strategy_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(classifications:groundTruth:strategy:labels:)](multilabelclassificationmetrics/init%28classifications_groundtruth_strategy_labels_%29.md): Creates multi-label classification metrics for classifications and ground truth labels.
- [init(confidenceThresholds:)](multilabelclassificationmetrics/init%28confidencethresholds_%29.md): Conforms when `Label` conforms to `Hashable`. Creates empty multi-label classification metrics.
- [MultiLabelClassificationMetrics.ThresholdSelectionStrategy](multilabelclassificationmetrics/thresholdselectionstrategy.md): Conforms when `Label` conforms to `Hashable`. A strategy for selecting a confidence threshold.

### Getting the properties

- [confidenceThresholds](multilabelclassificationmetrics/confidencethresholds.md): A dictionary of label and confidence thresholds.
- [exampleCount](multilabelclassificationmetrics/examplecount.md): The number of examples used to compute the metrics.
- [labels](multilabelclassificationmetrics/labels.md): The classifier labels.
- [meanAveragePrecision](multilabelclassificationmetrics/meanaverageprecision.md): The mean average precision.

### Computing and scoring

- [count(of:)](multilabelclassificationmetrics/count%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a label appeared in the ground truth collection.
- [f1Score(for:)](multilabelclassificationmetrics/f1score%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the F1 score from predicted and ground truth values.
- [falseNegativeCount(of:)](multilabelclassificationmetrics/falsenegativecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a true label was not predicted.
- [falsePositiveCount(of:)](multilabelclassificationmetrics/falsepositivecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times the predicted label did not match the true label.
- [precisionScore(for:)](multilabelclassificationmetrics/precisionscore%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the precision score for a class label.
- [recallScore(for:)](multilabelclassificationmetrics/recallscore%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the recall score for a class label.
- [trueNegativeCount(of:)](multilabelclassificationmetrics/truenegativecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a label was not in the predicted or ground truth collections.
- [truePositiveCount(of:)](multilabelclassificationmetrics/truepositivecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times the predicted label matched the true label.

### Updating the metrics

- [add(\_:)](multilabelclassificationmetrics/add%28__%29.md): Conforms when `Label` conforms to `Hashable`. Updates the metrics with more pairs of classifications and ground truth labels.
- [add(classifications:groundTruth:)](multilabelclassificationmetrics/add%28classifications_groundtruth_%29.md): Conforms when `Label` conforms to `Hashable`. Updates the metrics with more classifications and ground truth labels.

### Computing the precision

- [meanAveragePrecisionScore(\_:)](multilabelclassificationmetrics/meanaverageprecisionscore%28__%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.
- [meanAveragePrecisionScore(\_:labels:)](multilabelclassificationmetrics/meanaverageprecisionscore%28__labels_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.
- [meanAveragePrecisionScore(classifications:groundTruth:)](multilabelclassificationmetrics/meanaverageprecisionscore%28classifications_groundtruth_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.
- [meanAveragePrecisionScore(classifications:groundTruth:labels:)](multilabelclassificationmetrics/meanaverageprecisionscore%28classifications_groundtruth_labels_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the mean average precision.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics

- [Classification](classification.md): An item in a classification result.
- [ClassificationDistribution](classificationdistribution.md): A classification distribution that contains a probability for each classification label.
- [ClassificationMetrics](classificationmetrics.md): Classification metrics.
- [rootMeanSquaredError(\_:)](rootmeansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [rootMeanSquaredError(\_:\_:)](rootmeansquarederror%28____%29.md): Computes the root mean squared error between predicted and ground truth values.
- [maximumAbsoluteError(\_:)](maximumabsoluteerror%28__%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [maximumAbsoluteError(\_:\_:)](maximumabsoluteerror%28____%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:)](meanabsoluteerror%28__%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:\_:)](meanabsoluteerror%28____%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsolutePercentageError(\_:)](meanabsolutepercentageerror%28__%29.md): Computes the mean absolute percentage error between predicted and ground truth values.
- [meanSquaredError(\_:)](meansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [meanSquaredError(\_:\_:)](meansquarederror%28____%29.md): Computes the mean squared error between predicted and ground truth values.
