> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationmetrics/count(label:)](https://developer.apple.com/documentation/createmlcomponents/classificationmetrics/count(label:))

# count(label:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the number of times a label appeared in the ground truth collection.

## Declaration

```swift
func count(label: Label) -> Int
```

## Parameters

- `label`: The label.

## See Also

### Computing and scoring

- [makeConfusionMatrix()](makeconfusionmatrix%28%29.md): Computes the confusion matrix.
- [precisionScore(label:)](precisionscore%28label_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the precision score for a class label.
- [recallScore(label:)](recallscore%28label_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the recall score for a class label.
- [count(predicted:)](count%28predicted_%29.md): Returns the number of times a label appeared in the predicted collection.
- [count(predicted:label:)](count%28predicted_label_%29.md): Returns the number of times a predicted, true label pair appeared in the label collections.
- [trueNegativeCount(of:)](truenegativecount%28of_%29.md): Returns the number of times a label was not in the predicted or ground truth collections.
- [truePositiveCount(of:)](truepositivecount%28of_%29.md): Returns the number of times the predicted label matched the true label.
- [falseNegativeCount(of:)](falsenegativecount%28of_%29.md): Returns the number of times a true label was not predicted.
- [falsePositiveCount(of:)](falsepositivecount%28of_%29.md): Returns the number of times the predicted label did not match the true label.
- [f1Score(label:)](f1score%28label_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the F1 score for a class label.
- [mapLabels(\_:)](maplabels%28__%29.md): Returns new classification metrics where the labels are the result of applying a transformation.
