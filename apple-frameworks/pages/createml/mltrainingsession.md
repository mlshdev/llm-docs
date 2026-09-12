> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsession](https://developer.apple.com/documentation/createml/mltrainingsession)

# MLTrainingSession

**Framework:** Create ML  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The current state of a model’s asynchronous training session.

## Declaration

```swift
final class MLTrainingSession<Task>
```

## Topics

### Checking a training session’s progress

- [phase](mltrainingsession/phase.md): The training session’s current state.
- [MLPhase](mlphase.md): The possible states of a training session.
- [iteration](mltrainingsession/iteration.md): The iteration number of a training session’s phase.
- [checkpoints](mltrainingsession/checkpoints.md): An array of checkpoints the training session has created so far.

### Removing checkpoints

- [removeCheckpoints(\_:)](mltrainingsession/removecheckpoints%28__%29.md): Removes the checkpoints that satisfy your closure from the training session.

### Reusing features from a previous session

- [reuseExtractedFeatures(from:)](mltrainingsession/reuseextractedfeatures%28from_%29.md): Uses the features another session has already extracted from its dataset.

### Inspecting a session

- [date](mltrainingsession/date.md): The time when you created this training session.
- [parameters](mltrainingsession/parameters.md): The parameters you used to create the training session.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model training Control

- [MLJob](mljob.md): The representation of a model’s asynchronous training session you use to monitor the session’s progress or terminate its execution.
- [MLTrainingSessionParameters](mltrainingsessionparameters.md): The configuration settings for a training session.
- [MLCheckpoint](mlcheckpoint.md): The state of a model’s asynchronous training session at a specific point in time during the feature extraction or training phase.
