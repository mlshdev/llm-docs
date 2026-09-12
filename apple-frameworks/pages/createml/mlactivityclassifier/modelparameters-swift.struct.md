> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct)

# MLActivityClassifier.ModelParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 10.15+

Model training parameters that direct the training process for an activity classifier model.

## Declaration

```swift
struct ModelParameters
```

## Topics

### Creating parameters

- [init(validation:batchSize:maximumIterations:predictionWindowSize:)](modelparameters-swift.struct/init%28validation_batchsize_maximumiterations_predictionwindowsize_%29.md): Creates a set of activity classifier parameters that includes a validation dataset in a data source.
- [init(validationData:batchSize:maximumIterations:predictionWindowSize:)](modelparameters-swift.struct/init%28validationdata_batchsize_maximumiterations_predictionwindowsize_%29.md): Creates a set of activity classifier parameters that includes a validation dataset in a data source.
- [MLActivityClassifier.ModelParameters.Validation](modelparameters-swift.struct/validation-swift.enum.md): The source of a validation dataset for an activity classifier.

### Accessing the training parameters

- [validationData](modelparameters-swift.struct/validationdata.md): Deprecated. The activity classifier’s validation dataset.
- [batchSize](modelparameters-swift.struct/batchsize.md): The number of sequence chunks the training session uses per iteration.
- [maximumIterations](modelparameters-swift.struct/maximumiterations.md): The maximum number of iterations over the training data the training session uses.
- [predictionWindowSize](modelparameters-swift.struct/predictionwindowsize.md): The number of samples for each labeled activity.
- [validation](modelparameters-swift.struct/validation-swift.property.md): The validation data source.

### Describing parameters

- [description](modelparameters-swift.struct/description.md): A text representation of the activity-model parameters.
- [debugDescription](modelparameters-swift.struct/debugdescription.md): A text representation of the activity-model parameters that’s suitable for output during debugging.
- [playgroundDescription](modelparameters-swift.struct/playgrounddescription.md): A description of the activity-model parameters shown in a playground.

### Default Implementations

- [CustomDebugStringConvertible Implementations](modelparameters-swift.struct/customdebugstringconvertible-implementations.md)
- [CustomPlaygroundDisplayConvertible Implementations](modelparameters-swift.struct/customplaygrounddisplayconvertible-implementations.md)
- [CustomStringConvertible Implementations](modelparameters-swift.struct/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Supporting types

- [MLActivityClassifier.DataSource](datasource.md): A data source for an activity classifier.
