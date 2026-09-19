> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlsoundclassifier/predictions(from:overlapfactor:predictiontimewindowsize:)

# predictions(from:overlapFactor:predictionTimeWindowSize:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Generates predictions that use an overlap factor and time window size for an array of audio files.

## Declaration

```swift
func predictions(from audioFiles: [URL], overlapFactor: Double, predictionTimeWindowSize: TimeInterval) throws -> [String]
```

## Parameters

- `audioFiles`: An array of audio-file URLs you want the sound classifier to categorize.
- `overlapFactor`: The amount of overlap between successive analysis windows when the model analyzes a block of audio data.
- `predictionTimeWindowSize`: The duration of the audio buffer the method sends to the model for each prediction.

<a id="return-value"></a>

## Return Value

An array of prediction labels for the audio files.

## See Also

### Testing a sound classifier

- [predictions(from:)](predictions%28from_%29.md): Generates predictions for an array of audio files.
