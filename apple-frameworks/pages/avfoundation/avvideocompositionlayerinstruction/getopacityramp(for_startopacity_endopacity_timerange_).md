> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:))

# getOpacityRamp(for:startOpacity:endOpacity:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Obtains the opacity ramp that includes a specified time.

## Declaration

```swift
func getOpacityRamp(for time: CMTime, startOpacity: UnsafeMutablePointer<Float>?, endOpacity: UnsafeMutablePointer<Float>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startOpacity`: A pointer to a float to receive the starting opacity value for the opacity ramp.

  This value may be `NULL`.
- `endOpacity`: A pointer to a float to receive the ending opacity value for the opacity ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a `CMTimeRange` to receive the time range of the opacity ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if values are returned successfully, otherwise [false](https://developer.apple.com/documentation/swift/false). [false](https://developer.apple.com/documentation/swift/false) is returned if `time` is beyond the duration of the last opacity ramp that has been set.

## See Also

### Getting opacity, transform, and cropping ramps

- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.CropRectangleRamp](croprectangleramp.md)
- [getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:)](getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [opacityRamp(at:)](opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.OpacityRamp](opacityramp.md)
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.TransformRamp](transformramp.md)
- [getTransformRamp(for:start:end:timeRange:)](gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.

# getOpacityRampForTime:startOpacity:endOpacity:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Obtains the opacity ramp that includes a specified time.

## Declaration

```objectivec
- (BOOL) getOpacityRampForTime:(CMTime) time startOpacity:(float *) startOpacity endOpacity:(float *) endOpacity timeRange:(CMTimeRange *) timeRange;
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startOpacity`: A pointer to a float to receive the starting opacity value for the opacity ramp.

  This value may be `NULL`.
- `endOpacity`: A pointer to a float to receive the ending opacity value for the opacity ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a `CMTimeRange` to receive the time range of the opacity ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if values are returned successfully, otherwise [false](https://developer.apple.com/documentation/swift/false). [false](https://developer.apple.com/documentation/swift/false) is returned if `time` is beyond the duration of the last opacity ramp that has been set.

## See Also

### Getting opacity, transform, and cropping ramps

- [getCropRectangleRampForTime:startCropRectangle:endCropRectangle:timeRange:](getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [getTransformRampForTime:startTransform:endTransform:timeRange:](gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.
