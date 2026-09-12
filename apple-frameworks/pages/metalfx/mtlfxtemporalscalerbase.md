> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerbase](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerbase)

# MTLFXTemporalScalerBase (Swift)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.

## Declaration

```swift
protocol MTLFXTemporalScalerBase : MTLFXFrameInterpolatableScaler
```

<a id="overview"></a>

## Overview

The MetalFX temporal scaler increases the size of your input texture to a larger output texture. You can use the scaler to upscale every frame of your app’s scene or rendering in real time. With a scaler, you can draw more complicated scenes in less time by intentionally rendering to a lower resolution to save time before upscaling.

Create an [MTLFXTemporalScaler](mtlfxtemporalscaler.md) instance by following these steps:

1. Create and configure an [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md) instance.
2. Call the descriptor’s `newTemporalScalerWithDevice:` method.

Upscale a rendering by following these steps for every render pass:

1. Set the temporal scaler’s [colorTexture](mtlfxtemporalscalerbase/colortexture.md) property to the input texture.
2. Set the scaler’s [inputContentWidth](mtlfxtemporalscalerbase/inputcontentwidth.md) and [inputContentHeight](mtlfxtemporalscalerbase/inputcontentheight.md) properties.
3. Set the scaler’s [outputTexture](mtlfxtemporalscalerbase/outputtexture.md) property to your destination texture.
4. Encode the upscale commands to a command buffer by calling the temporal scaler’s [encode(commandBuffer:)](mtlfxtemporalscaler/encode%28commandbuffer_%29.md) method.

<a id="Conforming-to-texture-usage-requirements"></a>

## Conforming to texture usage requirements

Temporal scalers expose properties, such as [colorTextureUsage](mtlfxtemporalscalerbase/colortextureusage.md), that indicate requirements for your textures to be compatible with it. These properties indicate the minimum set of `MTLTextureUsage` bits that you are responsible for setting in your texture descriptors for this spatial scaler to use them.

Your game or app can set extra usage bits on your textures without losing compatibility, as long at its maintains the minimum set the scaler requests.

<a id="Assigning-input-and-output-textures"></a>

## Assigning input and output textures

When you use an instance of a class that conforms to this protocol, you typically set its input and output textures, as well as other properties, and then encode its work to a command buffer.

MetalFX doesn’t track that you assign the same texture instances to each property across different batches of work, the only requirement is that you provide textures that match the pixel formats and dimensions you specify in the [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md) descriptor instance that creates the scaler instance.

## Topics

### Instance Properties

