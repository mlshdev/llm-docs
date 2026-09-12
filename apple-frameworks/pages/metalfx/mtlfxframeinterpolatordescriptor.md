> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatordescriptor](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatordescriptor)

# MTLFXFrameInterpolatorDescriptor (Swift)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A set of properties that configure a frame interpolator, and a factory method that creates the effect.

## Declaration

```swift
class MTLFXFrameInterpolatorDescriptor
```

<a id="overview"></a>

## Overview

A frame interpolator inspects two frames your game or app renders and, based on their properties, generates an extra frame at a fraction of the cost, helping you to increase your frame rate.

When you configure this descriptor, set the properties that determine the pixel format for each texture to the respective format of the texture you later assign to the scaler. For example, make sure that the format to which you set the [colorTextureFormat](mtlfxframeinterpolatordescriptor/colortextureformat.md) property matches the format of the texture you later assign to the interpolator’s `MTLFXFrameInterpolatorDescriptor/colorTexture` property.

## Topics

### Instance Properties

- [colorTextureFormat](mtlfxframeinterpolatordescriptor/colortextureformat.md): The pixel format of the input color texture for the frame interpolator you create with this descriptor.
- [depthTextureFormat](mtlfxframeinterpolatordescriptor/depthtextureformat.md): The pixel format of the input depth texture for the frame interpolator you create with this descriptor.
- [inputHeight](mtlfxframeinterpolatordescriptor/inputheight.md): The height, in pixels, of the input motion and depth texture for the frame interpolator.
- [inputWidth](mtlfxframeinterpolatordescriptor/inputwidth.md): The width, in pixels, of the input motion and depth texture for the frame interpolator.
- [isDistortionTextureEnabled](mtlfxframeinterpolatordescriptor/isdistortiontextureenabled.md): A Boolean value that indicates whether the frame interpolator supports barrel distortion correction.
- [motionTextureFormat](mtlfxframeinterpolatordescriptor/motiontextureformat.md): The pixel format of the input motion texture for the frame interpolator you create with this descriptor.
- [outputHeight](mtlfxframeinterpolatordescriptor/outputheight.md): The height, in pixels, of the output color texture for the frame interpolator.
- [outputTextureFormat](mtlfxframeinterpolatordescriptor/outputtextureformat.md): The pixel format of the output color texture for the frame interpolator you create with this descriptor.
- [outputWidth](mtlfxframeinterpolatordescriptor/outputwidth.md): The width, in pixels, of the output color texture for the frame interpolator.
- [requiresPrevColorTexture](mtlfxframeinterpolatordescriptor/requiresprevcolortexture.md): A Boolean value that indicates whether the frame interpolator requires the client to provide a previous color texture.
- [scaler](mtlfxframeinterpolatordescriptor/scaler.md)
- [uiTextureFormat](mtlfxframeinterpolatordescriptor/uitextureformat.md): The pixel format for the frame interpolator of an input texture containing your game’s custom UI.

### Instance Methods

- [makeFrameInterpolator(device:)](mtlfxframeinterpolatordescriptor/makeframeinterpolator%28device_%29.md): Creates a frame interpolator instance for a Metal device.
- [makeFrameInterpolator(device:compiler:)](mtlfxframeinterpolatordescriptor/makeframeinterpolator%28device_compiler_%29.md): Creates a frame interpolator instance for a Metal device.

### Type Methods

- [supportsDevice(\_:)](mtlfxframeinterpolatordescriptor/supportsdevice%28__%29.md): Queries whether a Metal device supports frame interpolation.
- [supportsMetal4FX(\_:)](mtlfxframeinterpolatordescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports frame interpolation compatible with a Metal 4 command buffer.

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

# MTLFXFrameInterpolatorDescriptor (Objective-C)

**Framework:** MetalFX  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A set of properties that configure a frame interpolator, and a factory method that creates the effect.

## Declaration

```objectivec
@interface MTLFXFrameInterpolatorDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A frame interpolator inspects two frames your game or app renders and, based on their properties, generates an extra frame at a fraction of the cost, helping you to increase your frame rate.

When you configure this descriptor, set the properties that determine the pixel format for each texture to the respective format of the texture you later assign to the scaler. For example, make sure that the format to which you set the [colorTextureFormat](mtlfxframeinterpolatordescriptor/colortextureformat.md) property matches the format of the texture you later assign to the interpolator’s `MTLFXFrameInterpolatorDescriptor/colorTexture` property.

## Topics

### Instance Properties

- [colorTextureFormat](mtlfxframeinterpolatordescriptor/colortextureformat.md): The pixel format of the input color texture for the frame interpolator you create with this descriptor.
- [depthTextureFormat](mtlfxframeinterpolatordescriptor/depthtextureformat.md): The pixel format of the input depth texture for the frame interpolator you create with this descriptor.
- [inputHeight](mtlfxframeinterpolatordescriptor/inputheight.md): The height, in pixels, of the input motion and depth texture for the frame interpolator.
- [inputWidth](mtlfxframeinterpolatordescriptor/inputwidth.md): The width, in pixels, of the input motion and depth texture for the frame interpolator.
- [distortionTextureEnabled](mtlfxframeinterpolatordescriptor/isdistortiontextureenabled.md): A Boolean value that indicates whether the frame interpolator supports barrel distortion correction.
- [motionTextureFormat](mtlfxframeinterpolatordescriptor/motiontextureformat.md): The pixel format of the input motion texture for the frame interpolator you create with this descriptor.
- [outputHeight](mtlfxframeinterpolatordescriptor/outputheight.md): The height, in pixels, of the output color texture for the frame interpolator.
- [outputTextureFormat](mtlfxframeinterpolatordescriptor/outputtextureformat.md): The pixel format of the output color texture for the frame interpolator you create with this descriptor.
- [outputWidth](mtlfxframeinterpolatordescriptor/outputwidth.md): The width, in pixels, of the output color texture for the frame interpolator.
- [requiresPrevColorTexture](mtlfxframeinterpolatordescriptor/requiresprevcolortexture.md): A Boolean value that indicates whether the frame interpolator requires the client to provide a previous color texture.
- [scaler](mtlfxframeinterpolatordescriptor/scaler.md)
- [uiTextureFormat](mtlfxframeinterpolatordescriptor/uitextureformat.md): The pixel format for the frame interpolator of an input texture containing your game’s custom UI.

### Instance Methods

- [newFrameInterpolatorWithDevice:](mtlfxframeinterpolatordescriptor/makeframeinterpolator%28device_%29.md): Creates a frame interpolator instance for a Metal device.
- [newFrameInterpolatorWithDevice:compiler:](mtlfxframeinterpolatordescriptor/makeframeinterpolator%28device_compiler_%29.md): Creates a frame interpolator instance for a Metal device.

### Type Methods

- [supportsDevice:](mtlfxframeinterpolatordescriptor/supportsdevice%28__%29.md): Queries whether a Metal device supports frame interpolation.
- [supportsMetal4FX:](mtlfxframeinterpolatordescriptor/supportsmetal4fx%28__%29.md): Queries whether a Metal device supports frame interpolation compatible with a Metal 4 command buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
