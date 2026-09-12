> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscaler](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscaler)

# MTLFXTemporalScaler (Swift)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.

## Declaration

```swift
protocol MTLFXTemporalScaler : MTLFXTemporalScalerBase
```

<a id="overview"></a>

## Overview

The MetalFX temporal scaler increases the size of your input texture to a larger output texture. You can use the scaler to upscale every frame of your app’s scene or rendering in real time. With a scaler, you can draw more complicated scenes in less time by intentionally rendering to a lower resolution to save time before upscaling.

Create an [MTLFXTemporalScaler](mtlfxtemporalscaler.md) instance by following these steps:

1. Create and configure an [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md) instance.
2. Call the descriptor’s [makeTemporalScaler(device:)](mtlfxtemporalscalerdescriptor/maketemporalscaler%28device_%29.md) method.

Upscale a rendering by following these steps for every render pass:

1. Set the temporal scaler’s `MTLFXTemporalScaler/colorTexture` property to the input texture.
2. Set the scaler’s `MTLFXTemporalScaler/inputContentWidth` and `MTLFXTemporalScaler/inputContentHeight` properties.
3. Set the scaler’s `MTLFXTemporalScaler/outputTexture` property to your destination texture.
4. Encode the upscale commands to an [MTLCommandBuffer](../metal/mtlcommandbuffer.md) by calling the temporal scaler’s [encode(commandBuffer:)](mtlfxtemporalscaler/encode%28commandbuffer_%29.md) method.

## Topics

### Encoding a temporal scaling effect

- [encode(commandBuffer:)](mtlfxtemporalscaler/encode%28commandbuffer_%29.md): Adds the temporal scaling command to a render pass’s command buffer.

## Relationships

### Inherits From

- [MTLFXFrameInterpolatableScaler](mtlfxframeinterpolatablescaler.md)
- [MTLFXTemporalScalerBase](mtlfxtemporalscalerbase.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Temporal scaling

- [Applying temporal antialiasing and upscaling using MetalFX](applying-temporal-antialiasing-and-upscaling-using-metalfx.md): Reduce render workloads while increasing image detail with MetalFX.
- [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md): A set of properties that configure a temporal scaling effect, and a factory method that creates the effect.

# MTLFXTemporalScaler (Objective-C)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+

An upscaling effect that generates a higher resolution texture in a render pass by analyzing multiple input textures over time.

## Declaration

```objectivec
@protocol MTLFXTemporalScaler <MTLFXTemporalScalerBase>
```

<a id="overview"></a>

## Overview

The MetalFX temporal scaler increases the size of your input texture to a larger output texture. You can use the scaler to upscale every frame of your app’s scene or rendering in real time. With a scaler, you can draw more complicated scenes in less time by intentionally rendering to a lower resolution to save time before upscaling.

Create an [MTLFXTemporalScaler](mtlfxtemporalscaler.md) instance by following these steps:

1. Create and configure an [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md) instance.
2. Call the descriptor’s [newTemporalScalerWithDevice:](mtlfxtemporalscalerdescriptor/maketemporalscaler%28device_%29.md) method.

Upscale a rendering by following these steps for every render pass:

1. Set the temporal scaler’s `MTLFXTemporalScaler/colorTexture` property to the input texture.
2. Set the scaler’s `MTLFXTemporalScaler/inputContentWidth` and `MTLFXTemporalScaler/inputContentHeight` properties.
3. Set the scaler’s `MTLFXTemporalScaler/outputTexture` property to your destination texture.
4. Encode the upscale commands to an [MTLCommandBuffer](../metal/mtlcommandbuffer.md) by calling the temporal scaler’s [encodeToCommandBuffer:](mtlfxtemporalscaler/encode%28commandbuffer_%29.md) method.

## Topics

### Encoding a temporal scaling effect

- [encodeToCommandBuffer:](mtlfxtemporalscaler/encode%28commandbuffer_%29.md): Adds the temporal scaling command to a render pass’s command buffer.

## Relationships

### Inherits From

- [MTLFXTemporalScalerBase](mtlfxtemporalscalerbase.md)

## See Also

### Temporal scaling

- [Applying temporal antialiasing and upscaling using MetalFX](applying-temporal-antialiasing-and-upscaling-using-metalfx.md): Reduce render workloads while increasing image detail with MetalFX.
- [MTLFXTemporalScalerDescriptor](mtlfxtemporalscalerdescriptor.md): A set of properties that configure a temporal scaling effect, and a factory method that creates the effect.
