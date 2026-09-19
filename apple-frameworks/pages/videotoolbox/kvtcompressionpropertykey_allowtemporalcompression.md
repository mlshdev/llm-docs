> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_allowtemporalcompression

# kVTCompressionPropertyKey_AllowTemporalCompression (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether temporal compression is enabled.

## Declaration

```swift
let kVTCompressionPropertyKey_AllowTemporalCompression: CFString
```

<a id="Discussion"></a>

## Discussion

The default value is `true`.  Set this `value` to false to require key-frame-only compression.

## See Also

### Frame Dependency

- [kVTCompressionPropertyKey_AllowFrameReordering](kvtcompressionpropertykey_allowframereordering.md): A Boolean value that indicates whether frame reordering is enabled.
- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.
- [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md): The maximum duration from one key frame to the next in seconds.

# kVTCompressionPropertyKey_AllowTemporalCompression (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether temporal compression is enabled.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_AllowTemporalCompression;
```

<a id="Discussion"></a>

## Discussion

The default value is `true`.  Set this `value` to false to require key-frame-only compression.

## See Also

### Frame Dependency

- [kVTCompressionPropertyKey_AllowFrameReordering](kvtcompressionpropertykey_allowframereordering.md): A Boolean value that indicates whether frame reordering is enabled.
- [kVTCompressionPropertyKey_AllowOpenGOP](kvtcompressionpropertykey_allowopengop.md): Enables Open GOP (Group Of Pictures) encoding.
- [kVTCompressionPropertyKey_MaxKeyFrameInterval](kvtcompressionpropertykey_maxkeyframeinterval.md): The maximum interval between key frames, also known as the key frame rate.
- [kVTCompressionPropertyKey_MaxKeyFrameIntervalDuration](kvtcompressionpropertykey_maxkeyframeintervalduration.md): The maximum duration from one key frame to the next in seconds.
