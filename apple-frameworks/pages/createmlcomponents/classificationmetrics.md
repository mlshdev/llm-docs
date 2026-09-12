> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics)

# ClassificationMetrics

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Classification metrics.

## Declaration

```swift
struct ClassificationMetrics<Label> where Label : Hashable
```

## Topics

### Creating the distribution

- [init(\_:\_:)](classificationmetrics/init%28____%29.md): Creates classification metrics for predicted and ground truth labels.
- [init()](classificationmetrics/init%28%29.md): Creates empty classification metrics.
- [init(\_:)](classificationmetrics/init%28__%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
- [init(\_:labels:)](classificationmetrics/init%28__labels_%29.md): Creates classification metrics for a sequence of predicted and ground truth label pairs.
- [init(predicted:groundTruth:labels:)](classificationmetrics/init%28predicted_groundtruth_labels_%29.md): Creates classification metrics for predicted and ground truth labels.

### Getting the properties

- [accuracy](classificationmetrics/accuracy.md): The number of correctly classified examples out of the total number of examples.
- [exampleCount](classificationmetrics/examplecount.md): The number of examples used to compute the metrics.
- [labels](classificationmetrics/labels.md): The set of labels.
- [restrictToKnownLabels](classificationmetrics/restricttoknownlabels.md): A Boolean value indicating whether to restrict metrics to labels in the labels set.

### Computing and scoring

- [makeConfusionMatrix()](classificationmetrics/makeconfusionmatrix%28%29.md): Computes the confusion matrix.
- [precisionScore(label:)](classificationmetrics/precisionscore%28label_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the precision score for a class label.
- [recallScore(label:)](classificationmetrics/recallscore%28label_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the recall score for a class label.
- [count(label:)](classificationmetrics/count%28label_%29.md): Returns the number of times a label appeared in the ground truth collection.
- [count(predicted:)](classificationmetrics/count%28predicted_%29.md): Returns the number of times a label appeared in the predicted collection.
- [count(predicted:label:)](classificationmetrics/count%28predicted_label_%29.md): Returns the number of times a predicted, true label pair appeared in the label collections.
- [trueNegativeCount(of:)](classificationmetrics/truenegativecount%28of_%29.md): Returns the number of times a label was not in the predicted or ground truth collections.
- [truePositiveCount(of:)](classificationmetrics/truepositivecount%28of_%29.md): Returns the number of times the predicted label matched the true label.
- [falseNegativeCount(of:)](classificationmetrics/falsenegativecount%28of_%29.md): Returns the number of times a true label was not predicted.
- [falsePositiveCount(of:)](classificationmetrics/falsepositivecount%28of_%29.md): Returns the number of times the predicted label did not match the true label.
- [f1Score(label:)](classificationmetrics/f1score%28label_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the F1 score for a class label.
- [mapLabels(\_:)](classificationmetrics/maplabels%28__%29.md): Returns new classification metrics where the labels are the result of applying a transformation.

### Updating the metrics

- [add(\_:)](classificationmetrics/add%28__%29.md): Updates the metrics with more predicted and ground truth label pairs.
- [add(predicted:groundTruth:)](classificationmetrics/add%28predicted_groundtruth_%29.md): Updates the metrics with more predicted and ground truth labels.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Metrics

- [Classification](classification.md): An item in a classification result.
- [ClassificationDistribution](classificationdistribution.md): A classification distribution that contains a probability for each classification label.
- [MultiLabelClassificationMetrics](multilabelclassificationmetrics.md): Multi-label classification metrics.
- [rootMeanSquaredError(\_:)](rootmeansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [rootMeanSquaredError(\_:\_:)](rootmeansquarederror%28____%29.md): Computes the root mean squared error between predicted and ground truth values.
- [maximumAbsoluteError(\_:)](maximumabsoluteerror%28__%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [maximumAbsoluteError(\_:\_:)](maximumabsoluteerror%28____%29.md): Computes the maximum absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:)](meanabsoluteerror%28__%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsoluteError(\_:\_:)](meanabsoluteerror%28____%29.md): Computes the mean absolute error between predicted and ground truth values.
- [meanAbsolutePercentageError(\_:)](meanabsolutepercentageerror%28__%29.md): Computes the mean absolute percentage error between predicted and ground truth values.
- [meanSquaredError(\_:)](meansquarederror%28__%29.md): Computes the root mean squared error between predicted and ground truth values.
- [meanSquaredError(\_:\_:)](meansquarederror%28____%29.md): Computes the mean squared error between predicted and ground truth values.
