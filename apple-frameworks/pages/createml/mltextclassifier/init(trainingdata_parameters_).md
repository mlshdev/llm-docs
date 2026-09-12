> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltextclassifier/init(trainingdata:parameters:)](https://developer.apple.com/documentation/createml/mltextclassifier/init(trainingdata:parameters:))

# init(trainingData:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Creates a text classifier.

## Declaration

```swift
init(trainingData: MLTextClassifier.DataSource, parameters: MLTextClassifier.ModelParameters = ModelParameters(validation: .split(strategy: .automatic))) throws
```

## Parameters

- `trainingData`: A data source specifying the training data.
- `parameters`: Model training parameters.

## See Also

### Creating and training a text classifier

- [init(trainingData:textColumn:labelColumn:parameters:)](init%28trainingdata_textcolumn_labelcolumn_parameters_%29.md): Creates a text classifier.
- [MLTextClassifier.DataSource](datasource.md): A data source for a text classifier.
- [MLTextClassifier.ModelParameters](modelparameters-swift.struct.md): Parameters that specify model training parameters and validation data.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the text classifier used for training during initialization.
