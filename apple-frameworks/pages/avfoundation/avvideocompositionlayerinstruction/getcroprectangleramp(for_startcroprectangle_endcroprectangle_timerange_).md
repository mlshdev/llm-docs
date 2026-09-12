> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/getcroprectangleramp(for:startcroprectangle:endcroprectangle:timerange:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getcroprectangleramp(for:startcroprectangle:endcroprectangle:timerange:))

# getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Obtains the crop rectangle ramp that includes the specified time.

## Declaration

```swift
func getCropRectangleRamp(for time: CMTime, startCropRectangle: UnsafeMutablePointer<CGRect>?, endCropRectangle: UnsafeMutablePointer<CGRect>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startCropRectangle`: A pointer to a `CGRect` to receive the starting crop rectangle value for the crop rectangle ramp.

  May be NULL.
- `endCropRectangle`: A pointer to a `CGRect` to receive the ending crop rectangle value for the crop rectangle ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a `CMTimeRange` to receive the time range of the crop rectangle ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) will be returned if the specified time is beyond the duration of the last crop rectangle ramp that has been set.

## See Also

### Getting opacity, transform, and cropping ramps

- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.CropRectangleRamp](croprectangleramp.md)
- [opacityRamp(at:)](opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.OpacityRamp](opacityramp.md)
- [getOpacityRamp(for:startOpacity:endOpacity:timeRange:)](getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.TransformRamp](transformramp.md)
- [getTransformRamp(for:start:end:timeRange:)](gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.

# getCropRectangleRampForTime:startCropRectangle:endCropRectangle:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Obtains the crop rectangle ramp that includes the specified time.

## Declaration

```objectivec
- (BOOL) getCropRectangleRampForTime:(CMTime) time startCropRectangle:(CGRect *) startCropRectangle endCropRectangle:(CGRect *) endCropRectangle timeRange:(CMTimeRange *) timeRange;
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startCropRectangle`: A pointer to a `CGRect` to receive the starting crop rectangle value for the crop rectangle ramp.

  May be NULL.
- `endCropRectangle`: A pointer to a `CGRect` to receive the ending crop rectangle value for the crop rectangle ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a `CMTimeRange` to receive the time range of the crop rectangle ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) will be returned if the specified time is beyond the duration of the last crop rectangle ramp that has been set.

## See Also

### Getting opacity, transform, and cropping ramps

- [getOpacityRampForTime:startOpacity:endOpacity:timeRange:](getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [getTransformRampForTime:startTransform:endTransform:timeRange:](gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.
