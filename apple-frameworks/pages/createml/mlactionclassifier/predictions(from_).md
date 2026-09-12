> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/predictions(from:)](https://developer.apple.com/documentation/createml/mlactionclassifier/predictions(from:))

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Generates a sequence of predictions for each video input.

## Declaration

```swift
func predictions(from videos: [URL]) throws -> [[MLActionClassifier.Prediction]]
```

## Parameters

- `videos`: An array of locations to videos you want the action classifier to analyze.

<a id="return-value"></a>

## Return Value

A array of prediction arrays. The index of each inner array corresponds to the video index in the input array.

## See Also

### Testing an action classifier

- [prediction(from:)](prediction%28from_%29.md): Generates a prediction for each action the classifier recognizes in the video.
- [MLActionClassifier.Prediction](prediction.md): A collection of predictions, each paired with its confidence, for a range of video frames.
