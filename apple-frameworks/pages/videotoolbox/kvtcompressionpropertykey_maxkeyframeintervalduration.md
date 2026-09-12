> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_maxkeyframeintervalduration](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_maxkeyframeintervalduration)

# kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum duration from one key frame to the next in seconds.

## Declaration

```swift
let kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration: CFString
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which means no limit.  This property is particularly useful when the frame rate is variable. See [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md) for more discussion of key frames.

This key can be set in conjunction with [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md), which requires a keyframe every `X` frames or every `Y` seconds, whichever comes first.

## See Also

### Frame Dependency

- [kVTCompressionPropertyKey_AllowFrameReordering](kvtcompressionpropertykey_allowframereordering.md): A Boolean value that indicates whether frame reordering is enabled.
- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_AllowTemporalCompression](kvtcompressionpropertykey_allowtemporalcompression.md): A Boolean value indicating whether temporal compression is enabled.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.

# kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The maximum duration from one key frame to the next in seconds.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which means no limit.  This property is particularly useful when the frame rate is variable. See [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md) for more discussion of key frames.

This key can be set in conjunction with [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md), which requires a keyframe every `X` frames or every `Y` seconds, whichever comes first.

## See Also

### Frame Dependency

- [kVTCompressionPropertyKey_AllowFrameReordering](kvtcompressionpropertykey_allowframereordering.md): A Boolean value that indicates whether frame reordering is enabled.
- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_AllowTemporalCompression](kvtcompressionpropertykey_allowtemporalcompression.md): A Boolean value indicating whether temporal compression is enabled.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.
