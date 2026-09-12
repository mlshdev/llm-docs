> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldecisiontreeregressor/restoretrainingsession(sessionparameters:)](https://developer.apple.com/documentation/createml/mldecisiontreeregressor/restoretrainingsession(sessionparameters:))

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Restores an existing training session.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLDecisionTreeRegressor>
```

## Parameters

- `sessionParameters`: Training session parameters. The method requires the a valid [sessionDirectory](../mltrainingsessionparameters/sessiondirectory.md) parameter.

<a id="return-value"></a>

## Return Value

A `MLTrainingSession` that can be used to resume training.

## See Also

### Training a decision tree regressor asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a decision tree regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](resume%28__%29.md): Resumes a training session from the last checkpoint if available.
