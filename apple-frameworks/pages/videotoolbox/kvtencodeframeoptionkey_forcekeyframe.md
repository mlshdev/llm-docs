> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtencodeframeoptionkey_forcekeyframe](https://developer.apple.com/documentation/videotoolbox/kvtencodeframeoptionkey_forcekeyframe)

# kVTEncodeFrameOptionKey_ForceKeyFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Boolean value indicating whether the current frame is forced to be a key frame.

## Declaration

```swift
let kVTEncodeFrameOptionKey_ForceKeyFrame: CFString
```

<a id="Discussion"></a>

## Discussion

This value is set in the `frameProperties` dictionary passed to [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md); it determines whether the current frame is forced to be a keyframe or not. Note that it may not be possible for the encoder to accommodate all requests.

## See Also

### Per-Frame Configuration

- [kVTEncodeFrameOptionKey_BaseFrameQP](kvtencodeframeoptionkey_baseframeqp.md)

# kVTEncodeFrameOptionKey_ForceKeyFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Boolean value indicating whether the current frame is forced to be a key frame.

## Declaration

```objectivec
extern CFStringRef const kVTEncodeFrameOptionKey_ForceKeyFrame;
```

<a id="Discussion"></a>

## Discussion

This value is set in the `frameProperties` dictionary passed to [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md); it determines whether the current frame is forced to be a keyframe or not. Note that it may not be possible for the encoder to accommodate all requests.

## See Also

### Per-Frame Configuration

- [kVTEncodeFrameOptionKey_BaseFrameQP](kvtencodeframeoptionkey_baseframeqp.md)
