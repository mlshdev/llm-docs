> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlphase/inferencing](https://developer.apple.com/documentation/createml/mlphase/inferencing)

# MLPhase.inferencing

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The training session is using the model to make a prediction.

## Declaration

```swift
case inferencing
```

## See Also

### Retrieving session phases

- [MLPhase.initialized](initialized.md): The training session is in the initial idle state before extracting features and training.
- [MLPhase.extractingFeatures](extractingfeatures.md): The training session is extracting features from the training dataset.
- [MLPhase.training](training.md): The training session is training a model from the features it extracted from the training dataset.
- [MLPhase.evaluating](evaluating.md): The training session is evaluating the model it trained.
