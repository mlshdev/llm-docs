> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechdetector/sensitivitylevel](https://developer.apple.com/documentation/speech/speechdetector/sensitivitylevel)

# SpeechDetector.SensitivityLevel

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines how “aggressive” the voice activity detection (VAD) model will be.

## Declaration

```swift
enum SensitivityLevel
```

<a id="overview"></a>

## Overview

[SpeechDetector.SensitivityLevel.low](sensitivitylevel/low.md) will allow for a more “forgiving” VAD model, whereas selecting [SpeechDetector.SensitivityLevel.high](sensitivitylevel/high.md) will make the model more aggressive. [SpeechDetector.SensitivityLevel.medium](sensitivitylevel/medium.md) is the recommended level for most use cases.

## Topics

### Sensitivity levels

- [SpeechDetector.SensitivityLevel.high](sensitivitylevel/high.md)
- [SpeechDetector.SensitivityLevel.low](sensitivitylevel/low.md)
- [SpeechDetector.SensitivityLevel.medium](sensitivitylevel/medium.md)

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a detector

- [init()](init%28%29.md): Creates a speech detector with default settings.
- [init(detectionOptions:reportResults:)](init%28detectionoptions_reportresults_%29.md): Creates a speech detector.
- [SpeechDetector.DetectionOptions](detectionoptions.md): Allows clients to customize an instance of a speech detector.
