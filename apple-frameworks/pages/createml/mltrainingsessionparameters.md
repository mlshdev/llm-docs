> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mltrainingsessionparameters](https://developer.apple.com/documentation/createml/mltrainingsessionparameters)

# MLTrainingSessionParameters

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The configuration settings for a training session.

## Declaration

```swift
struct MLTrainingSessionParameters
```

## Topics

### Creating a session’s parameters

- [init(sessionDirectory:reportInterval:checkpointInterval:iterations:)](mltrainingsessionparameters/init%28sessiondirectory_reportinterval_checkpointinterval_iterations_%29.md): Creates a set of parameters for a training session.

### Configuring the session’s parameters

- [sessionDirectory](mltrainingsessionparameters/sessiondirectory.md): The location in the file system where the session stores its progress.
- [reportInterval](mltrainingsessionparameters/reportinterval.md): The number of iterations the session completes before it reports its progress.
- [checkpointInterval](mltrainingsessionparameters/checkpointinterval.md): The number of iterations the session completes before it saves a checkpoint.
- [iterations](mltrainingsessionparameters/iterations.md): The maximum number of iterations for the training session.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model training Control

- [MLJob](mljob.md): The representation of a model’s asynchronous training session you use to monitor the session’s progress or terminate its execution.
- [MLTrainingSession](mltrainingsession.md): The current state of a model’s asynchronous training session.
- [MLCheckpoint](mlcheckpoint.md): The state of a model’s asynchronous training session at a specific point in time during the feature extraction or training phase.
