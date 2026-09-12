> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/multilabelclassificationmetrics/precisionscore(for:)](https://developer.apple.com/documentation/createmlcomponents/multilabelclassificationmetrics/precisionscore(for:))

# precisionScore(for:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Computes the precision score for a class label.

## Declaration

```swift
func precisionScore(for label: Label) -> Float
```

## Parameters

- `label`: The label to use as true positive.

<a id="return-value"></a>

## Return Value

The precision score for the given label.

<a id="discussion"></a>

## Discussion

Precision score is computed as the ratio `truePositive / (truePositive + falsePositive)`.

## See Also

### Computing and scoring

- [count(of:)](count%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a label appeared in the ground truth collection.
- [f1Score(for:)](f1score%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the F1 score from predicted and ground truth values.
- [falseNegativeCount(of:)](falsenegativecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a true label was not predicted.
- [falsePositiveCount(of:)](falsepositivecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times the predicted label did not match the true label.
- [recallScore(for:)](recallscore%28for_%29.md): Conforms when `Label` conforms to `Hashable`. Computes the recall score for a class label.
- [trueNegativeCount(of:)](truenegativecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times a label was not in the predicted or ground truth collections.
- [truePositiveCount(of:)](truepositivecount%28of_%29.md): Conforms when `Label` conforms to `Hashable`. Returns the number of times the predicted label matched the true label.
