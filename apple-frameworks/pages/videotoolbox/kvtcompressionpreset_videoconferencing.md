> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpreset_videoconferencing](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpreset_videoconferencing)

# kVTCompressionPreset_VideoConferencing (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
let kVTCompressionPreset_VideoConferencing: CFString
```

<a id="discussion"></a>

## Discussion

A preset to achieve low-latency encoding for real-time communication applications.

This preset requires setting kVTVideoEncoderSpecification_EnableLowLatencyRateControl to kCFBooleanTrue for encoding in the low-latency mode.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)

# kVTCompressionPreset_VideoConferencing (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPreset_VideoConferencing;
```

<a id="discussion"></a>

## Discussion

A preset to achieve low-latency encoding for real-time communication applications.

This preset requires setting kVTVideoEncoderSpecification_EnableLowLatencyRateControl to kCFBooleanTrue for encoding in the low-latency mode.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_ConsistentQuality.
```

## See Also

### Compression Presets

- [kVTCompressionPreset_Balanced](kvtcompressionpreset_balanced.md)
- [kVTCompressionPreset_HighQuality](kvtcompressionpreset_highquality.md)
- [kVTCompressionPreset_HighSpeed](kvtcompressionpreset_highspeed.md)
- [kVTCompressionPropertyKey_SupportedPresetDictionaries](kvtcompressionpropertykey_supportedpresetdictionaries.md)
