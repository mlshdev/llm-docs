> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlcheckpoint](https://developer.apple.com/documentation/createml/mlcheckpoint)

# MLCheckpoint

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The state of a model’s asynchronous training session at a specific point in time during the feature extraction or training phase.

## Declaration

```swift
struct MLCheckpoint
```

## Topics

### Inspecting a checkpoint

- [phase](mlcheckpoint/phase.md): The training session’s phase when it created the checkpoint.
- [iteration](mlcheckpoint/iteration.md): The iteration number of a training session’s phase when it created the checkpoint.
- [date](mlcheckpoint/date.md): The time when the training session created the checkpoint.
- [url](mlcheckpoint/url.md): The location of the checkpoint in the file system.

### Assessing a checkpoint

- [metrics](mlcheckpoint/metrics.md): Measurements of the model’s performance at the time the session saved the checkpoint.
- [MLProgress.Metric](mlprogress/metric.md): Metrics you use to evaluate a model’s performance during a training session.

### Encoding and decoding a checkpoint

- [encode(to:)](mlcheckpoint/encode%28to_%29.md): Encodes the checkpoint into the encoder.
- [init(from:)](mlcheckpoint/init%28from_%29.md): Creates a new checkpoint by decoding from the decoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model training Control

- [MLJob](mljob.md): The representation of a model’s asynchronous training session you use to monitor the session’s progress or terminate its execution.
- [MLTrainingSession](mltrainingsession.md): The current state of a model’s asynchronous training session.
- [MLTrainingSessionParameters](mltrainingsessionparameters.md): The configuration settings for a training session.
