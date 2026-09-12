> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpreset_balanced](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpreset_balanced)

# kVTCompressionPreset_Balanced (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
let kVTCompressionPreset_Balanced: CFString
```

<a id="discussion"></a>

## Discussion

A preset to provide a balanced compression quality and encoding speed.

An encoder configured using this preset is expected to achieve a higher quality than an encoder configured with the preset kVTCompressionPreset_HighSpeed. The preset kVTCompressionPreset_HighSpeed may be preferred for a faster encoding. The preset kVTCompressionPreset_HighQuality may be preferred for a higher compression quality.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)

# kVTCompressionPreset_Balanced (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPreset_Balanced;
```

<a id="discussion"></a>

## Discussion

A preset to provide a balanced compression quality and encoding speed.

An encoder configured using this preset is expected to achieve a higher quality than an encoder configured with the preset kVTCompressionPreset_HighSpeed. The preset kVTCompressionPreset_HighSpeed may be preferred for a faster encoding. The preset kVTCompressionPreset_HighQuality may be preferred for a higher compression quality.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)
