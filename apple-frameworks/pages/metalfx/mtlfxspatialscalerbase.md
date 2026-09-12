> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxspatialscalerbase](https://developer.apple.com/documentation/metalfx/mtlfxspatialscalerbase)

# MTLFXSpatialScalerBase (Swift)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.

## Declaration

```swift
protocol MTLFXSpatialScalerBase : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The MetalFX spatial scaler increases the size of your input texture to a larger output texture. You can use the scaler to upscale every frame of your app’s scene or rendering in real time. With a scaler, you can draw more complicated scenes in less time by intentionally rendering to a lower resolution to save time before upscaling.

Create an [MTLFXSpatialScaler](mtlfxspatialscaler.md) instance following these steps:

1. Create and configure an [MTLFXSpatialScalerDescriptor](mtlfxspatialscalerdescriptor.md) instance.
2. Call the descriptor’s `newSpatialScalerWithDevice:` method.

Upscale a rendering by following these steps for every render pass:

1. Set the spatial scaler’s [colorTexture](mtlfxspatialscalerbase/colortexture.md) property to the input texture.
2. Set the scaler’s [inputContentWidth](mtlfxspatialscalerbase/inputcontentwidth.md) and [inputContentHeight](mtlfxspatialscalerbase/inputcontentheight.md) properties.
3. Set the scaler’s [outputTexture](mtlfxspatialscalerbase/outputtexture.md) property to your destination texture.

Encode the upscale commands to a command buffer by calling the spatial scaler’s `encodeToCommandBuffer:` method.

<a id="Conforming-to-texture-usage-requirements"></a>

## Conforming to texture usage requirements

Spatial scalers expose properties, such as [colorTextureUsage](mtlfxspatialscalerbase/colortextureusage.md), that indicate requirements for your textures to be compatible with it. These properties indicate the minimum set of `MTLTextureUsage` bits that you are responsible for setting in your texture descriptors for this spatial scaler to use them.

Your game or app can set extra usage bits on your textures without losing compatibility, as long at its maintains the minimum set the scaler requests.

<a id="Assigning-input-and-output-textures"></a>

## Assigning input and output textures

When you use an instance of a class that conforms to this protocol, you typically set its input and output textures, as well as other properties, and then encode its work to a command buffer.

MetalFX doesn’t track that you assign the same texture instances to each property across different batches of work, the only requirement is that you provide textures that match the pixel formats and dimensions you specify in the [MTLFXSpatialScalerDescriptor](mtlfxspatialscalerdescriptor.md) descriptor instance that creates the scaler instance.

## Topics

### Instance Properties

- [colorProcessingMode](mtlfxspatialscalerbase/colorprocessingmode.md): The color processing mode you set in this spatial scaler’s descriptor.
- [colorTexture](mtlfxspatialscalerbase/colortexture.md): Input color texture you set for the scaler that supports the correct color texture usage options.
- [colorTextureFormat](mtlfxspatialscalerbase/colortextureformat.md): The pixel format of the input color texture for this this scaler.
- [colorTextureUsage](mtlfxspatialscalerbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this scaler.
- [fence](mtlfxspatialscalerbase/fence.md): An optional fence that you provide to synchronize your app’s untracked resources.
- [inputContentHeight](mtlfxspatialscalerbase/inputcontentheight.md): The height, in pixels, of the region within the color texture the scaler uses as its input.
- [inputContentWidth](mtlfxspatialscalerbase/inputcontentwidth.md): The width, in pixels, of the region within the color texture the scaler uses as its input.
- [inputHeight](mtlfxspatialscalerbase/inputheight.md): The height, in pixels, of the input color texture for this scaler.
- [inputWidth](mtlfxspatialscalerbase/inputwidth.md): The width, in pixels, of the input color texture for this scaler.
- [outputHeight](mtlfxspatialscalerbase/outputheight.md): The height, in pixels, of the output color texture for this scaler.
- [outputTexture](mtlfxspatialscalerbase/outputtexture.md): The output texture into which this scaler writes its output.
- [outputTextureFormat](mtlfxspatialscalerbase/outputtextureformat.md): The pixel format of the output color texture for this this scaler.
- [outputTextureUsage](mtlfxspatialscalerbase/outputtextureusage.md): The minimal texture usage options that your app’s output color texture needs in order to support this scaler.
- [outputWidth](mtlfxspatialscalerbase/outputwidth.md): The width, in pixels, of the output color texture for this scaler.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4FXSpatialScaler](mtl4fxspatialscaler.md)
- [MTLFXSpatialScaler](mtlfxspatialscaler.md)

# MTLFXSpatialScalerBase (Objective-C)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.

## Declaration

```objectivec
@protocol MTLFXSpatialScalerBase <NSObject>
```

<a id="overview"></a>

## Overview

The MetalFX spatial scaler increases the size of your input texture to a larger output texture. You can use the scaler to upscale every frame of your app’s scene or rendering in real time. With a scaler, you can draw more complicated scenes in less time by intentionally rendering to a lower resolution to save time before upscaling.

Create an [MTLFXSpatialScaler](mtlfxspatialscaler.md) instance following these steps:

1. Create and configure an [MTLFXSpatialScalerDescriptor](mtlfxspatialscalerdescriptor.md) instance.
2. Call the descriptor’s `newSpatialScalerWithDevice:` method.

Upscale a rendering by following these steps for every render pass:

1. Set the spatial scaler’s [colorTexture](mtlfxspatialscalerbase/colortexture.md) property to the input texture.
2. Set the scaler’s [inputContentWidth](mtlfxspatialscalerbase/inputcontentwidth.md) and [inputContentHeight](mtlfxspatialscalerbase/inputcontentheight.md) properties.
3. Set the scaler’s [outputTexture](mtlfxspatialscalerbase/outputtexture.md) property to your destination texture.

Encode the upscale commands to a command buffer by calling the spatial scaler’s `encodeToCommandBuffer:` method.

<a id="Conforming-to-texture-usage-requirements"></a>

## Conforming to texture usage requirements

Spatial scalers expose properties, such as [colorTextureUsage](mtlfxspatialscalerbase/colortextureusage.md), that indicate requirements for your textures to be compatible with it. These properties indicate the minimum set of `MTLTextureUsage` bits that you are responsible for setting in your texture descriptors for this spatial scaler to use them.

Your game or app can set extra usage bits on your textures without losing compatibility, as long at its maintains the minimum set the scaler requests.

<a id="Assigning-input-and-output-textures"></a>

## Assigning input and output textures

When you use an instance of a class that conforms to this protocol, you typically set its input and output textures, as well as other properties, and then encode its work to a command buffer.

MetalFX doesn’t track that you assign the same texture instances to each property across different batches of work, the only requirement is that you provide textures that match the pixel formats and dimensions you specify in the [MTLFXSpatialScalerDescriptor](mtlfxspatialscalerdescriptor.md) descriptor instance that creates the scaler instance.

## Topics

### Instance Properties

- [colorProcessingMode](mtlfxspatialscalerbase/colorprocessingmode.md): The color processing mode you set in this spatial scaler’s descriptor.
- [colorTexture](mtlfxspatialscalerbase/colortexture.md): Input color texture you set for the scaler that supports the correct color texture usage options.
- [colorTextureFormat](mtlfxspatialscalerbase/colortextureformat.md): The pixel format of the input color texture for this this scaler.
- [colorTextureUsage](mtlfxspatialscalerbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this scaler.
- [fence](mtlfxspatialscalerbase/fence.md): An optional fence that you provide to synchronize your app’s untracked resources.
- [inputContentHeight](mtlfxspatialscalerbase/inputcontentheight.md): The height, in pixels, of the region within the color texture the scaler uses as its input.
- [inputContentWidth](mtlfxspatialscalerbase/inputcontentwidth.md): The width, in pixels, of the region within the color texture the scaler uses as its input.
- [inputHeight](mtlfxspatialscalerbase/inputheight.md): The height, in pixels, of the input color texture for this scaler.
- [inputWidth](mtlfxspatialscalerbase/inputwidth.md): The width, in pixels, of the input color texture for this scaler.
- [outputHeight](mtlfxspatialscalerbase/outputheight.md): The height, in pixels, of the output color texture for this scaler.
- [outputTexture](mtlfxspatialscalerbase/outputtexture.md): The output texture into which this scaler writes its output.
- [outputTextureFormat](mtlfxspatialscalerbase/outputtextureformat.md): The pixel format of the output color texture for this this scaler.
- [outputTextureUsage](mtlfxspatialscalerbase/outputtextureusage.md): The minimal texture usage options that your app’s output color texture needs in order to support this scaler.
- [outputWidth](mtlfxspatialscalerbase/outputwidth.md): The width, in pixels, of the output color texture for this scaler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4FXSpatialScaler](mtl4fxspatialscaler.md)
- [MTLFXSpatialScaler](mtlfxspatialscaler.md)
