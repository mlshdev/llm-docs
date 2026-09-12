> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor)

# MTLFXTemporalDenoisedScalerDescriptor (Swift)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

## Declaration

```swift
class MTLFXTemporalDenoisedScalerDescriptor
```

## Topics

### Instance Properties

- [colorTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/colortextureformat.md): The pixel format of the input color texture for the scaler you create with this descriptor.
- [denoiseStrengthMaskTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/denoisestrengthmasktextureformat.md): The pixel format of the input denoise strength mask texture for the scaler you create with this descriptor.
- [depthTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/depthtextureformat.md): The pixel format of the input depth texture for the scaler you create with this descriptor.
- [diffuseAlbedoTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/diffusealbedotextureformat.md): The pixel format of the input diffuse albedo texture for the scaler you create with this descriptor.
- [inputHeight](mtlfxtemporaldenoisedscalerdescriptor/inputheight.md): The height, in pixels, of the input color texture for the denoiser scaler.
- [inputWidth](mtlfxtemporaldenoisedscalerdescriptor/inputwidth.md): The width, in pixels, of the input color texture for the denoiser scaler.
- [isAutoExposureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isautoexposureenabled.md): A Boolean value that indicates whether MetalFX calculates the exposure for each frame.
- [isDenoiseStrengthMaskTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isdenoisestrengthmasktextureenabled.md): A Boolean value indicating whether the scaler evaluates a denoise strength mask texture as part of its operation.
- [isReactiveMaskTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isreactivemasktextureenabled.md): A Boolean value that indicates whether a scaler you create from this descriptor applies a reactive mask.
- [isSpecularHitDistanceTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isspecularhitdistancetextureenabled.md): A Boolean value indicating whether the scaler evaluates a specular hit distance texture as part of its operation.
- [isTransparencyOverlayTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/istransparencyoverlaytextureenabled.md): A Boolean value indicating whether the scaler evaluates a transparency overlay texture as part of its operation.
- [motionTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/motiontextureformat.md): The pixel format of the input motion texture for the scaler you create with this descriptor.
- [normalTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/normaltextureformat.md): The pixel format of the input normal texture for the scaler you create with this descriptor.
- [outputHeight](mtlfxtemporaldenoisedscalerdescriptor/outputheight.md): The height, in pixels, of the input color texture for the denoiser scaler.
- [outputTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/outputtextureformat.md): The pixel format of the output color texture for the scaler you create with this descriptor.
- [outputWidth](mtlfxtemporaldenoisedscalerdescriptor/outputwidth.md): The width, in pixels, of the output color texture for the denoiser scaler.
- [reactiveMaskTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/reactivemasktextureformat.md): The pixel format of the reactive mask input texture for a scaler you create from this descriptor.
- [requiresSynchronousInitialization](mtlfxtemporaldenoisedscalerdescriptor/requiressynchronousinitialization.md): A Boolean value that indicates whether MetalFX compiles a temporal scaling effect’s underlying upscaler as it creates the instance.
- [roughnessTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/roughnesstextureformat.md): The pixel format of the input roughness texture for the scaler you create with this descriptor.
- [specularAlbedoTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/specularalbedotextureformat.md): The pixel format of the input specular albedo texture for the scaler you create with this descriptor.
- [specularHitDistanceTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/specularhitdistancetextureformat.md): The pixel format of the input specular hit texture for the scaler you create with this descriptor.
- [transparencyOverlayTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/transparencyoverlaytextureformat.md): The pixel format of the input transparency overlay texture for the scaler you create with this descriptor.

### Instance Methods

- [makeTemporalDenoisedScaler(device:)](mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler%28device_%29.md): Creates a denoiser scaler instance for a Metal device.
- [makeTemporalDenoisedScaler(device:compiler:)](mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler%28device_compiler_%29.md): Creates a denoiser scaler instance for a Metal device.

### Type Methods

