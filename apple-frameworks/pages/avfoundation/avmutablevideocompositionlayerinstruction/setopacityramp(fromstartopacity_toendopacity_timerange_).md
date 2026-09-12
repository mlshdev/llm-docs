> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/setopacityramp(fromstartopacity:toendopacity:timerange:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/setopacityramp(fromstartopacity:toendopacity:timerange:))

# setOpacityRamp(fromStartOpacity:toEndOpacity:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Sets an opacity ramp to apply during a specified time range.

> Use AVVideoCompositionLayerInstruction.Configuration instead

## Declaration

```swift
func setOpacityRamp(fromStartOpacity startOpacity: Float, toEndOpacity endOpacity: Float, timeRange: CMTimeRange)
```

## Parameters

- `startOpacity`: The opacity to be applied at the start time of `timeRange`. The value must be between `0.0` and `1.0`.
- `endOpacity`: The opacity to be applied at the end time of `timeRange`. The value must be between `0.0` and `1.0`.
- `timeRange`: The time range over which the value of the opacity is interpolated between `startOpacity` and `endOpacity`.

<a id="Discussion"></a>

## Discussion

During an opacity ramp, opacity is computed using a linear interpolation. Before the first time for which an opacity is set, the opacity is held constant at `1.0`; after the last specified time, the opacity is held constant at the last value.

## See Also

### Managing properties

- [setOpacity(\_:at:)](setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setTransform(\_:at:)](settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
- [setTransformRamp(fromStart:toEnd:timeRange:)](settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.

# setOpacityRampFromStartOpacity:toEndOpacity:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Sets an opacity ramp to apply during a specified time range.

## Declaration

```objectivec
- (void) setOpacityRampFromStartOpacity:(float) startOpacity toEndOpacity:(float) endOpacity timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `startOpacity`: The opacity to be applied at the start time of `timeRange`. The value must be between `0.0` and `1.0`.
- `endOpacity`: The opacity to be applied at the end time of `timeRange`. The value must be between `0.0` and `1.0`.
- `timeRange`: The time range over which the value of the opacity is interpolated between `startOpacity` and `endOpacity`.

<a id="Discussion"></a>

## Discussion

During an opacity ramp, opacity is computed using a linear interpolation. Before the first time for which an opacity is set, the opacity is held constant at `1.0`; after the last specified time, the opacity is held constant at the last value.

## See Also

### Managing properties

- [setOpacity:atTime:](setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setTransform:atTime:](settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
- [setTransformRampFromStartTransform:toEndTransform:timeRange:](settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.
