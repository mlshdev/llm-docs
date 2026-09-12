> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avoutputsettingspreset](https://developer.apple.com/documentation/avfoundation/avoutputsettingspreset)

# AVOutputSettingsPreset (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines preset configurations for an output settings assistant.

## Declaration

```swift
struct AVOutputSettingsPreset
```

## Topics

### Presets

- [preset640x480](avoutputsettingspreset/preset640x480.md): A preset for H.264 video at 640 by 480 pixels.
- [preset960x540](avoutputsettingspreset/preset960x540.md): A preset for H.264 video at 960 by 540 pixels.
- [preset1280x720](avoutputsettingspreset/preset1280x720.md): A preset for H.264 video at 1280 by 720 pixels.
- [preset1920x1080](avoutputsettingspreset/preset1920x1080.md): A preset for H.264 video at 1920 by 1080 pixels.
- [preset3840x2160](avoutputsettingspreset/preset3840x2160.md): A preset for H.264 video at 3840 by 2160 pixels.
- [hevc1920x1080WithAlpha](avoutputsettingspreset/hevc1920x1080withalpha.md): A preset for HEVC with Alpha video at 1920 by 1080 pixels.
- [hevc1920x1080](avoutputsettingspreset/hevc1920x1080.md): A preset for HEVC video at 1920 by 1080 pixels.
- [hevc3840x2160WithAlpha](avoutputsettingspreset/hevc3840x2160withalpha.md): A preset for HEVC with Alpha video at 3840 by 2160 pixels.
- [hevc3840x2160](avoutputsettingspreset/hevc3840x2160.md): A preset for HEVC video at 3840 by 2160 pixels.
- [hevc4320x2160](avoutputsettingspreset/hevc4320x2160.md)
- [hevc7680x4320](avoutputsettingspreset/hevc7680x4320.md): A preset for HEVC video at 7680 by 4320 pixels.
- [mvhevc1440x1440](avoutputsettingspreset/mvhevc1440x1440.md): A preset for MV-HEVC video at 1440 by 1440 pixels.
- [mvhevc4320x4320](avoutputsettingspreset/mvhevc4320x4320.md)
- [mvhevc7680x7680](avoutputsettingspreset/mvhevc7680x7680.md)
- [mvhevc960x960](avoutputsettingspreset/mvhevc960x960.md): A preset for MV-HEVC video at 960 by 960 pixels.

### Initializers

- [init(rawValue:)](avoutputsettingspreset/init%28rawvalue_%29.md): Creates a preset with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an assistant

- [init(preset:)](avoutputsettingsassistant/init%28preset_%29.md): Creates an output setting assistant with a preset configuration.
- [availableOutputSettingsPresets()](avoutputsettingsassistant/availableoutputsettingspresets%28%29.md): Returns an array of preset values to use to initialize an output settings assistant.

# AVOutputSettingsPreset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines preset configurations for an output settings assistant.

## Declaration

```objectivec
typedef NSString * AVOutputSettingsPreset;
```

## Topics

### Presets

- [AVOutputSettingsPreset640x480](avoutputsettingspreset/preset640x480.md): A preset for H.264 video at 640 by 480 pixels.
- [AVOutputSettingsPreset960x540](avoutputsettingspreset/preset960x540.md): A preset for H.264 video at 960 by 540 pixels.
- [AVOutputSettingsPreset1280x720](avoutputsettingspreset/preset1280x720.md): A preset for H.264 video at 1280 by 720 pixels.
- [AVOutputSettingsPreset1920x1080](avoutputsettingspreset/preset1920x1080.md): A preset for H.264 video at 1920 by 1080 pixels.
- [AVOutputSettingsPreset3840x2160](avoutputsettingspreset/preset3840x2160.md): A preset for H.264 video at 3840 by 2160 pixels.
- [AVOutputSettingsPresetHEVC1920x1080WithAlpha](avoutputsettingspreset/hevc1920x1080withalpha.md): A preset for HEVC with Alpha video at 1920 by 1080 pixels.
- [AVOutputSettingsPresetHEVC1920x1080](avoutputsettingspreset/hevc1920x1080.md): A preset for HEVC video at 1920 by 1080 pixels.
- [AVOutputSettingsPresetHEVC3840x2160WithAlpha](avoutputsettingspreset/hevc3840x2160withalpha.md): A preset for HEVC with Alpha video at 3840 by 2160 pixels.
- [AVOutputSettingsPresetHEVC3840x2160](avoutputsettingspreset/hevc3840x2160.md): A preset for HEVC video at 3840 by 2160 pixels.
- [AVOutputSettingsPresetHEVC4320x2160](avoutputsettingspreset/hevc4320x2160.md)
- [AVOutputSettingsPresetHEVC7680x4320](avoutputsettingspreset/hevc7680x4320.md): A preset for HEVC video at 7680 by 4320 pixels.
- [AVOutputSettingsPresetMVHEVC1440x1440](avoutputsettingspreset/mvhevc1440x1440.md): A preset for MV-HEVC video at 1440 by 1440 pixels.
- [AVOutputSettingsPresetMVHEVC4320x4320](avoutputsettingspreset/mvhevc4320x4320.md)
- [AVOutputSettingsPresetMVHEVC7680x7680](avoutputsettingspreset/mvhevc7680x7680.md)
- [AVOutputSettingsPresetMVHEVC960x960](avoutputsettingspreset/mvhevc960x960.md): A preset for MV-HEVC video at 960 by 960 pixels.

## See Also

### Creating an assistant

- [outputSettingsAssistantWithPreset:](avoutputsettingsassistant/init%28preset_%29.md): Creates an output setting assistant with a preset configuration.
- [availableOutputSettingsPresets](avoutputsettingsassistant/availableoutputsettingspresets%28%29.md): Returns an array of preset values to use to initialize an output settings assistant.
