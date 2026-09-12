> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxspatialscalerdescriptor](https://developer.apple.com/documentation/metalfx/mtlfxspatialscalerdescriptor)

# MTLFXSpatialScalerDescriptor (Swift)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A set of properties that configure a spatial scaling effect, and a factory method that creates the effect.

## Declaration

```swift
class MTLFXSpatialScalerDescriptor
```

## Topics

### Checking a GPU device’s scaling support

- [supportsDevice(\_:)](mtlfxspatialscalerdescriptor/supportsdevice%28__%29.md): Returns a Boolean value that indicates whether the spatial scaler works with a GPU.

### Configuring a spatial scaler’s input

- [inputWidth](mtlfxspatialscalerdescriptor/inputwidth.md): The width of the input color texture for the spatial scaler you create with this descriptor.
- [inputHeight](mtlfxspatialscalerdescriptor/inputheight.md): The height of the input color texture for the spatial scaler you create with this descriptor.
- [colorTextureFormat](mtlfxspatialscalerdescriptor/colortextureformat.md): The pixel format of the input color texture for the spatial scaler you create with this descriptor.
- [colorProcessingMode](mtlfxspatialscalerdescriptor/colorprocessingmode.md): The color space of the input color texture for the spatial scaler you create with this descriptor.

### Configuring a spatial scaler’s output

- [outputWidth](mtlfxspatialscalerdescriptor/outputwidth.md): The width of the output color texture for the spatial scaler you create with this descriptor.
- [outputHeight](mtlfxspatialscalerdescriptor/outputheight.md): The height of the output color texture for the spatial scaler you create with this descriptor.
- [outputTextureFormat](mtlfxspatialscalerdescriptor/outputtextureformat.md): The pixel format of the output color texture for the spatial scaler you create with this descriptor.

### Creating spatial scaler instances

- [makeSpatialScaler(device:)](mtlfxspatialscalerdescriptor/makespatialscaler%28device_%29.md): Creates a spatial scaler instance from this descriptor’s current property values.

### Instance Methods

- [makeSpatialScaler(device:compiler:)](mtlfxspatialscalerdescriptor/makespatialscaler%28device_compiler_%29.md): Creates a spatial scaler instance for a Metal device.

### Type Methods

- [supportsMetal4FX(\_:)](mtlfxspatialscalerdescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports spatial scaling compatible with Metal 4.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spatial scaling

- [MTLFXSpatialScaler](mtlfxspatialscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.
- [MTLFXSpatialScalerColorProcessingMode](mtlfxspatialscalercolorprocessingmode.md): The color space modes for the input and output textures you use with a spatial scaling effect instance.

# MTLFXSpatialScalerDescriptor (Objective-C)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A set of properties that configure a spatial scaling effect, and a factory method that creates the effect.

## Declaration

```objectivec
@interface MTLFXSpatialScalerDescriptor : NSObject
```

## Topics

### Checking a GPU device’s scaling support

- [supportsDevice:](mtlfxspatialscalerdescriptor/supportsdevice%28__%29.md): Returns a Boolean value that indicates whether the spatial scaler works with a GPU.

### Configuring a spatial scaler’s input

- [inputWidth](mtlfxspatialscalerdescriptor/inputwidth.md): The width of the input color texture for the spatial scaler you create with this descriptor.
- [inputHeight](mtlfxspatialscalerdescriptor/inputheight.md): The height of the input color texture for the spatial scaler you create with this descriptor.
- [colorTextureFormat](mtlfxspatialscalerdescriptor/colortextureformat.md): The pixel format of the input color texture for the spatial scaler you create with this descriptor.
- [colorProcessingMode](mtlfxspatialscalerdescriptor/colorprocessingmode.md): The color space of the input color texture for the spatial scaler you create with this descriptor.

### Configuring a spatial scaler’s output

- [outputWidth](mtlfxspatialscalerdescriptor/outputwidth.md): The width of the output color texture for the spatial scaler you create with this descriptor.
- [outputHeight](mtlfxspatialscalerdescriptor/outputheight.md): The height of the output color texture for the spatial scaler you create with this descriptor.
- [outputTextureFormat](mtlfxspatialscalerdescriptor/outputtextureformat.md): The pixel format of the output color texture for the spatial scaler you create with this descriptor.

### Creating spatial scaler instances

- [newSpatialScalerWithDevice:](mtlfxspatialscalerdescriptor/makespatialscaler%28device_%29.md): Creates a spatial scaler instance from this descriptor’s current property values.

### Instance Methods

- [newSpatialScalerWithDevice:compiler:](mtlfxspatialscalerdescriptor/makespatialscaler%28device_compiler_%29.md): Creates a spatial scaler instance for a Metal device.

### Type Methods

- [supportsMetal4FX:](mtlfxspatialscalerdescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports spatial scaling compatible with Metal 4.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Spatial scaling

- [MTLFXSpatialScaler](mtlfxspatialscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.
- [MTLFXSpatialScalerColorProcessingMode](mtlfxspatialscalercolorprocessingmode.md): The color space modes for the input and output textures you use with a spatial scaling effect instance.
