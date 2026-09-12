> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_supportedpresetdictionaries](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_supportedpresetdictionaries)

# kVTCompressionPropertyKey_SupportedPresetDictionaries (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
let kVTCompressionPropertyKey_SupportedPresetDictionaries: CFString
```

<a id="discussion"></a>

## Discussion

Where supported by video encoders, returns a dictionary whose keys are the available compression presets (prefixed by `kVTCompressionPreset_`) and the values are dictionaries containing the corresponding settings property key/value pairs.

Clients can select a compression preset for their encoding needs and use its encoder settings to configure the encoder. Clients may also use the encoder settings as a base configuration that they can customize as they require.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)

# kVTCompressionPropertyKey_SupportedPresetDictionaries (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_SupportedPresetDictionaries;
```

<a id="discussion"></a>

## Discussion

Where supported by video encoders, returns a dictionary whose keys are the available compression presets (prefixed by `kVTCompressionPreset_`) and the values are dictionaries containing the corresponding settings property key/value pairs.

Clients can select a compression preset for their encoding needs and use its encoder settings to configure the encoder. Clients may also use the encoder settings as a base configuration that they can customize as they require.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPreset_VideoConferencing](kvtcompressionpreset_videoconferencing.md)
