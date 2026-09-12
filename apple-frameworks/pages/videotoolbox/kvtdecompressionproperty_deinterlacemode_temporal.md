> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionproperty_deinterlacemode_temporal](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionproperty_deinterlacemode_temporal)

# kVTDecompressionProperty_DeinterlaceMode_Temporal (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A temporal deinterlace mode.

## Declaration

```swift
let kVTDecompressionProperty_DeinterlaceMode_Temporal: CFString
```

<a id="Discussion"></a>

## Discussion

Applies a filter that uses a window of multiple frames to generate deinterlaced results, and provides a better result at the expense of a pipeline delay.

This mode is only used if [kVTDecodeFrame_EnableTemporalProcessing](vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing.md) is set, otherwise a non-temporal mode will be used instead.

## See Also

### Deinterlace Modes

- [kVTDecompressionProperty_DeinterlaceMode_VerticalFilter](kvtdecompressionproperty_deinterlacemode_verticalfilter.md): A vertical filter deinterlace mode.

# kVTDecompressionProperty_DeinterlaceMode_Temporal (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A temporal deinterlace mode.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionProperty_DeinterlaceMode_Temporal;
```

<a id="Discussion"></a>

## Discussion

Applies a filter that uses a window of multiple frames to generate deinterlaced results, and provides a better result at the expense of a pipeline delay.

This mode is only used if [kVTDecodeFrame_EnableTemporalProcessing](vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing.md) is set, otherwise a non-temporal mode will be used instead.

## See Also

### Deinterlace Modes

- [kVTDecompressionProperty_DeinterlaceMode_VerticalFilter](kvtdecompressionproperty_deinterlacemode_verticalfilter.md): A vertical filter deinterlace mode.
