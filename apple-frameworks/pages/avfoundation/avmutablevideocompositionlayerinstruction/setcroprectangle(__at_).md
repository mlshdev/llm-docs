> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/setcroprectangle(_:at:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/setcroprectangle(_:at:))

# setCropRectangle(\_:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Sets the crop rectangle  value at a time within the time range of the instruction.

## Declaration

```swift
func setCropRectangle(_ cropRectangle: CGRect, at time: CMTime)
```

## Parameters

- `cropRectangle`: The crop rectangle to be applied at the specified time.
- `time`: A time value within the timeRange of the composition instruction.

<a id="Discussion"></a>

## Discussion

The origin of the crop rectangle is the top-left corner of the buffer clean aperture rectangle. The crop rectangle is defined in square pixel space, that is, without taking the pixel aspect ratio into account. Crop rectangles extending outside of the clean aperture, are cropped to the clean aperture.

Sets a fixed crop rectangle to apply from `time` until the next time at which a crop rectangle is set; this is the same as setting a flat ramp for that time range.

Before the first specified time for which a crop rectangle is set, the crop rectangle is held constant to [CGRectInfinite](../../coregraphics/cgrectinfinite.md) and after the last time for which a crop rectangle is set, the crop rectangle is held constant at that last value.

## See Also

### Setting crop rectangle values

- [setCropRectangleRamp(fromStartCropRectangle:toEndCropRectangle:timeRange:)](setcroprectangleramp%28fromstartcroprectangle_toendcroprectangle_timerange_%29.md): Deprecated. Sets a crop rectangle ramp to apply during the specified time range.

# setCropRectangle:atTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Sets the crop rectangle  value at a time within the time range of the instruction.

## Declaration

```objectivec
- (void) setCropRectangle:(CGRect) cropRectangle atTime:(CMTime) time;
```

## Parameters

- `cropRectangle`: The crop rectangle to be applied at the specified time.
- `time`: A time value within the timeRange of the composition instruction.

<a id="Discussion"></a>

## Discussion

The origin of the crop rectangle is the top-left corner of the buffer clean aperture rectangle. The crop rectangle is defined in square pixel space, that is, without taking the pixel aspect ratio into account. Crop rectangles extending outside of the clean aperture, are cropped to the clean aperture.

Sets a fixed crop rectangle to apply from `time` until the next time at which a crop rectangle is set; this is the same as setting a flat ramp for that time range.

Before the first specified time for which a crop rectangle is set, the crop rectangle is held constant to [CGRectInfinite](../../coregraphics/cgrectinfinite.md) and after the last time for which a crop rectangle is set, the crop rectangle is held constant at that last value.

## See Also

### Setting crop rectangle values

- [setCropRectangleRampFromStartCropRectangle:toEndCropRectangle:timeRange:](setcroprectangleramp%28fromstartcroprectangle_toendcroprectangle_timerange_%29.md): Deprecated. Sets a crop rectangle ramp to apply during the specified time range.