- [colorContentOffsetX](mtlfxtemporalscalerbase/colorcontentoffsetx.md): The horizontal offset, in pixels, of the region within the color texture to use as input.
- [colorContentOffsetY](mtlfxtemporalscalerbase/colorcontentoffsety.md): The vertical offset, in pixels, of the region within the color texture to use as input.
- [colorTexture](mtlfxtemporalscalerbase/colortexture.md): An input color texture you set for the scaler that supports the correct color texture usage options.
- [colorTextureFormat](mtlfxtemporalscalerbase/colortextureformat.md): The pixel format of the input color texture for this this scaler.
- [colorTextureUsage](mtlfxtemporalscalerbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this scaler.
- [depthContentOffsetX](mtlfxtemporalscalerbase/depthcontentoffsetx.md): The horizontal offset, in pixels, of the region within the depth texture to use as input.
- [depthContentOffsetY](mtlfxtemporalscalerbase/depthcontentoffsety.md): The vertical offset, in pixels, of the region within the depth texture to use as input.
- [depthTexture](mtlfxtemporalscalerbase/depthtexture.md): An input depth texture you set for the scaler that supports the correct color texture usage options.
- [depthTextureFormat](mtlfxtemporalscalerbase/depthtextureformat.md): The pixel format of the input depth texture for this this scaler.
- [depthTextureUsage](mtlfxtemporalscalerbase/depthtextureusage.md): The minimal texture usage options that your app’s input depth texture needs in order to support this scaler.
- [exposureTexture](mtlfxtemporalscalerbase/exposuretexture.md): The exposure texture this scaler uses.
- [fence](mtlfxtemporalscalerbase/fence.md): An optional fence that you provide to synchronize your app’s untracked resources.
- [inputContentHeight](mtlfxtemporalscalerbase/inputcontentheight.md): The height, in pixels, of the region within the color texture the scaler uses as its input.
- [inputContentMaxScale](mtlfxtemporalscalerbase/inputcontentmaxscale.md): The largest scale factor the temporal scaler can use to generate output textures.
- [inputContentMinScale](mtlfxtemporalscalerbase/inputcontentminscale.md): The smallest scale factor the temporal scaler can use to generate output textures.
- [inputContentWidth](mtlfxtemporalscalerbase/inputcontentwidth.md): The width, in pixels, of the region within the color texture the scaler uses as its input.
- [inputHeight](mtlfxtemporalscalerbase/inputheight.md): The height, in pixels, of the input color texture for this scaler.
- [inputWidth](mtlfxtemporalscalerbase/inputwidth.md): The width, in pixels, of the input color texture for this scaler.
- [isDepthReversed](mtlfxtemporalscalerbase/isdepthreversed.md): A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.
- [jitterOffsetX](mtlfxtemporalscalerbase/jitteroffsetx.md): The horizontal component of the subpixel sampling coordinate you use to generate the color texture input.
- [jitterOffsetY](mtlfxtemporalscalerbase/jitteroffsety.md): The vertical component of the subpixel sampling coordinate you use to generate the color texture input.
- [motionContentOffsetX](mtlfxtemporalscalerbase/motioncontentoffsetx.md): The horizontal offset, in pixels, of the region within the motion texture to use as input.
- [motionContentOffsetY](mtlfxtemporalscalerbase/motioncontentoffsety.md): The vertical offset, in pixels, of the region within the motion texture to use as input.
- [motionTexture](mtlfxtemporalscalerbase/motiontexture.md): An input motion texture you set for the scaler that supports the correct color texture usage options.
- [motionTextureFormat](mtlfxtemporalscalerbase/motiontextureformat.md): The pixel format of the input motion texture for this this scaler.
- [motionTextureUsage](mtlfxtemporalscalerbase/motiontextureusage.md): The minimal texture usage options that your app’s motion texture needs in order to support this scaler.
- [motionVectorScaleX](mtlfxtemporalscalerbase/motionvectorscalex.md): The horizontal scale factor the scaler applies to the input motion texture.
- [motionVectorScaleY](mtlfxtemporalscalerbase/motionvectorscaley.md): The vertical scale factor the scaler applies to the input motion texture.
- [outputHeight](mtlfxtemporalscalerbase/outputheight.md): The height, in pixels, of the output color texture for this scaler.
- [outputOffsetX](mtlfxtemporalscalerbase/outputoffsetx.md): The horizontal offset, in pixels, of the region within the output texture to write results.
- [outputOffsetY](mtlfxtemporalscalerbase/outputoffsety.md): The vertical offset, in pixels, of the region within the output texture to write results.
- [outputTexture](mtlfxtemporalscalerbase/outputtexture.md): The output texture into which this scaler writes its output.
- [outputTextureFormat](mtlfxtemporalscalerbase/outputtextureformat.md): The pixel format of the output color texture for this this scaler.
- [outputTextureUsage](mtlfxtemporalscalerbase/outputtextureusage.md): The minimal texture usage options that your output texture needs in order to support this scaler.
- [outputWidth](mtlfxtemporalscalerbase/outputwidth.md): The width, in pixels, of the output color texture for this scaler.
- [preExposure](mtlfxtemporalscalerbase/preexposure.md): A pre-exposure value this scaler evaluates.
- [reactiveMaskContentOffsetX](mtlfxtemporalscalerbase/reactivemaskcontentoffsetx.md): The horizontal offset, in pixels, of the region within the reactive mask texture to use as input.
- [reactiveMaskContentOffsetY](mtlfxtemporalscalerbase/reactivemaskcontentoffsety.md): The vertical offset, in pixels, of the region within the reactive mask texture to use as input.
- [reactiveMaskTexture](mtlfxtemporalscalerbase/reactivemasktexture.md): The reactive-mask texture input this scaler uses.
- [reactiveMaskTextureFormat](mtlfxtemporalscalerbase/reactivemasktextureformat.md): The pixel format of the input reactive mask texture for this this scaler.
- [reactiveMaskTextureUsage](mtlfxtemporalscalerbase/reactivemasktextureusage.md): The minimal texture usage options that your app’s reactive mask texture needs in order to support this scaler.
- [reactiveTextureUsage](mtlfxtemporalscalerbase/reactivetextureusage.md): Deprecated. The minimal texture usage options that your app’s reactive texture needs in order to support this scaler.
- [reset](mtlfxtemporalscalerbase/reset.md): A Boolean that indicates whether the temporal scaler discards historical data from previous frames.

## Relationships

### Inherits From

- [MTLFXFrameInterpolatableScaler](mtlfxframeinterpolatablescaler.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTL4FXTemporalScaler](mtl4fxtemporalscaler.md)
- [MTLFXTemporalScaler](mtlfxtemporalscaler.md)

# MTLFXTemporalScalerBase (Objective-C)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS · visionOS 1.0+

An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.

## Declaration

```objectivec
@protocol MTLFXTemporalScalerBase <MTLFXFrameInterpolatableScaler>
```

<a id="overview"></a>

## Overview

The MetalFX temporal scaler increases the size of your input texture to a larger output texture. You can use the scaler to upscale every frame of your app’s scene or rendering in real time. With a scaler, you can draw more complicated scenes in less time by intentionally rendering to a lower resolution to save time before upscaling.

Create an [MTLFXTemporalScaler](mtlfxtemporalscaler.md) instance by following these steps:

1. Create and configure an [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md) instance.
2. Call the descriptor’s `newTemporalScalerWithDevice:` method.

Upscale a rendering by following these steps for every render pass:

1. Set the temporal scaler’s [colorTexture](mtlfxtemporalscalerbase/colortexture.md) property to the input texture.
2. Set the scaler’s [inputContentWidth](mtlfxtemporalscalerbase/inputcontentwidth.md) and [inputContentHeight](mtlfxtemporalscalerbase/inputcontentheight.md) properties.
3. Set the scaler’s [outputTexture](mtlfxtemporalscalerbase/outputtexture.md) property to your destination texture.
4. Encode the upscale commands to a command buffer by calling the temporal scaler’s [encodeToCommandBuffer:](mtlfxtemporalscaler/encode%28commandbuffer_%29.md) method.

<a id="Conforming-to-texture-usage-requirements"></a>

## Conforming to texture usage requirements

Temporal scalers expose properties, such as [colorTextureUsage](mtlfxtemporalscalerbase/colortextureusage.md), that indicate requirements for your textures to be compatible with it. These properties indicate the minimum set of `MTLTextureUsage` bits that you are responsible for setting in your texture descriptors for this spatial scaler to use them.

Your game or app can set extra usage bits on your textures without losing compatibility, as long at its maintains the minimum set the scaler requests.

<a id="Assigning-input-and-output-textures"></a>

## Assigning input and output textures

When you use an instance of a class that conforms to this protocol, you typically set its input and output textures, as well as other properties, and then encode its work to a command buffer.

MetalFX doesn’t track that you assign the same texture instances to each property across different batches of work, the only requirement is that you provide textures that match the pixel formats and dimensions you specify in the [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md) descriptor instance that creates the scaler instance.

## Topics

### Instance Properties

- [colorContentOffsetX](mtlfxtemporalscalerbase/colorcontentoffsetx.md): The horizontal offset, in pixels, of the region within the color texture to use as input.
- [colorContentOffsetY](mtlfxtemporalscalerbase/colorcontentoffsety.md): The vertical offset, in pixels, of the region within the color texture to use as input.
- [colorTexture](mtlfxtemporalscalerbase/colortexture.md): An input color texture you set for the scaler that supports the correct color texture usage options.
- [colorTextureFormat](mtlfxtemporalscalerbase/colortextureformat.md): The pixel format of the input color texture for this this scaler.
- [colorTextureUsage](mtlfxtemporalscalerbase/colortextureusage.md): The minimal texture usage options that your app’s input color texture needs in order to support this scaler.
- [depthContentOffsetX](mtlfxtemporalscalerbase/depthcontentoffsetx.md): The horizontal offset, in pixels, of the region within the depth texture to use as input.
- [depthContentOffsetY](mtlfxtemporalscalerbase/depthcontentoffsety.md): The vertical offset, in pixels, of the region within the depth texture to use as input.
- [depthTexture](mtlfxtemporalscalerbase/depthtexture.md): An input depth texture you set for the scaler that supports the correct color texture usage options.
- [depthTextureFormat](mtlfxtemporalscalerbase/depthtextureformat.md): The pixel format of the input depth texture for this this scaler.
- [depthTextureUsage](mtlfxtemporalscalerbase/depthtextureusage.md): The minimal texture usage options that your app’s input depth texture needs in order to support this scaler.
- [exposureTexture](mtlfxtemporalscalerbase/exposuretexture.md): The exposure texture this scaler uses.
- [fence](mtlfxtemporalscalerbase/fence.md): An optional fence that you provide to synchronize your app’s untracked resources.
- [inputContentHeight](mtlfxtemporalscalerbase/inputcontentheight.md): The height, in pixels, of the region within the color texture the scaler uses as its input.
- [inputContentMaxScale](mtlfxtemporalscalerbase/inputcontentmaxscale.md): The largest scale factor the temporal scaler can use to generate output textures.
- [inputContentMinScale](mtlfxtemporalscalerbase/inputcontentminscale.md): The smallest scale factor the temporal scaler can use to generate output textures.
- [inputContentWidth](mtlfxtemporalscalerbase/inputcontentwidth.md): The width, in pixels, of the region within the color texture the scaler uses as its input.
- [inputHeight](mtlfxtemporalscalerbase/inputheight.md): The height, in pixels, of the input color texture for this scaler.
- [inputWidth](mtlfxtemporalscalerbase/inputwidth.md): The width, in pixels, of the input color texture for this scaler.
- [depthReversed](mtlfxtemporalscalerbase/isdepthreversed.md): A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.
- [jitterOffsetX](mtlfxtemporalscalerbase/jitteroffsetx.md): The horizontal component of the subpixel sampling coordinate you use to generate the color texture input.
- [jitterOffsetY](mtlfxtemporalscalerbase/jitteroffsety.md): The vertical component of the subpixel sampling coordinate you use to generate the color texture input.
- [motionContentOffsetX](mtlfxtemporalscalerbase/motioncontentoffsetx.md): The horizontal offset, in pixels, of the region within the motion texture to use as input.
- [motionContentOffsetY](mtlfxtemporalscalerbase/motioncontentoffsety.md): The vertical offset, in pixels, of the region within the motion texture to use as input.
- [motionTexture](mtlfxtemporalscalerbase/motiontexture.md): An input motion texture you set for the scaler that supports the correct color texture usage options.
- [motionTextureFormat](mtlfxtemporalscalerbase/motiontextureformat.md): The pixel format of the input motion texture for this this scaler.
- [motionTextureUsage](mtlfxtemporalscalerbase/motiontextureusage.md): The minimal texture usage options that your app’s motion texture needs in order to support this scaler.
- [motionVectorScaleX](mtlfxtemporalscalerbase/motionvectorscalex.md): The horizontal scale factor the scaler applies to the input motion texture.
- [motionVectorScaleY](mtlfxtemporalscalerbase/motionvectorscaley.md): The vertical scale factor the scaler applies to the input motion texture.
- [outputHeight](mtlfxtemporalscalerbase/outputheight.md): The height, in pixels, of the output color texture for this scaler.
- [outputOffsetX](mtlfxtemporalscalerbase/outputoffsetx.md): The horizontal offset, in pixels, of the region within the output texture to write results.
- [outputOffsetY](mtlfxtemporalscalerbase/outputoffsety.md): The vertical offset, in pixels, of the region within the output texture to write results.
- [outputTexture](mtlfxtemporalscalerbase/outputtexture.md): The output texture into which this scaler writes its output.
- [outputTextureFormat](mtlfxtemporalscalerbase/outputtextureformat.md): The pixel format of the output color texture for this this scaler.
- [outputTextureUsage](mtlfxtemporalscalerbase/outputtextureusage.md): The minimal texture usage options that your output texture needs in order to support this scaler.
- [outputWidth](mtlfxtemporalscalerbase/outputwidth.md): The width, in pixels, of the output color texture for this scaler.
- [preExposure](mtlfxtemporalscalerbase/preexposure.md): A pre-exposure value this scaler evaluates.
- [reactiveMaskContentOffsetX](mtlfxtemporalscalerbase/reactivemaskcontentoffsetx.md): The horizontal offset, in pixels, of the region within the reactive mask texture to use as input.
- [reactiveMaskContentOffsetY](mtlfxtemporalscalerbase/reactivemaskcontentoffsety.md): The vertical offset, in pixels, of the region within the reactive mask texture to use as input.
- [reactiveMaskTexture](mtlfxtemporalscalerbase/reactivemasktexture.md): The reactive-mask texture input this scaler uses.
- [reactiveMaskTextureFormat](mtlfxtemporalscalerbase/reactivemasktextureformat.md): The pixel format of the input reactive mask texture for this this scaler.
- [reactiveMaskTextureUsage](mtlfxtemporalscalerbase/reactivemasktextureusage.md): The minimal texture usage options that your app’s reactive mask texture needs in order to support this scaler.
- [reactiveTextureUsage](mtlfxtemporalscalerbase/reactivetextureusage.md): Deprecated. The minimal texture usage options that your app’s reactive texture needs in order to support this scaler.
- [reset](mtlfxtemporalscalerbase/reset.md): A Boolean that indicates whether the temporal scaler discards historical data from previous frames.

## Relationships

### Inherits From

- [MTLFXFrameInterpolatableScaler](mtlfxframeinterpolatablescaler.md)

### Inherited By

- [MTL4FXTemporalScaler](mtl4fxtemporalscaler.md)
- [MTLFXTemporalScaler](mtlfxtemporalscaler.md)
