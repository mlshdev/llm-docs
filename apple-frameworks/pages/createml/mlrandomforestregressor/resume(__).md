> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrandomforestregressor/resume(_:)](https://developer.apple.com/documentation/createml/mlrandomforestregressor/resume(_:))

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Resumes a training session from the last checkpoint if available.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLRandomForestRegressor>) throws -> MLJob<MLRandomForestRegressor>
```

## Parameters

- `session`: Loaded or new training session.

<a id="return-value"></a>

## Return Value

A `MLJob` that can be used to observe training progress.

<a id="discussion"></a>

## Discussion

If there are no resumable checkpoints training starts over from the beginning.

## See Also

### Training a random forest regressor

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a random forest regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.
