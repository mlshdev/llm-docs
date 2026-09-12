> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.enum](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/validation-swift.enum)

# MLActivityClassifier.ModelParameters.Validation

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

The source of a validation dataset for an activity classifier.

## Declaration

```swift
enum Validation
```

## Topics

### Specifying validation data

- [MLActivityClassifier.ModelParameters.Validation.split(strategy:)](validation-swift.enum/split%28strategy_%29.md): A validation dataset derived by randomly selecting a portion of the training data.
- [MLActivityClassifier.ModelParameters.Validation.dataSource(\_:)](validation-swift.enum/datasource%28__%29.md): A validation dataset represented by a data source.
- [MLActivityClassifier.ModelParameters.Validation.none](validation-swift.enum/none.md): An empty validation dataset that skips the model validation phase after training.

## See Also

### Creating parameters

- [init(validation:batchSize:maximumIterations:predictionWindowSize:)](init%28validation_batchsize_maximumiterations_predictionwindowsize_%29.md): Creates a set of activity classifier parameters that includes a validation dataset in a data source.
- [init(validationData:batchSize:maximumIterations:predictionWindowSize:)](init%28validationdata_batchsize_maximumiterations_predictionwindowsize_%29.md): Creates a set of activity classifier parameters that includes a validation dataset in a data source.
