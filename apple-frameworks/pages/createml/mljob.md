> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mljob](https://developer.apple.com/documentation/createml/mljob)

# MLJob

**Framework:** Create ML  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The representation of a model’s asynchronous training session you use to monitor the session’s progress or terminate its execution.

## Declaration

```swift
final class MLJob<Result>
```

## Topics

### Receiving progress updates

- [checkpoints](mljob/checkpoints.md): A publisher that sends a checkpoint for each of the session’s checkpoint intervals.
- [result](mljob/result.md): A publisher that provides a result when the training session has finished.
- [phase](mljob/phase.md): Phase publisher.

### Managing a job

- [cancel()](mljob/cancel%28%29.md): Stops the training session’s execution.
- [isCanceled](mljob/iscanceled.md): A Boolean value that indicates whether you canceled the job.

### Inspecting a job

- [startDate](mljob/startdate.md): The date and time when the training session began.
- [progress](mljob/progress.md): The training session’s current progress.
- [MLProgress](mlprogress.md): A convenience type that exposes information about the progress of a training session.

## Relationships

### Conforms To

- [Cancellable](../combine/cancellable.md)

## See Also

### Model training Control

- [MLTrainingSession](mltrainingsession.md): The current state of a model’s asynchronous training session.
- [MLTrainingSessionParameters](mltrainingsessionparameters.md): The configuration settings for a training session.
- [MLCheckpoint](mlcheckpoint.md): The state of a model’s asynchronous training session at a specific point in time during the feature extraction or training phase.
