> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/setopacity(_:at:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/setopacity(_:at:))

# setOpacity(\_:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Sets the opacity value at a specific time within the time range of the instruction.

> Use AVVideoCompositionLayerInstruction.Configuration instead

## Declaration

```swift
func setOpacity(_ opacity: Float, at time: CMTime)
```

## Parameters

- `opacity`: The opacity to be applied at `time`. The value must be between `0.0` and `1.0`.
- `time`: A time value within the time range of the composition instruction.

<a id="Discussion"></a>

## Discussion

Sets a fixed opacity to apply from the specified time until the next time at which an opacity is set; this is the same as setting a flat ramp for that time range. Before the first time for which an opacity is set, the opacity is held constant at `1.0`; after the last specified time, the opacity is held constant at the last value.

## See Also

### Managing properties

- [setOpacityRamp(fromStartOpacity:toEndOpacity:timeRange:)](setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransform(\_:at:)](settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
- [setTransformRamp(fromStart:toEnd:timeRange:)](settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.

# setOpacity:atTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Sets the opacity value at a specific time within the time range of the instruction.

## Declaration

```objectivec
- (void) setOpacity:(float) opacity atTime:(CMTime) time;
```

## Parameters

- `opacity`: The opacity to be applied at `time`. The value must be between `0.0` and `1.0`.
- `time`: A time value within the time range of the composition instruction.

<a id="Discussion"></a>

## Discussion

Sets a fixed opacity to apply from the specified time until the next time at which an opacity is set; this is the same as setting a flat ramp for that time range. Before the first time for which an opacity is set, the opacity is held constant at `1.0`; after the last specified time, the opacity is held constant at the last value.

## See Also

### Managing properties

- [setOpacityRampFromStartOpacity:toEndOpacity:timeRange:](setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransform:atTime:](settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
- [setTransformRampFromStartTransform:toEndTransform:timeRange:](settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.
