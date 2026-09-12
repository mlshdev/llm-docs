> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamconfiguration/preset](https://developer.apple.com/documentation/screencapturekit/scstreamconfiguration/preset)

# SCStreamConfiguration.Preset (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+

## Declaration

```swift
enum Preset
```

<a id="overview"></a>

## Overview

Client can use SCStreamConfigurationPreset to create SCStreamConfiguration with suggested values of properties for various use cases

## Topics

### Enumeration Cases

- [SCStreamConfiguration.Preset.captureHDRRecordingPreservedSDRHDR10](preset/capturehdrrecordingpreservedsdrhdr10.md)
- [SCStreamConfiguration.Preset.captureHDRScreenshotCanonicalDisplay](preset/capturehdrscreenshotcanonicaldisplay.md)
- [SCStreamConfiguration.Preset.captureHDRScreenshotLocalDisplay](preset/capturehdrscreenshotlocaldisplay.md)
- [SCStreamConfiguration.Preset.captureHDRStreamCanonicalDisplay](preset/capturehdrstreamcanonicaldisplay.md)
- [SCStreamConfiguration.Preset.captureHDRStreamLocalDisplay](preset/capturehdrstreamlocaldisplay.md)

### Initializers

- [init(rawValue:)](preset/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [SCCaptureDynamicRange](../sccapturedynamicrange.md): Specifies whether the captured screen output is standard or high dynamic range.

# SCStreamConfigurationPreset (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 15.0+

## Declaration

```objectivec
enum SCStreamConfigurationPreset : NSInteger;
```

<a id="overview"></a>

## Overview

Client can use SCStreamConfigurationPreset to create SCStreamConfiguration with suggested values of properties for various use cases

## Topics

### Enumeration Cases

- [SCStreamConfigurationPresetCaptureHDRRecordingPreservedSDRHDR10](preset/capturehdrrecordingpreservedsdrhdr10.md)
- [SCStreamConfigurationPresetCaptureHDRScreenshotCanonicalDisplay](preset/capturehdrscreenshotcanonicaldisplay.md)
- [SCStreamConfigurationPresetCaptureHDRScreenshotLocalDisplay](preset/capturehdrscreenshotlocaldisplay.md)
- [SCStreamConfigurationPresetCaptureHDRStreamCanonicalDisplay](preset/capturehdrstreamcanonicaldisplay.md)
- [SCStreamConfigurationPresetCaptureHDRStreamLocalDisplay](preset/capturehdrstreamlocaldisplay.md)

## See Also

### Enumerations

- [SCCaptureDynamicRange](../sccapturedynamicrange.md): Specifies whether the captured screen output is standard or high dynamic range.