- [supportedInputContentMaxScale(device:)](mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentmaxscale%28device_%29.md): Returns the largest temporal scaling factor the device supports as a floating-point value.
- [supportedInputContentMinScale(device:)](mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
- [supportsDevice(\_:)](mtlfxtemporaldenoisedscalerdescriptor/supportsdevice%28__%29.md): Queries whether a Metal device supports denoising scaling.
- [supportsMetal4FX(\_:)](mtlfxtemporaldenoisedscalerdescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports denosing scaling compatible on Metal 4.

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

# MTLFXTemporalDenoisedScalerDescriptor (Objective-C)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

## Declaration

```objectivec
@interface MTLFXTemporalDenoisedScalerDescriptor : NSObject
```

## Topics

### Instance Properties

- [colorTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/colortextureformat.md): The pixel format of the input color texture for the scaler you create with this descriptor.
- [denoiseStrengthMaskTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/denoisestrengthmasktextureformat.md): The pixel format of the input denoise strength mask texture for the scaler you create with this descriptor.
- [depthTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/depthtextureformat.md): The pixel format of the input depth texture for the scaler you create with this descriptor.
- [diffuseAlbedoTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/diffusealbedotextureformat.md): The pixel format of the input diffuse albedo texture for the scaler you create with this descriptor.
- [inputHeight](mtlfxtemporaldenoisedscalerdescriptor/inputheight.md): The height, in pixels, of the input color texture for the denoiser scaler.
- [inputWidth](mtlfxtemporaldenoisedscalerdescriptor/inputwidth.md): The width, in pixels, of the input color texture for the denoiser scaler.
- [autoExposureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isautoexposureenabled.md): A Boolean value that indicates whether MetalFX calculates the exposure for each frame.
- [denoiseStrengthMaskTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isdenoisestrengthmasktextureenabled.md): A Boolean value indicating whether the scaler evaluates a denoise strength mask texture as part of its operation.
- [reactiveMaskTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isreactivemasktextureenabled.md): A Boolean value that indicates whether a scaler you create from this descriptor applies a reactive mask.
- [specularHitDistanceTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/isspecularhitdistancetextureenabled.md): A Boolean value indicating whether the scaler evaluates a specular hit distance texture as part of its operation.
- [transparencyOverlayTextureEnabled](mtlfxtemporaldenoisedscalerdescriptor/istransparencyoverlaytextureenabled.md): A Boolean value indicating whether the scaler evaluates a transparency overlay texture as part of its operation.
- [motionTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/motiontextureformat.md): The pixel format of the input motion texture for the scaler you create with this descriptor.
- [normalTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/normaltextureformat.md): The pixel format of the input normal texture for the scaler you create with this descriptor.
- [outputHeight](mtlfxtemporaldenoisedscalerdescriptor/outputheight.md): The height, in pixels, of the input color texture for the denoiser scaler.
- [outputTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/outputtextureformat.md): The pixel format of the output color texture for the scaler you create with this descriptor.
- [outputWidth](mtlfxtemporaldenoisedscalerdescriptor/outputwidth.md): The width, in pixels, of the output color texture for the denoiser scaler.
- [reactiveMaskTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/reactivemasktextureformat.md): The pixel format of the reactive mask input texture for a scaler you create from this descriptor.
- [requiresSynchronousInitialization](mtlfxtemporaldenoisedscalerdescriptor/requiressynchronousinitialization.md): A Boolean value that indicates whether MetalFX compiles a temporal scaling effect’s underlying upscaler as it creates the instance.
- [roughnessTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/roughnesstextureformat.md): The pixel format of the input roughness texture for the scaler you create with this descriptor.
- [specularAlbedoTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/specularalbedotextureformat.md): The pixel format of the input specular albedo texture for the scaler you create with this descriptor.
- [specularHitDistanceTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/specularhitdistancetextureformat.md): The pixel format of the input specular hit texture for the scaler you create with this descriptor.
- [transparencyOverlayTextureFormat](mtlfxtemporaldenoisedscalerdescriptor/transparencyoverlaytextureformat.md): The pixel format of the input transparency overlay texture for the scaler you create with this descriptor.

### Instance Methods

- [newTemporalDenoisedScalerWithDevice:](mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler%28device_%29.md): Creates a denoiser scaler instance for a Metal device.
- [newTemporalDenoisedScalerWithDevice:compiler:](mtlfxtemporaldenoisedscalerdescriptor/maketemporaldenoisedscaler%28device_compiler_%29.md): Creates a denoiser scaler instance for a Metal device.

### Type Methods

- [supportedInputContentMaxScaleForDevice:](mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentmaxscale%28device_%29.md): Returns the largest temporal scaling factor the device supports as a floating-point value.
- [supportedInputContentMinScaleForDevice:](mtlfxtemporaldenoisedscalerdescriptor/supportedinputcontentminscale%28device_%29.md): Returns the smallest temporal scaling factor the device supports as a floating-point value.
- [supportsDevice:](mtlfxtemporaldenoisedscalerdescriptor/supportsdevice%28__%29.md): Queries whether a Metal device supports denoising scaling.
- [supportsMetal4FX:](mtlfxtemporaldenoisedscalerdescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports denosing scaling compatible on Metal 4.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
