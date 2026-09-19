> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlactionclassifier/init(trainingdata:parameters:)

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
