> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldecisiontreeregressor/resume(_:)

# resume(\_:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Resumes a training session from the last checkpoint if available.

## Declaration

```swift
static func resume(_ session: MLTrainingSession<MLDecisionTreeRegressor>) throws -> MLJob<MLDecisionTreeRegressor>
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

### Training a decision tree regressor asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a decision tree regressor.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [restoreTrainingSession(sessionParameters:)](restoretrainingsession%28sessionparameters_%29.md): Restores an existing training session.
