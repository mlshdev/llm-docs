> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/objectdetectionmetrics](https://developer.apple.com/documentation/createmlcomponents/objectdetectionmetrics)

# ObjectDetectionMetrics

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Metrics for object detection model.

## Declaration

```swift
struct ObjectDetectionMetrics<Label> where Label : Comparable, Label : Decodable, Label : Encodable, Label : Hashable
```

## Topics

### Creating a metrics object

- [init()](objectdetectionmetrics/init%28%29.md)

### Getting the properties Properties

- [defaultConfidenceThreshold](objectdetectionmetrics/defaultconfidencethreshold.md): The default confidence threshold. It is used as the confidence threshold for any label which does not have an explicit confidence threshold, while calculating averagePrecision and meanAveragePrecision.
- [labels](objectdetectionmetrics/labels.md): A set of labels present in the dataset.

### Calculating the precision

- [averageOfAveragePrecisionAtVariedThresholds(predictions:annotations:confidenceThresholds:)](objectdetectionmetrics/averageofaverageprecisionatvariedthresholds%28predictions_annotations_confidencethresholds_%29.md): Calculates average of average precision for all the labels, computed at varied bounding box overlap thresholds. The overlap thresholds range is from `[0.05, 0.95]` with a stride of `0.05`.
- [averageOfMeanAveragePrecisionAtVariedThresholds(predictions:annotations:confidenceThresholds:)](objectdetectionmetrics/averageofmeanaverageprecisionatvariedthresholds%28predictions_annotations_confidencethresholds_%29.md): Calculates the average of mean average precision, computed at varied bounding box overlap thresholds. The overlap thresholds range is from `[0.05, 0.95]` with a stride of `0.05`.
- [averagePrecision(predictions:annotations:confidenceThresholds:overlapThreshold:)](objectdetectionmetrics/averageprecision%28predictions_annotations_confidencethresholds_overlapthreshold_%29.md): Calculates average precision for all the labels at the bounding box overlap threshold.
- [meanAveragePrecision(predictions:annotations:confidenceThresholds:overlapThreshold:)](objectdetectionmetrics/meanaverageprecision%28predictions_annotations_confidencethresholds_overlapthreshold_%29.md): Calculates the mean average precision at the bounding box overlap threshold.

### Extracting labels

- [extractLabels(from:)](objectdetectionmetrics/extractlabels%28from_%29.md): Extracts all the labels from a list of annotations.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object detection components

- [DetectedObject](detectedobject.md): An item in a detection result.
- [ObjectDetectionAnnotation](objectdetectionannotation.md): An object detection annotation.
