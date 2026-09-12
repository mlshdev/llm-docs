> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionlayerinstruction/transformramp](https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/transformramp)

# AVVideoCompositionLayerInstruction.TransformRamp

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct TransformRamp
```

## Topics

### Creating a transform ramp

- [init(timeRange:start:end:)](transformramp/init%28timerange_start_end_%29.md)

### Inspecting the transform ramp

- [end](transformramp/end.md)
- [start](transformramp/start.md)
- [timeRange](transformramp/timerange.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting opacity, transform, and cropping ramps

- [cropRectangleRamp(at:)](croprectangleramp%28at_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [AVVideoCompositionLayerInstruction.CropRectangleRamp](croprectangleramp.md)
- [getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:)](getcroprectangleramp%28for_startcroprectangle_endcroprectangle_timerange_%29.md): Obtains the crop rectangle ramp that includes the specified time.
- [opacityRamp(at:)](opacityramp%28at_%29.md): Obtains the opacity ramp that includes a specified time.
- [AVVideoCompositionLayerInstruction.OpacityRamp](opacityramp.md)
- [getOpacityRamp(for:startOpacity:endOpacity:timeRange:)](getopacityramp%28for_startopacity_endopacity_timerange_%29.md): Obtains the opacity ramp that includes a specified time.
- [transformRamp(at:)](transformramp%28at_%29.md): Obtains the transform ramp that includes a specified time.
- [getTransformRamp(for:start:end:timeRange:)](gettransformramp%28for_start_end_timerange_%29.md): Obtains the transform ramp that includes a specified time.
