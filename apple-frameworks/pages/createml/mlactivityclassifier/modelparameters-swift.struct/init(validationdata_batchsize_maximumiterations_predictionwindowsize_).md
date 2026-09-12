> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.struct/init(validationdata:batchsize:maximumiterations:predictionwindowsize:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.struct/init(validationdata:batchsize:maximumiterations:predictionwindowsize:))

# init(validationData:batchSize:maximumIterations:predictionWindowSize:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a set of activity classifier parameters that includes a validation dataset in a data source.

## Declaration

```swift
init(validationData: MLActivityClassifier.DataSource, batchSize: Int? = 32, maximumIterations: Int? = 10, predictionWindowSize: Int? = 100)
```

## Parameters

- `validationData`: An [MLActivityClassifier.DataSource](../datasource.md) instance that contains a validation dataset.
- `batchSize`: The number of activity entries the training session uses for each of its training iterations.
- `maximumIterations`: The largest number of training iterations the training session can use.
- `predictionWindowSize`: The number of time increments the training session uses to train an activity classifier.

## See Also

### Creating parameters

- [init(validation:batchSize:maximumIterations:predictionWindowSize:)](init%28validation_batchsize_maximumiterations_predictionwindowsize_%29.md): Creates a set of activity classifier parameters that includes a validation dataset in a data source.
- [MLActivityClassifier.ModelParameters.Validation](validation-swift.enum.md): The source of a validation dataset for an activity classifier.
