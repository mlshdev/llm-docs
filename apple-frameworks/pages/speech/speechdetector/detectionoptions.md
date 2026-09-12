> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechdetector/detectionoptions](https://developer.apple.com/documentation/speech/speechdetector/detectionoptions)

# SpeechDetector.DetectionOptions

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allows clients to customize an instance of a speech detector.

## Declaration

```swift
struct DetectionOptions
```

## Parameters

- `sensitivityLevel`: One of [SpeechDetector.SensitivityLevel](sensitivitylevel.md). This value is used to determine how “aggressive” the voice activity detection (VAD) model will be.

## Topics

### Creating an options object

- [init(sensitivityLevel:)](detectionoptions/init%28sensitivitylevel_%29.md)

### Inspecting options

- [sensitivityLevel](detectionoptions/sensitivitylevel.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a detector

- [init()](init%28%29.md): Creates a speech detector with default settings.
- [init(detectionOptions:reportResults:)](init%28detectionoptions_reportresults_%29.md): Creates a speech detector.
- [SpeechDetector.SensitivityLevel](sensitivitylevel.md): Determines how “aggressive” the voice activity detection (VAD) model will be.
