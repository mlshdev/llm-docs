> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositionlayerinstruction/setcroprectangleramp(fromstartcroprectangle:toendcroprectangle:timerange:)](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/setcroprectangleramp(fromstartcroprectangle:toendcroprectangle:timerange:))

# setCropRectangleRamp(fromStartCropRectangle:toEndCropRectangle:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Sets a crop rectangle ramp to apply during the specified time range.

## Declaration

```swift
func setCropRectangleRamp(fromStartCropRectangle startCropRectangle: CGRect, toEndCropRectangle endCropRectangle: CGRect, timeRange: CMTimeRange)
```

## Parameters

- `startCropRectangle`: The crop rectangle to be applied at the starting time of the `timeRange`.
- `endCropRectangle`: The crop rectangle to be applied at the end time of the timeRange.
- `timeRange`: The time range over which the value of the opacity is interpolated between `startCropRectangle` and `endCropRectangle`.

<a id="Discussion"></a>

## Discussion

The origin of the crop rectangle is the top-left corner of the buffer clean aperture rectangle. The crop rectangle is defined in square pixel space, that is, without taking the pixel aspect ratio into account. Crop rectangles extending outside of the clean aperture, are cropped to the clean aperture.

During a crop rectangle ramp, the rectangle is interpolated between the values set at the ramp’s start time and end time. When the starting or ending rectangle is empty, interpolations take into account the origin and size of the empty rectangle.

Before the first specified time for which a crop rectangle is set, the crop rectangle is held constant to [CGRectInfinite](../../coregraphics/cgrectinfinite.md) and after the last time for which a crop rectangle is set, the crop rectangle is held constant at that last value.

## See Also

### Setting crop rectangle values

- [setCropRectangle(\_:at:)](setcroprectangle%28__at_%29.md): Deprecated. Sets the crop rectangle value at a time within the time range of the instruction.

# setCropRectangleRampFromStartCropRectangle:toEndCropRectangle:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Sets a crop rectangle ramp to apply during the specified time range.

## Declaration

```objectivec
- (void) setCropRectangleRampFromStartCropRectangle:(CGRect) startCropRectangle toEndCropRectangle:(CGRect) endCropRectangle timeRange:(CMTimeRange) timeRange;
```

## Parameters

- `startCropRectangle`: The crop rectangle to be applied at the starting time of the `timeRange`.
- `endCropRectangle`: The crop rectangle to be applied at the end time of the timeRange.
- `timeRange`: The time range over which the value of the opacity is interpolated between `startCropRectangle` and `endCropRectangle`.

<a id="Discussion"></a>

## Discussion

The origin of the crop rectangle is the top-left corner of the buffer clean aperture rectangle. The crop rectangle is defined in square pixel space, that is, without taking the pixel aspect ratio into account. Crop rectangles extending outside of the clean aperture, are cropped to the clean aperture.

During a crop rectangle ramp, the rectangle is interpolated between the values set at the ramp’s start time and end time. When the starting or ending rectangle is empty, interpolations take into account the origin and size of the empty rectangle.

Before the first specified time for which a crop rectangle is set, the crop rectangle is held constant to [CGRectInfinite](../../coregraphics/cgrectinfinite.md) and after the last time for which a crop rectangle is set, the crop rectangle is held constant at that last value.

## See Also

### Setting crop rectangle values

- [setCropRectangle:atTime:](setcroprectangle%28__at_%29.md): Deprecated. Sets the crop rectangle value at a time within the time range of the instruction.
