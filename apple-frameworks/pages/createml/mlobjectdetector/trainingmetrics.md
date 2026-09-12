> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/trainingmetrics](https://developer.apple.com/documentation/createml/mlobjectdetector/trainingmetrics)

# trainingMetrics

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

Measurements of the object detector’s performance on the training dataset.

## Declaration

```swift
var trainingMetrics: MLObjectDetectorMetrics { get }
```

## See Also

### Evaluating an object detector

- [evaluation(on:)](evaluation%28on_%29.md): Generates metrics by evaluating the object detector’s performance using annotated images in a data source.
- [evaluation(on:imageColumn:annotationColumn:)](evaluation%28on_imagecolumn_annotationcolumn_%29.md): Deprecated. Generates metrics by evaluating the object detector’s performance using annotated images in a data table.
- [validationMetrics](validationmetrics.md): Measurements of the object detector’s performance on the validation dataset.
