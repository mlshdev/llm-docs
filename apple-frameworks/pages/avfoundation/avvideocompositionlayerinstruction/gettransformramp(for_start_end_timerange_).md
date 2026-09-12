> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/gettransformramp(for:start:end:timerange:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/gettransformramp(for:start:end:timerange:))

# getTransformRamp(for:start:end:timeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Obtains the transform ramp that includes a specified time.

## Declaration

```swift
func getTransformRamp(for time: CMTime, start startTransform: UnsafeMutablePointer<CGAffineTransform>?, end endTransform: UnsafeMutablePointer<CGAffineTransform>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startTransform`: A pointer to a float to receive the starting transform value for the transform ramp.

  This value may be `NULL`.
- `endTransform`: A pointer to a float to receive the ending transform value for the transform ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a `CMTimeRange` to receive the time range of the transform ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if values are returned successfully, otherwise [false](https://developer.apple.com/documentation/swift/false). [false](https://developer.apple.com/documentation/swift/false) is returned if `time` is beyond the duration of the last transform ramp that has been set.

## See Also

### Getting opacity, transform, and cropping ramps

- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.CropRectangleRamp](croprectangleramp.md)
- [getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:)](getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [opacityRamp(at:)](opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.OpacityRamp](opacityramp.md)
- [getOpacityRamp(for:startOpacity:endOpacity:timeRange:)](getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.TransformRamp](transformramp.md)

# getTransformRampForTime:startTransform:endTransform:timeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Obtains the transform ramp that includes a specified time.

## Declaration

```objectivec
- (BOOL) getTransformRampForTime:(CMTime) time startTransform:(CGAffineTransform *) startTransform endTransform:(CGAffineTransform *) endTransform timeRange:(CMTimeRange *) timeRange;
```

## Parameters

- `time`: If a ramp with a time range that contains the specified time has been set, information about the effective ramp for that time is supplied. Otherwise, information about the first ramp that starts after the specified time is supplied.
- `startTransform`: A pointer to a float to receive the starting transform value for the transform ramp.

  This value may be `NULL`.
- `endTransform`: A pointer to a float to receive the ending transform value for the transform ramp.

  This value may be `NULL`.
- `timeRange`: A pointer to a `CMTimeRange` to receive the time range of the transform ramp.

  This value may be `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if values are returned successfully, otherwise [false](https://developer.apple.com/documentation/swift/false). [false](https://developer.apple.com/documentation/swift/false) is returned if `time` is beyond the duration of the last transform ramp that has been set.

## See Also

### Getting opacity, transform, and cropping ramps

- [getCropRectangleRampForTime:startCropRectangle:endCropRectangle:timeRange:](getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [getOpacityRampForTime:startOpacity:endOpacity:timeRange:](getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
