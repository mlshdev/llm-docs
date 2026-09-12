> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpreset_highquality](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpreset_highquality)

# kVTCompressionPreset_HighQuality (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
let kVTCompressionPreset_HighQuality: CFString
```

<a id="discussion"></a>

## Discussion

A preset to achieve a high compression quality.

An encoder configured using this preset is expected to achieve a higher quality with a slower encoding than an encoder configured with the preset kVTCompressionPreset_Balanced or kVTCompressionPreset_HighSpeed. The presets kVTCompressionPreset_Balanced and kVTCompressionPreset_HighSpeed may be preferred for a faster encoding.

```
See also kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)

# kVTCompressionPreset_HighQuality (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPreset_HighQuality;
```

<a id="discussion"></a>

## Discussion

A preset to achieve a high compression quality.

An encoder configured using this preset is expected to achieve a higher quality with a slower encoding than an encoder configured with the preset kVTCompressionPreset_Balanced or kVTCompressionPreset_HighSpeed. The presets kVTCompressionPreset_Balanced and kVTCompressionPreset_HighSpeed may be preferred for a faster encoding.

```
See also kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)
