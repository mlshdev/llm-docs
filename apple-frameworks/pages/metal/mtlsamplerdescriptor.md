> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor)

# MTLSamplerDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An object that you use to configure a texture sampler.

## Declaration

```swift
class MTLSamplerDescriptor
```

## Mentioned In

- [Adding mipmap filtering to samplers](adding-mipmap-filtering-to-samplers.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Restricting access to specific mipmaps](restricting-access-to-specific-mipmaps.md)

<a id="overview"></a>

## Overview

To make a sampler, create and configure an [MTLSamplerDescriptor](mtlsamplerdescriptor.md) instance and then call an [MTLDevice](mtldevice.md) instance’s [makeSamplerState(descriptor:)](mtldevice/makesamplerstate%28descriptor_%29.md) method. After you create the sampler, you can release the descriptor or reconfigure its properties to create other samplers.

## Topics

### Declaring the coordinate space

- [normalizedCoordinates](mtlsamplerdescriptor/normalizedcoordinates.md): A Boolean value that indicates whether texture coordinates are normalized to the range `[0.0, 1.0]`.

### Declaring addressing modes

- [rAddressMode](mtlsamplerdescriptor/raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](mtlsamplerdescriptor/saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](mtlsamplerdescriptor/taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](mtlsamplerdescriptor/bordercolor.md): The border color for clamped texture values.
- [MTLSamplerAddressMode](mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
- [MTLSamplerBorderColor](mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressMode.clampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md).

### Declaring filter modes

- [minFilter](mtlsamplerdescriptor/minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](mtlsamplerdescriptor/magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [mipFilter](mtlsamplerdescriptor/mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](mtlsamplerdescriptor/lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](mtlsamplerdescriptor/lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](mtlsamplerdescriptor/lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](mtlsamplerdescriptor/maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.

### Declaring the depth comparison mode

- [compareFunction](mtlsamplerdescriptor/comparefunction.md): The sampler comparison function used when performing a sample compare operation on a depth texture.
- [MTLCompareFunction](mtlcomparefunction.md): Options used to specify how a sample compare operation should be performed on a depth texture.

### Declaring whether the sampler can be used in argument buffers

- [supportArgumentBuffers](mtlsamplerdescriptor/supportargumentbuffers.md): A Boolean value that indicates whether you can reference a sampler, that you make with this descriptor, by its resource ID from an argument buffer.

### Identifying the sampler

- [label](mtlsamplerdescriptor/label.md): A string that identifies the sampler.

### Instance Properties

- [lodBias](mtlsamplerdescriptor/lodbias.md): Sets the level-of-detail (lod) bias when sampling from a texture.
- [reductionMode](mtlsamplerdescriptor/reductionmode.md): Sets the reduction mode for filtering contributing samples.

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

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerState](mtlsamplerstate.md): An instance that defines how a texture should be sampled.
- [MTLSamplePosition](mtlsampleposition.md): A subpixel sample position for use in multisample antialiasing (MSAA).
- [MTLSamplerReductionMode](mtlsamplerreductionmode.md): Configures how the sampler aggregates contributing samples to a final value.

# MTLSamplerDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An object that you use to configure a texture sampler.

## Declaration

```objectivec
@interface MTLSamplerDescriptor : NSObject
```

## Mentioned In

- [Adding mipmap filtering to samplers](adding-mipmap-filtering-to-samplers.md)
- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)
- [Restricting access to specific mipmaps](restricting-access-to-specific-mipmaps.md)

<a id="overview"></a>

## Overview

To make a sampler, create and configure an [MTLSamplerDescriptor](mtlsamplerdescriptor.md) instance and then call an [MTLDevice](mtldevice.md) instance’s [newSamplerStateWithDescriptor:](mtldevice/makesamplerstate%28descriptor_%29.md) method. After you create the sampler, you can release the descriptor or reconfigure its properties to create other samplers.

## Topics

### Declaring the coordinate space

- [normalizedCoordinates](mtlsamplerdescriptor/normalizedcoordinates.md): A Boolean value that indicates whether texture coordinates are normalized to the range `[0.0, 1.0]`.

### Declaring addressing modes

- [rAddressMode](mtlsamplerdescriptor/raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](mtlsamplerdescriptor/saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](mtlsamplerdescriptor/taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](mtlsamplerdescriptor/bordercolor.md): The border color for clamped texture values.
- [MTLSamplerAddressMode](mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
- [MTLSamplerBorderColor](mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressModeClampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md).

### Declaring filter modes

- [minFilter](mtlsamplerdescriptor/minfilter.md): The filtering option for combining pixels within one mipmap level when the sample footprint is larger than a pixel (minification).
- [magFilter](mtlsamplerdescriptor/magfilter.md): The filtering operation for combining pixels within one mipmap level when the sample footprint is smaller than a pixel (magnification).
- [mipFilter](mtlsamplerdescriptor/mipfilter.md): The filtering option for combining pixels between two mipmap levels.
- [lodMinClamp](mtlsamplerdescriptor/lodminclamp.md): The minimum level of detail (LOD) to use when sampling from a texture.
- [lodMaxClamp](mtlsamplerdescriptor/lodmaxclamp.md): The maximum level of detail (LOD) to use when sampling from a texture.
- [lodAverage](mtlsamplerdescriptor/lodaverage.md): A Boolean value that specifies whether the GPU can use an average level of detail (LOD) when sampling from a texture.
- [maxAnisotropy](mtlsamplerdescriptor/maxanisotropy.md): The number of samples that can be taken to improve the quality of sample footprints that are anisotropic.
- [MTLSamplerMinMagFilter](mtlsamplerminmagfilter.md): Filtering options for determining which pixel value is returned within a mipmap level.
- [MTLSamplerMipFilter](mtlsamplermipfilter.md): Filtering options for determining what pixel value is returned with multiple mipmap levels.

### Declaring the depth comparison mode

- [compareFunction](mtlsamplerdescriptor/comparefunction.md): The sampler comparison function used when performing a sample compare operation on a depth texture.
- [MTLCompareFunction](mtlcomparefunction.md): Options used to specify how a sample compare operation should be performed on a depth texture.

### Declaring whether the sampler can be used in argument buffers

- [supportArgumentBuffers](mtlsamplerdescriptor/supportargumentbuffers.md): A Boolean value that indicates whether you can reference a sampler, that you make with this descriptor, by its resource ID from an argument buffer.

### Identifying the sampler

- [label](mtlsamplerdescriptor/label.md): A string that identifies the sampler.

### Instance Properties

- [lodBias](mtlsamplerdescriptor/lodbias.md): Sets the level-of-detail (lod) bias when sampling from a texture.
- [reductionMode](mtlsamplerdescriptor/reductionmode.md): Sets the reduction mode for filtering contributing samples.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerState](mtlsamplerstate.md): An instance that defines how a texture should be sampled.
- [MTLSamplePosition](mtlsampleposition.md): A subpixel sample position for use in multisample antialiasing (MSAA).
- [MTLSamplerReductionMode](mtlsamplerreductionmode.md): Configures how the sampler aggregates contributing samples to a final value.
