> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_allowframereordering](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_allowframereordering)

# kVTCompressionPropertyKey_AllowFrameReordering (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether frame reordering is enabled.

## Declaration

```swift
let kVTCompressionPropertyKey_AllowFrameReordering: CFString
```

<a id="Discussion"></a>

## Discussion

In order to encode B frames, a video encoder must reorder frames, which means that the order in which the frames are emitted and stored (the decode order) is different from the order in which they were presented to the video encoder (the display order).  The default value is `true`.  Set this value to `false` to prevent frame reordering.

## See Also

### Frame Dependency

- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_AllowTemporalCompression](kvtcompressionpropertykey_allowtemporalcompression.md): A Boolean value indicating whether temporal compression is enabled.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.
- [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md): The maximum duration from one key frame to the next in seconds.

# kVTCompressionPropertyKey_AllowFrameReordering (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether frame reordering is enabled.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_AllowFrameReordering;
```

<a id="Discussion"></a>

## Discussion

In order to encode B frames, a video encoder must reorder frames, which means that the order in which the frames are emitted and stored (the decode order) is different from the order in which they were presented to the video encoder (the display order).  The default value is `true`.  Set this value to `false` to prevent frame reordering.

## See Also

### Frame Dependency

- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_AllowTemporalCompression](kvtcompressionpropertykey_allowtemporalcompression.md): A Boolean value indicating whether temporal compression is enabled.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.
- [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md): The maximum duration from one key frame to the next in seconds.
