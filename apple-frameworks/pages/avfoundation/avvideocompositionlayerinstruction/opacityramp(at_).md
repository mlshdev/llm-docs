> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/opacityramp(at:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/opacityramp(at:))

# opacityRamp(at:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtains the opacity ramp that includes a specified time.

## Declaration

```swift
func opacityRamp(at time: CMTime) -> AVVideoCompositionLayerInstruction.OpacityRamp?
```

## See Also

### Getting opacity, transform, and cropping ramps

- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.CropRectangleRamp](croprectangleramp.md)
- [getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:)](getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.OpacityRamp](opacityramp.md)
- [getOpacityRamp(for:startOpacity:endOpacity:timeRange:)](getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.TransformRamp](transformramp.md)
- [getTransformRamp(for:start:end:timeRange:)](gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.
