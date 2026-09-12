> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/prediction](https://developer.apple.com/documentation/createml/mlhandactionclassifier/prediction)

# MLHandActionClassifier.Prediction

**Framework:** Create ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A collection of predictions, each paired with its confidence, for a range of video frames.

## Declaration

```swift
struct Prediction
```

## Topics

### Inspecting a prediction

- [results](prediction/results.md): An array of prediction labels and their confidences for a hand action.
- [frameRange](prediction/framerange.md): The range of frame rates the hand action classifier used to make its prediction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing a hand action classifier

- [prediction(from:)](prediction%28from_%29.md): Generates an array of hand-action predictions for a video.
- [predictions(from:)](predictions%28from_%29.md): Generates an array of hand action predictions for each video in a URL array.
