> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxspatialscalercolorprocessingmode](https://developer.apple.com/documentation/metalfx/mtlfxspatialscalercolorprocessingmode)

# MTLFXSpatialScalerColorProcessingMode (Swift)

**Framework:** MetalFX  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The color space modes for the input and output textures you use with a spatial scaling effect instance.

## Declaration

```swift
enum MTLFXSpatialScalerColorProcessingMode
```

## Topics

### Color space modes

- [MTLFXSpatialScalerColorProcessingMode.linear](mtlfxspatialscalercolorprocessingmode/linear.md): Indicates your input and output textures use a linear color space.
- [MTLFXSpatialScalerColorProcessingMode.perceptual](mtlfxspatialscalercolorprocessingmode/perceptual.md): Indicates your input and output textures use a perceptual color space.
- [MTLFXSpatialScalerColorProcessingMode.hdr](mtlfxspatialscalercolorprocessingmode/hdr.md): Indicates your input and output textures use a high dynamic range color space.

### Initializers

- [init(rawValue:)](mtlfxspatialscalercolorprocessingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial scaling

- [MTLFXSpatialScaler](mtlfxspatialscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.
- [MTLFXSpatialScalerDescriptor](mtlfxspatialscalerdescriptor.md): A set of properties that configure a spatial scaling effect, and a factory method that creates the effect.

# MTLFXSpatialScalerColorProcessingMode (Objective-C)

**Framework:** MetalFX  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The color space modes for the input and output textures you use with a spatial scaling effect instance.

## Declaration

```objectivec
enum MTLFXSpatialScalerColorProcessingMode : NSInteger;
```

## Topics

### Color space modes

- [MTLFXSpatialScalerColorProcessingModeLinear](mtlfxspatialscalercolorprocessingmode/linear.md): Indicates your input and output textures use a linear color space.
- [MTLFXSpatialScalerColorProcessingModePerceptual](mtlfxspatialscalercolorprocessingmode/perceptual.md): Indicates your input and output textures use a perceptual color space.
- [MTLFXSpatialScalerColorProcessingModeHDR](mtlfxspatialscalercolorprocessingmode/hdr.md): Indicates your input and output textures use a high dynamic range color space.

## See Also

### Spatial scaling

- [MTLFXSpatialScaler](mtlfxspatialscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.
- [MTLFXSpatialScalerDescriptor](mtlfxspatialscalerdescriptor.md): A set of properties that configure a spatial scaling effect, and a factory method that creates the effect.
