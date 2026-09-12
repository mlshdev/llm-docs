> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandposeclassifier/init(trainingdata:parameters:)](https://developer.apple.com/documentation/createml/mlhandposeclassifier/init(trainingdata:parameters:))

# init(trainingData:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a hand pose classifier by starting a synchronous training session.

## Declaration

```swift
init(trainingData: MLHandPoseClassifier.DataSource, parameters: MLHandPoseClassifier.ModelParameters = ModelParameters()) throws
```

## Parameters

- `trainingData`: An [MLHandPoseClassifier.DataSource](datasource.md) instance.
- `parameters`: An [MLHandPoseClassifier.ModelParameters](modelparameters-swift.struct.md) instance you use to configure the model for the training session.
