> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/init(trainingdata:parameters:)](https://developer.apple.com/documentation/createml/mlactionclassifier/init(trainingdata:parameters:))

# init(trainingData:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates an action classifier with a training dataset represented by a data source.

## Declaration

```swift
init(trainingData: MLActionClassifier.DataSource, parameters: MLActionClassifier.ModelParameters = ModelParameters()) throws
```

## Parameters

- `trainingData`: A collection of labeled images represented by a data source.
- `parameters`: An [MLActionClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
