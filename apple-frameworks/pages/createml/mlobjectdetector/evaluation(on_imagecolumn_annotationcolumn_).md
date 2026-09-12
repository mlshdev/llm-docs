> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/evaluation(on:imagecolumn:annotationcolumn:)](https://developer.apple.com/documentation/createml/mlobjectdetector/evaluation(on:imagecolumn:annotationcolumn:))

# evaluation(on:imageColumn:annotationColumn:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 13.0)

Generates metrics by evaluating the object detector’s performance using annotated images in a data table.

> Use DataSource instead of MLDataTable.

## Declaration

```swift
func evaluation(on annotatedImages: MLDataTable, imageColumn: String, annotationColumn: String) -> MLObjectDetectorMetrics
```

## Parameters

- `annotatedImages`: An [MLDataTable](../mldatatable.md) instance that contains a set of images with object annotations.
- `imageColumn`: The name of the column in the data table that contains the image file URLs.
- `annotationColumn`: The name of the column in the data table that contains the object annotations.

<a id="return-value"></a>

## Return Value

An [MLObjectDetectorMetrics](../mlobjectdetectormetrics.md) instance that represents the object detector’s performance on the annotated images.

## See Also

### Evaluating an object detector

- [evaluation(on:)](evaluation%28on_%29.md): Generates metrics by evaluating the object detector’s performance using annotated images in a data source.
- [trainingMetrics](trainingmetrics.md): Measurements of the object detector’s performance on the training dataset.
- [validationMetrics](validationmetrics.md): Measurements of the object detector’s performance on the validation dataset.
