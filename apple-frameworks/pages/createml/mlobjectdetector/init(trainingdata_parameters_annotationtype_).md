> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/init(trainingdata:parameters:annotationtype:)](https://developer.apple.com/documentation/createml/mlobjectdetector/init(trainingdata:parameters:annotationtype:))

# init(trainingData:parameters:annotationType:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an object detector with a data source.

## Declaration

```swift
init(trainingData: MLObjectDetector.DataSource, parameters: MLObjectDetector.ModelParameters = .init(), annotationType: MLObjectDetector.AnnotationType) throws
```

## Parameters

- `trainingData`: A data source that contains the annotated images the task uses to train the object detector.
- `parameters`: An [MLObjectDetector.ModelParameters](modelparameters-swift.struct.md) instance you use to set the model configuration settings for the training session.
- `annotationType`: The format your data source uses for its image annotations.

<a id="discussion"></a>

## Discussion

Use this initializer to create an object detector with an [MLObjectDetector.DataSource](datasource.md).

## See Also

### Training an object detector synchronously

- [init(trainingData:imageColumn:annotationColumn:annotationType:parameters:)](init%28trainingdata_imagecolumn_annotationcolumn_annotationtype_parameters_%29.md): Deprecated. Creates an object detector with a data table.
