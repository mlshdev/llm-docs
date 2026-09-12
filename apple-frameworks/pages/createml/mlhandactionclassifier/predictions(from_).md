> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/predictions(from:)](https://developer.apple.com/documentation/createml/mlhandactionclassifier/predictions(from:))

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates an array of hand action predictions for each video in a URL array.

## Declaration

```swift
func predictions(from videos: [URL]) throws -> [[MLHandActionClassifier.Prediction]]
```

## Parameters

- `videos`: An array of video file URLs.

<a id="return-value"></a>

## Return Value

A array of prediction arrays. The index of each inner array corresponds to the video URL index in the input array.

## See Also

### Testing a hand action classifier

- [prediction(from:)](prediction%28from_%29.md): Generates an array of hand-action predictions for a video.
- [MLHandActionClassifier.Prediction](prediction.md): A collection of predictions, each paired with its confidence, for a range of video frames.
