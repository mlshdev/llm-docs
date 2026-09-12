> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor)

# MTLFXTemporalScalerDescriptor (Swift)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

A set of properties that configure a temporal scaling effect, and a factory method that creates the effect.

## Declaration

```swift
class MTLFXTemporalScalerDescriptor
```

## Topics

### Checking a GPU device’s scaling support

- [supportsDevice(\_:)](mtlfxtemporalscalerdescriptor/supportsdevice%28__%29.md): Returns a Boolean value that indicates whether the temporal scaler works with a GPU.
- [supportedInputContentMinScale(device:)](mtlfxtemporalscalerdescriptor/supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
- [supportedInputContentMaxScale(device:)](mtlfxtemporalscalerdescriptor/supportedinputcontentmaxscale%28device_%29.md): Returns the largest temporal scaling factor the device supports as a floating-point value.

### Configuring a temporal effect’s input

- [inputWidth](mtlfxtemporalscalerdescriptor/inputwidth.md): The width of the input color texture for the temporal scaler you create with this descriptor.
- [inputHeight](mtlfxtemporalscalerdescriptor/inputheight.md): The height of the input color texture for the temporal scaler you create with this descriptor.
- [isInputContentPropertiesEnabled](mtlfxtemporalscalerdescriptor/isinputcontentpropertiesenabled.md): A Boolean value that indicates whether the temporal scaler you create with this descriptor uses dynamic resolution.
- [inputContentMinScale](mtlfxtemporalscalerdescriptor/inputcontentminscale.md): The smallest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [inputContentMaxScale](mtlfxtemporalscalerdescriptor/inputcontentmaxscale.md): The largest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [colorTextureFormat](mtlfxtemporalscalerdescriptor/colortextureformat.md): The pixel format of the input color texture for the temporal scaler you create with this descriptor.
- [motionTextureFormat](mtlfxtemporalscalerdescriptor/motiontextureformat.md): The pixel format of the input motion texture for the temporal scaler you create with this descriptor.
- [depthTextureFormat](mtlfxtemporalscalerdescriptor/depthtextureformat.md): The pixel format of the input depth texture for the temporal scaler you create with this descriptor.
- [isAutoExposureEnabled](mtlfxtemporalscalerdescriptor/isautoexposureenabled.md): A Boolean value that indicates whether MetalFX calculates the exposure for each frame.
- [requiresSynchronousInitialization](mtlfxtemporalscalerdescriptor/requiressynchronousinitialization.md): A Boolean value that indicates whether MetalFX compiles a temporal scaling effect’s underlying upscaler as it creates the instance.
- [isReactiveMaskTextureEnabled](mtlfxtemporalscalerdescriptor/isreactivemasktextureenabled.md): A Boolean value that indicates whether a temporal scaler you create with the descriptor applies a reactive mask.
- [reactiveMaskTextureFormat](mtlfxtemporalscalerdescriptor/reactivemasktextureformat.md): The pixel format of the reactive mask input texture for a temporal scaler you create with the descriptor.

### Configuring a temporal effect’s output

- [outputWidth](mtlfxtemporalscalerdescriptor/outputwidth.md): The width of the output color texture for the temporal scaler you create with this descriptor.
- [outputHeight](mtlfxtemporalscalerdescriptor/outputheight.md): The height of the output color texture for the temporal scaler you create with this descriptor.
- [outputTextureFormat](mtlfxtemporalscalerdescriptor/outputtextureformat.md): The pixel format of the output color texture for the temporal scaler you create with this descriptor.

### Creating temporal scaling effect instances

- [makeTemporalScaler(device:)](mtlfxtemporalscalerdescriptor/maketemporalscaler%28device_%29.md): Creates a temporal scaler instance from this descriptor’s current property values.

### Instance Properties

- [isJitteredMotionVectorsEnabled](mtlfxtemporalscalerdescriptor/isjitteredmotionvectorsenabled.md): A Boolean value that indicates whether the motion vectors include the jittering pattern.
- [isOutputResolutionMotionVectorsEnabled](mtlfxtemporalscalerdescriptor/isoutputresolutionmotionvectorsenabled.md): A Boolean value that indicates whether the scaler expects motion vectors at output resolution.

### Instance Methods

- [makeTemporalScaler(device:compiler:)](mtlfxtemporalscalerdescriptor/maketemporalscaler%28device_compiler_%29.md): Creates a temporal scaler instance for a Metal device.

### Type Methods

- [supportsMetal4FX(\_:)](mtlfxtemporalscalerdescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports temporal scaling compatible with Metal 4.

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

### Temporal scaling

- [Applying temporal antialiasing and upscaling using MetalFX](applying-temporal-antialiasing-and-upscaling-using-metalfx.md): Reduce render workloads while increasing image detail with MetalFX.
- [MTLFXTemporalScaler](mtlfxtemporalscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.

# MTLFXTemporalScalerDescriptor (Objective-C)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

A set of properties that configure a temporal scaling effect, and a factory method that creates the effect.

## Declaration

```objectivec
@interface MTLFXTemporalScalerDescriptor : NSObject
```

## Topics

### Checking a GPU device’s scaling support

- [supportsDevice:](mtlfxtemporalscalerdescriptor/supportsdevice%28__%29.md): Returns a Boolean value that indicates whether the temporal scaler works with a GPU.
- [supportedInputContentMinScaleForDevice:](mtlfxtemporalscalerdescriptor/supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
- [supportedInputContentMaxScaleForDevice:](mtlfxtemporalscalerdescriptor/supportedinputcontentmaxscale%28device_%29.md): Returns the largest temporal scaling factor the device supports as a floating-point value.

### Configuring a temporal effect’s input

- [inputWidth](mtlfxtemporalscalerdescriptor/inputwidth.md): The width of the input color texture for the temporal scaler you create with this descriptor.
- [inputHeight](mtlfxtemporalscalerdescriptor/inputheight.md): The height of the input color texture for the temporal scaler you create with this descriptor.
- [inputContentPropertiesEnabled](mtlfxtemporalscalerdescriptor/isinputcontentpropertiesenabled.md): A Boolean value that indicates whether the temporal scaler you create with this descriptor uses dynamic resolution.
- [inputContentMinScale](mtlfxtemporalscalerdescriptor/inputcontentminscale.md): The smallest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [inputContentMaxScale](mtlfxtemporalscalerdescriptor/inputcontentmaxscale.md): The largest scale factor the temporal scaler you create with this descriptor can use to generate output textures.
- [colorTextureFormat](mtlfxtemporalscalerdescriptor/colortextureformat.md): The pixel format of the input color texture for the temporal scaler you create with this descriptor.
- [motionTextureFormat](mtlfxtemporalscalerdescriptor/motiontextureformat.md): The pixel format of the input motion texture for the temporal scaler you create with this descriptor.
- [depthTextureFormat](mtlfxtemporalscalerdescriptor/depthtextureformat.md): The pixel format of the input depth texture for the temporal scaler you create with this descriptor.
- [autoExposureEnabled](mtlfxtemporalscalerdescriptor/isautoexposureenabled.md): A Boolean value that indicates whether MetalFX calculates the exposure for each frame.
- [requiresSynchronousInitialization](mtlfxtemporalscalerdescriptor/requiressynchronousinitialization.md): A Boolean value that indicates whether MetalFX compiles a temporal scaling effect’s underlying upscaler as it creates the instance.
- [reactiveMaskTextureEnabled](mtlfxtemporalscalerdescriptor/isreactivemasktextureenabled.md): A Boolean value that indicates whether a temporal scaler you create with the descriptor applies a reactive mask.
- [reactiveMaskTextureFormat](mtlfxtemporalscalerdescriptor/reactivemasktextureformat.md): The pixel format of the reactive mask input texture for a temporal scaler you create with the descriptor.

### Configuring a temporal effect’s output

- [outputWidth](mtlfxtemporalscalerdescriptor/outputwidth.md): The width of the output color texture for the temporal scaler you create with this descriptor.
- [outputHeight](mtlfxtemporalscalerdescriptor/outputheight.md): The height of the output color texture for the temporal scaler you create with this descriptor.
- [outputTextureFormat](mtlfxtemporalscalerdescriptor/outputtextureformat.md): The pixel format of the output color texture for the temporal scaler you create with this descriptor.

### Creating temporal scaling effect instances

- [newTemporalScalerWithDevice:](mtlfxtemporalscalerdescriptor/maketemporalscaler%28device_%29.md): Creates a temporal scaler instance from this descriptor’s current property values.

### Instance Properties

- [jitteredMotionVectorsEnabled](mtlfxtemporalscalerdescriptor/isjitteredmotionvectorsenabled.md): A Boolean value that indicates whether the motion vectors include the jittering pattern.
- [outputResolutionMotionVectorsEnabled](mtlfxtemporalscalerdescriptor/isoutputresolutionmotionvectorsenabled.md): A Boolean value that indicates whether the scaler expects motion vectors at output resolution.

### Instance Methods

- [newTemporalScalerWithDevice:compiler:](mtlfxtemporalscalerdescriptor/maketemporalscaler%28device_compiler_%29.md): Creates a temporal scaler instance for a Metal device.

### Type Methods

- [supportsMetal4FX:](mtlfxtemporalscalerdescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports temporal scaling compatible with Metal 4.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Temporal scaling

- [Applying temporal antialiasing and upscaling using MetalFX](applying-temporal-antialiasing-and-upscaling-using-metalfx.md): Reduce render workloads while increasing image detail with MetalFX.
- [MTLFXTemporalScaler](mtlfxtemporalscaler.md): An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.
