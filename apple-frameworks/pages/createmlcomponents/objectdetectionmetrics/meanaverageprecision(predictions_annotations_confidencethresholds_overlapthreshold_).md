> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/objectdetectionmetrics/meanaverageprecision(predictions:annotations:confidencethresholds:overlapthreshold:)](https://developer.apple.com/documentation/createmlcomponents/objectdetectionmetrics/meanaverageprecision(predictions:annotations:confidencethresholds:overlapthreshold:))

# meanAveragePrecision(predictions:annotations:confidenceThresholds:overlapThreshold:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Calculates the mean average precision at the bounding box overlap threshold.

## Declaration

```swift
func meanAveragePrecision<Scalar>(predictions: [[DetectedObject<Label>]], annotations: [ObjectDetectionAnnotation<Label>], confidenceThresholds: [Label : Float] = [:], overlapThreshold: Double = 0.5) -> Scalar where Scalar : BinaryFloatingPoint
```

## Parameters

- `predictions`: A list of all the predictions from an object detection model. Each element in the list is a list of predictions from one image.
- `annotations`: A list of all the annotations. Each element is an `ObjectDetectionAnnotation` object from one image.
- `confidenceThresholds`: Confidence thresholds for each label. The values will always be between 0.0 and 1.0. If any label does not have a threshold, the `defaultConfidenceThreshold` is used for that label. The default value is `[:]`.
- `overlapThreshold`: The overlap threshold for the bounding boxes. The value will always be between 0.0 and 1.0. The default value is `0.5`.

<a id="return-value"></a>

## Return Value

The mean average precision at the overlap threshold.

## See Also

### Calculating the precision

- [averageOfAveragePrecisionAtVariedThresholds(predictions:annotations:confidenceThresholds:)](averageofaverageprecisionatvariedthresholds%28predictions_annotations_confidencethresholds_%29.md): Calculates average of average precision for all the labels, computed at varied bounding box overlap thresholds. The overlap thresholds range is from `[0.05, 0.95]` with a stride of `0.05`.
- [averageOfMeanAveragePrecisionAtVariedThresholds(predictions:annotations:confidenceThresholds:)](averageofmeanaverageprecisionatvariedthresholds%28predictions_annotations_confidencethresholds_%29.md): Calculates the average of mean average precision, computed at varied bounding box overlap thresholds. The overlap thresholds range is from `[0.05, 0.95]` with a stride of `0.05`.
- [averagePrecision(predictions:annotations:confidenceThresholds:overlapThreshold:)](averageprecision%28predictions_annotations_confidencethresholds_overlapthreshold_%29.md): Calculates average precision for all the labels at the bounding box overlap threshold.
