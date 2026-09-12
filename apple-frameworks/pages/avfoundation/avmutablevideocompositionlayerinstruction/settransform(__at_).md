> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/settransform(_:at:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/settransform(_:at:))

# setTransform(\_:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Sets the transform value at a time within the time range of the instruction.

> Use AVVideoCompositionLayerInstruction.Configuration instead

## Declaration

```swift
func setTransform(_ transform: CGAffineTransform, at time: CMTime)
```

## Parameters

- `transform`: The transform to be applied at `time`.
- `time`: A time value within the time range of the composition instruction.

<a id="Discussion"></a>

## Discussion

Sets a fixed transform to apply from the specified time until the next time at which a transform is set. This is the same as setting a flat ramp for that time range. Before the first specified time for which a transform is set, the affine transform is held constant at the value of [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md); after the last time for which a transform is set, the affine transform is held constant at that last value.

## See Also

### Managing properties

- [setOpacity(\_:at:)](setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setOpacityRamp(fromStartOpacity:toEndOpacity:timeRange:)](setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransformRamp(fromStart:toEnd:timeRange:)](settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.

# setTransform:atTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Sets the transform value at a time within the time range of the instruction.

## Declaration

```objectivec
- (void) setTransform:(CGAffineTransform) transform atTime:(CMTime) time;
```

## Parameters

- `transform`: The transform to be applied at `time`.
- `time`: A time value within the time range of the composition instruction.

<a id="Discussion"></a>

## Discussion

Sets a fixed transform to apply from the specified time until the next time at which a transform is set. This is the same as setting a flat ramp for that time range. Before the first specified time for which a transform is set, the affine transform is held constant at the value of [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md); after the last time for which a transform is set, the affine transform is held constant at that last value.

## See Also

### Managing properties

- [setOpacity:atTime:](setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setOpacityRampFromStartOpacity:toEndOpacity:timeRange:](setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransformRampFromStartTransform:toEndTransform:timeRange:](settransformramp%28fromstart_toend_timerange_%29.md): Deprecated. Sets a transform ramp to apply during a given time range.
