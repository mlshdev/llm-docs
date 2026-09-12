> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/evaluation(on:)](https://developer.apple.com/documentation/createml/mlobjectdetector/evaluation(on:))

# evaluation(on:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Generates metrics by evaluating the object detector’s performance using annotated images in a data source.

## Declaration

```swift
func evaluation(on annotatedImages: MLObjectDetector.DataSource) -> MLObjectDetectorMetrics
```

## Parameters

- `annotatedImages`: An [MLObjectDetector.DataSource](datasource.md) instance that contains a set of images with object annotations.

<a id="return-value"></a>

## Return Value

An [MLObjectDetectorMetrics](../mlobjectdetectormetrics.md) instance that represents the object detector’s performance on the annotated images.

## See Also

### Evaluating an object detector

- [evaluation(on:imageColumn:annotationColumn:)](evaluation%28on_imagecolumn_annotationcolumn_%29.md): Deprecated. Generates metrics by evaluating the object detector’s performance using annotated images in a data table.
- [trainingMetrics](trainingmetrics.md): Measurements of the object detector’s performance on the training dataset.
- [validationMetrics](validationmetrics.md): Measurements of the object detector’s performance on the validation dataset.
