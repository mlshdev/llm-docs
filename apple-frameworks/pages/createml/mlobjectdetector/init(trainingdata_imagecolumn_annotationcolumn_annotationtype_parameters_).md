> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/init(trainingdata:imagecolumn:annotationcolumn:annotationtype:parameters:)](https://developer.apple.com/documentation/createml/mlobjectdetector/init(trainingdata:imagecolumn:annotationcolumn:annotationtype:parameters:))

# init(trainingData:imageColumn:annotationColumn:annotationType:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 13.0)

Creates an object detector with a data table.

> Use DataSource instead of MLDataTable when initializing.

## Declaration

```swift
init(trainingData: MLDataTable, imageColumn: String, annotationColumn: String, annotationType: MLObjectDetector.AnnotationType, parameters: MLObjectDetector.ModelParameters = ModelParameters()) throws
```

## Parameters

- `trainingData`: An [MLDataTable](../mldatatable.md) that contains the annotated images the task uses to train the object detector.
- `imageColumn`: The name of the column in the data table that contains the image file URLs.
- `annotationColumn`: The name of the column in the data table that contains the image annotations.
- `annotationType`: The format your data table uses for its image annotations.
- `parameters`: An [MLObjectDetector.ModelParameters](modelparameters-swift.struct.md) instance you use to set the model configuration settings for the training session.

<a id="discussion"></a>

## Discussion

Use this initializer to create an object detector with an [MLDataTable](../mldatatable.md).

## See Also

### Training an object detector synchronously

- [init(trainingData:parameters:annotationType:)](init%28trainingdata_parameters_annotationtype_%29.md): Creates an object detector with a data source.
