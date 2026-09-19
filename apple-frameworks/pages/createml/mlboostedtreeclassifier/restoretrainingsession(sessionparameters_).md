> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlboostedtreeclassifier/restoretrainingsession(sessionparameters:)

# restoreTrainingSession(sessionParameters:)

**Framework:** Create ML  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Restores an existing training session.

## Declaration

```swift
static func restoreTrainingSession(sessionParameters: MLTrainingSessionParameters) throws -> MLTrainingSession<MLBoostedTreeClassifier>
```

## Parameters

- `sessionParameters`: Training session parameters.

<a id="return-value"></a>

## Return Value

A `MLTrainingSession` that can be used to resume training.

<a id="discussion"></a>

## Discussion

The method requires the a valid [sessionDirectory](../mltrainingsessionparameters/sessiondirectory.md) parameter.

## See Also

### Training a boosted tree classifier asynchronously

- [train(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](train%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Trains a boosted tree classifier.
- [makeTrainingSession(trainingData:targetColumn:featureColumns:parameters:sessionParameters:)](maketrainingsession%28trainingdata_targetcolumn_featurecolumns_parameters_sessionparameters_%29.md): Creates or restores a training session.
- [resume(\_:)](resume%28__%29.md): Resumes a training session from the last checkpoint if available.
