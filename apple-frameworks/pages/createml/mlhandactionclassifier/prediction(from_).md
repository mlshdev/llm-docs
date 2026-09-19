> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlhandactionclassifier/prediction(from:)

# prediction(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates an array of hand-action predictions for a video.

## Declaration

```swift
func prediction(from video: URL) throws -> [MLHandActionClassifier.Prediction]
```

## Parameters

- `video`: A video file URL.

## See Also

### Testing a hand action classifier

- [predictions(from:)](predictions%28from_%29.md): Generates an array of hand action predictions for each video in a URL array.
- [MLHandActionClassifier.Prediction](prediction.md): A collection of predictions, each paired with its confidence, for a range of video frames.
