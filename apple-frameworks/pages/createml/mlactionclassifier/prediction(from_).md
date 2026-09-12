> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactionclassifier/prediction(from:)](https://developer.apple.com/documentation/createml/mlactionclassifier/prediction(from:))

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Generates a prediction for each action the classifier recognizes in the video.

## Declaration

```swift
func prediction(from video: URL) throws -> [MLActionClassifier.Prediction]
```

## Parameters

- `video`: The location of a video you want the action classifier to analyze.

<a id="return-value"></a>

## Return Value

An array of predictions.

## See Also

### Testing an action classifier

- [predictions(from:)](predictions%28from_%29.md): Generates a sequence of predictions for each video input.
- [MLActionClassifier.Prediction](prediction.md): A collection of predictions, each paired with its confidence, for a range of video frames.
