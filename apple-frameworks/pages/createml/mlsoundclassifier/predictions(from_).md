> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlsoundclassifier/predictions(from:)

# predictions(from:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

Generates predictions for an array of audio files.

## Declaration

```swift
func predictions(from audioFiles: [URL]) throws -> [String]
```

## Parameters

- `audioFiles`: An array of audio-file URLs you want the sound classifier to categorize.

<a id="return-value"></a>

## Return Value

An array of prediction labels for the audio files.

## See Also

### Testing a sound classifier

- [predictions(from:overlapFactor:predictionTimeWindowSize:)](predictions%28from_overlapfactor_predictiontimewindowsize_%29.md): Generates predictions that use an overlap factor and time window size for an array of audio files.
