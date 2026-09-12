> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsampleposition](https://developer.apple.com/documentation/metal/mtlsampleposition)

# MTLSamplePosition (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A subpixel sample position for use in multisample antialiasing (MSAA).

## Declaration

```swift
struct MTLSamplePosition
```

## Mentioned In

- [Positioning samples programmatically](positioning-samples-programmatically.md)

<a id="overview"></a>

## Overview

Subpixel sample positions are in a 16 x 16 grid across a pixel. Each subsample position’s [x](mtlsampleposition/x.md) and [y](mtlsampleposition/y.md) values are in 1/16 increments in the floating-point range `[0.0, 15.0/16.0)`. The pixel’s origin point `(0,0)` is at the top-left corner.

See [Positioning samples programmatically](positioning-samples-programmatically.md) for the details on working with subpixels.

## Topics

### Initializers

- [init()](mtlsampleposition/init%28%29.md): Returns a new sample position on a subpixel grid.
- [init(x:y:)](mtlsampleposition/init%28x_y_%29.md): Returns a new sample position on a subpixel grid at specified coordinates.

### Instance Properties

- [x](mtlsampleposition/x.md): The x position of the sample on the subpixel grid.
- [y](mtlsampleposition/y.md): The y position of the sample on the subpixel grid.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerState](mtlsamplerstate.md): An instance that defines how a texture should be sampled.
- [MTLSamplerDescriptor](mtlsamplerdescriptor.md): An object that you use to configure a texture sampler.
- [MTLSamplerReductionMode](mtlsamplerreductionmode.md): Configures how the sampler aggregates contributing samples to a final value.

# MTLSamplePosition (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A subpixel sample position for use in multisample antialiasing (MSAA).

## Declaration

```objectivec
typedef struct { ... } MTLSamplePosition;
```

## Mentioned In

- [Positioning samples programmatically](positioning-samples-programmatically.md)

<a id="overview"></a>

## Overview

Subpixel sample positions are in a 16 x 16 grid across a pixel. Each subsample position’s [x](mtlsampleposition/x.md) and [y](mtlsampleposition/y.md) values are in 1/16 increments in the floating-point range `[0.0, 15.0/16.0)`. The pixel’s origin point `(0,0)` is at the top-left corner.

See [Positioning samples programmatically](positioning-samples-programmatically.md) for the details on working with subpixels.

## Topics

### Instance Properties

- [x](mtlsampleposition/x.md): The x position of the sample on the subpixel grid.
- [y](mtlsampleposition/y.md): The y position of the sample on the subpixel grid.

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerState](mtlsamplerstate.md): An instance that defines how a texture should be sampled.
- [MTLSamplerDescriptor](mtlsamplerdescriptor.md): An object that you use to configure a texture sampler.
- [MTLSamplerReductionMode](mtlsamplerreductionmode.md): Configures how the sampler aggregates contributing samples to a final value.
