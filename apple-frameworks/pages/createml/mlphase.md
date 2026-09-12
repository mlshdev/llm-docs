> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlphase](https://developer.apple.com/documentation/createml/mlphase)

# MLPhase

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The possible states of a training session.

## Declaration

```swift
enum MLPhase
```

## Topics

### Retrieving session phases

- [MLPhase.initialized](mlphase/initialized.md): The training session is in the initial idle state before extracting features and training.
- [MLPhase.extractingFeatures](mlphase/extractingfeatures.md): The training session is extracting features from the training dataset.
- [MLPhase.training](mlphase/training.md): The training session is training a model from the features it extracted from the training dataset.
- [MLPhase.evaluating](mlphase/evaluating.md): The training session is evaluating the model it trained.
- [MLPhase.inferencing](mlphase/inferencing.md): The training session is using the model to make a prediction.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking a training session’s progress

- [phase](mltrainingsession/phase.md): The training session’s current state.
- [iteration](mltrainingsession/iteration.md): The iteration number of a training session’s phase.
- [checkpoints](mltrainingsession/checkpoints.md): An array of checkpoints the training session has created so far.
