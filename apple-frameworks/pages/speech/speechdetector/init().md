> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/speechdetector/init()

# init()

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a speech detector with default settings.

## Declaration

```swift
convenience init()
```

<a id="discussion"></a>

## Discussion

The default settings enable the VAD model with a value of [SpeechDetector.SensitivityLevel.medium](sensitivitylevel/medium.md) and do not report the VAD model’s moment-to-moment results in its result sequence.

## See Also

### Creating a detector

- [init(detectionOptions:reportResults:)](init%28detectionoptions_reportresults_%29.md): Creates a speech detector.
- [SpeechDetector.DetectionOptions](detectionoptions.md): Allows clients to customize an instance of a speech detector.
- [SpeechDetector.SensitivityLevel](sensitivitylevel.md): Determines how “aggressive” the voice activity detection (VAD) model will be.
