> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/prediction](https://developer.apple.com/documentation/createml/mlactionclassifier/prediction)

# MLActionClassifier.Prediction

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** macOS 11.0+

A collection of predictions, each paired with its confidence, for a range of video frames.

## Declaration

```swift
struct Prediction
```

## Topics

### Inspecting a prediction

- [results](prediction/results.md): An array of prediction labels and their confidences for an action.
- [frameRange](prediction/framerange.md): The range of frame rates the action classifier used to make its prediction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing an action classifier

- [prediction(from:)](prediction%28from_%29.md): Generates a prediction for each action the classifier recognizes in the video.
- [predictions(from:)](predictions%28from_%29.md): Generates a sequence of predictions for each video input.
