> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerstate](https://developer.apple.com/documentation/metal/mtlsamplerstate)

# MTLSamplerState (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that defines how a texture should be sampled.

## Declaration

```swift
protocol MTLSamplerState : NSObjectProtocol, Sendable
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Adding mipmap filtering to samplers](adding-mipmap-filtering-to-samplers.md)

<a id="overview"></a>

## Overview

The [MTLSamplerState](mtlsamplerstate.md) protocol defines the interface for a lightweight instance used to encode how a shader or compute kernel should sample a texture. To create a sampler state instance:

1. Create an [MTLSamplerDescriptor](mtlsamplerdescriptor.md) instance.
2. Set the desired properties of the sampler descriptor, including filtering options, addressing modes, maximum anisotropy, and level-of-detail parameters.
3. Call the [makeSamplerState(descriptor:)](mtldevice/makesamplerstate%28descriptor_%29.md) method of the [MTLDevice](mtldevice.md) instance.

(Your app does not define a class that implements the [MTLSamplerState](mtlsamplerstate.md) protocol.)

You can either release the [MTLSamplerDescriptor](mtlsamplerdescriptor.md) instance or modify its property values and reuse it to create more [MTLSamplerState](mtlsamplerstate.md) instances. The descriptor’s properties are only used during instance creation; once created the behavior of a sampler state instance is fixed and cannot be changed.

## Topics

### Identifying the sampler

- [device](mtlsamplerstate/device.md): The device object that created the sampler.
- [label](mtlsamplerstate/label.md): A string that identifies the sampler.

### Instance Properties

- [gpuResourceID](mtlsamplerstate/gpuresourceid.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerDescriptor](mtlsamplerdescriptor.md): An object that you use to configure a texture sampler.
- [MTLSamplePosition](mtlsampleposition.md): A subpixel sample position for use in multisample antialiasing (MSAA).
- [MTLSamplerReductionMode](mtlsamplerreductionmode.md): Configures how the sampler aggregates contributing samples to a final value.

# MTLSamplerState (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that defines how a texture should be sampled.

## Declaration

```objectivec
@protocol MTLSamplerState <NSObject>
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Adding mipmap filtering to samplers](adding-mipmap-filtering-to-samplers.md)

<a id="overview"></a>

## Overview

The [MTLSamplerState](mtlsamplerstate.md) protocol defines the interface for a lightweight instance used to encode how a shader or compute kernel should sample a texture. To create a sampler state instance:

1. Create an [MTLSamplerDescriptor](mtlsamplerdescriptor.md) instance.
2. Set the desired properties of the sampler descriptor, including filtering options, addressing modes, maximum anisotropy, and level-of-detail parameters.
3. Call the [newSamplerStateWithDescriptor:](mtldevice/makesamplerstate%28descriptor_%29.md) method of the [MTLDevice](mtldevice.md) instance.

(Your app does not define a class that implements the [MTLSamplerState](mtlsamplerstate.md) protocol.)

You can either release the [MTLSamplerDescriptor](mtlsamplerdescriptor.md) instance or modify its property values and reuse it to create more [MTLSamplerState](mtlsamplerstate.md) instances. The descriptor’s properties are only used during instance creation; once created the behavior of a sampler state instance is fixed and cannot be changed.

## Topics

### Identifying the sampler

- [device](mtlsamplerstate/device.md): The device object that created the sampler.
- [label](mtlsamplerstate/label.md): A string that identifies the sampler.

### Instance Properties

- [gpuResourceID](mtlsamplerstate/gpuresourceid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerDescriptor](mtlsamplerdescriptor.md): An object that you use to configure a texture sampler.
- [MTLSamplePosition](mtlsampleposition.md): A subpixel sample position for use in multisample antialiasing (MSAA).
- [MTLSamplerReductionMode](mtlsamplerreductionmode.md): Configures how the sampler aggregates contributing samples to a final value.
