> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtl4fxspatialscaler](https://developer.apple.com/documentation/metalfx/mtl4fxspatialscaler)

# MTL4FXSpatialScaler (Swift)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.

## Declaration

```swift
protocol MTL4FXSpatialScaler : MTLFXSpatialScalerBase
```

<a id="overview"></a>

## Overview

You create instances of this class by calling [makeSpatialScaler(device:compiler:)](mtlfxspatialscalerdescriptor/makespatialscaler%28device_compiler_%29.md).

When using instances of objects conforming to this protocol, you configure the different properties it inherits from protocol [MTLFXSpatialScalerBase](mtlfxspatialscalerbase.md) and then call [encode(commandBuffer:)](mtl4fxspatialscaler/encode%28commandbuffer_%29.md) to encode its work into a Metal command buffer.

See [MTLFXSpatialScalerBase](mtlfxspatialscalerbase.md) for more details on configuring and using spatial scalers.

## Topics

### Instance Methods

- [encode(commandBuffer:)](mtl4fxspatialscaler/encode%28commandbuffer_%29.md): Encode this spatial scaler work into a command buffer.

## Relationships

### Inherits From

- [MTLFXSpatialScalerBase](mtlfxspatialscalerbase.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTL4FXSpatialScaler (Objective-C)

**Framework:** MetalFX  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An upscaling effect that generates a higher resolution texture in a render pass by spatially analyzing an input texture.

## Declaration

```objectivec
@protocol MTL4FXSpatialScaler <MTLFXSpatialScalerBase>
```

<a id="overview"></a>

## Overview

You create instances of this class by calling [newSpatialScalerWithDevice:compiler:](mtlfxspatialscalerdescriptor/makespatialscaler%28device_compiler_%29.md).

When using instances of objects conforming to this protocol, you configure the different properties it inherits from protocol [MTLFXSpatialScalerBase](mtlfxspatialscalerbase.md) and then call [encodeToCommandBuffer:](mtl4fxspatialscaler/encode%28commandbuffer_%29.md) to encode its work into a Metal command buffer.

See [MTLFXSpatialScalerBase](mtlfxspatialscalerbase.md) for more details on configuring and using spatial scalers.

## Topics

### Instance Methods

- [encodeToCommandBuffer:](mtl4fxspatialscaler/encode%28commandbuffer_%29.md): Encode this spatial scaler work into a command buffer.

## Relationships

### Inherits From

- [MTLFXSpatialScalerBase](mtlfxspatialscalerbase.md)
