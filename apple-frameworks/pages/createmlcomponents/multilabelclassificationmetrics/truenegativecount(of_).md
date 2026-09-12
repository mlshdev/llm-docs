> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/truenegativecount(of:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/truenegativecount(of:))

# trueNegativeCount(of:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the number of times a label was not in the predicted or ground truth collections.

## Declaration

```swift
func trueNegativeCount(of label: Label) -> Int
```

## Parameters

- `label`: The label to use as true positive.

<a id="return-value"></a>

## Return Value

The true negative count.

<a id="discussion"></a>

## Discussion

If the label does not have a confidence threshold, the true negative count is 0. If the label has a confidence threshold NaN, the true negative count is the number elements in the ground truth collection that do not contain the label. If the label is not in the known set of labels, the true negative count is 0.

## See Also

### Computing and scoring

- [count(of:)](count%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a label appeared in the ground truth collection.
- [f1Score(for:)](f1score%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the F1 score from predicted and ground truth values.
- [falseNegativeCount(of:)](falsenegativecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a true label was not predicted.
- [falsePositiveCount(of:)](falsepositivecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times the predicted label did not match the true label.
- [precisionScore(for:)](precisionscore%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the precision score for a class label.
- [recallScore(for:)](recallscore%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the recall score for a class label.
- [truePositiveCount(of:)](truepositivecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times the predicted label matched the true label.
