> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpreset_highspeed](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpreset_highspeed)

# kVTCompressionPreset_HighSpeed (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
let kVTCompressionPreset_HighSpeed: CFString
```

<a id="discussion"></a>

## Discussion

A preset to provide a high-speed encoding.

An encoder configured using this preset is expected to achieve a faster encoding at a lower compression quality than an encoder configured with the preset kVTCompressionPreset_HighQuality or kVTCompressionPreset_Balanced. The presets kVTCompressionPreset_HighQuality and kVTCompressionPreset_Balanced may be preferred for a higher compression quality.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)

# kVTCompressionPreset_HighSpeed (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPreset_HighSpeed;
```

<a id="discussion"></a>

## Discussion

A preset to provide a high-speed encoding.

An encoder configured using this preset is expected to achieve a faster encoding at a lower compression quality than an encoder configured with the preset kVTCompressionPreset_HighQuality or kVTCompressionPreset_Balanced. The presets kVTCompressionPreset_HighQuality and kVTCompressionPreset_Balanced may be preferred for a higher compression quality.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)
