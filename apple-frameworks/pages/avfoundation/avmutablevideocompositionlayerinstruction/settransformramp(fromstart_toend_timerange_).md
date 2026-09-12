> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/settransformramp(fromstart:toend:timerange:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/settransformramp(fromstart:toend:timerange:))

# setTransformRamp(fromStart:toEnd:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Sets a transform ramp to apply during a given time range.

> Use AVVideoCompositionLayerInstruction.Configuration instead

## Declaration

```swift
func setTransformRamp(fromStart startTransform: CGAffineTransform, toEnd endTransform: CGAffineTransform, timeRange: CMTimeRange)
```

## Parameters

- `startTransform`: The transform to be applied at the starting time of `timeRange`.
- `endTransform`: The transform to be applied at the end time of `timeRange`.
- `timeRange`: The time range over which the value of the transform is interpolated between `startTransform` and `endTransform`.

<a id="Discussion"></a>

## Discussion

During a transform ramp, the affine transform is interpolated between the values set at the ramp’s start time and end time. Before the first specified time for which a transform is set, the affine transform is held constant at the value of [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md); after the last time for which a transform is set, the affine transform is held constant at that last value.

## See Also

### Managing properties

- [setOpacity(\_:at:)](setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setOpacityRamp(fromStartOpacity:toEndOpacity:timeRange:)](setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransform(\_:at:)](settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.

# setTransformRampFromStartTransform:toEndTransform:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Sets a transform ramp to apply during a given time range.

## Declaration

```objectivec
- (void) setTransformRampFromStartTransform:(CGAffineTransform) startTransform toEndTransform:(CGAffineTransform) endTransform timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `startTransform`: The transform to be applied at the starting time of `timeRange`.
- `endTransform`: The transform to be applied at the end time of `timeRange`.
- `timeRange`: The time range over which the value of the transform is interpolated between `startTransform` and `endTransform`.

<a id="Discussion"></a>

## Discussion

During a transform ramp, the affine transform is interpolated between the values set at the ramp’s start time and end time. Before the first specified time for which a transform is set, the affine transform is held constant at the value of [CGAffineTransformIdentity](../../coregraphics/cgaffinetransformidentity.md); after the last time for which a transform is set, the affine transform is held constant at that last value.

## See Also

### Managing properties

- [setOpacity:atTime:](setopacity%28__at_%29.md): Deprecated. Sets the opacity value at a specific time within the time range of the instruction.
- [setOpacityRampFromStartOpacity:toEndOpacity:timeRange:](setopacityramp%28fromstartopacity_toendopacity_timerange_%29.md): Deprecated. Sets an opacity ramp to apply during a specified time range.
- [setTransform:atTime:](settransform%28__at_%29.md): Deprecated. Sets the transform value at a time within the time range of the instruction.
