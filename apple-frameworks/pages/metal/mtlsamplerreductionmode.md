> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerreductionmode](https://developer.apple.com/documentation/metal/mtlsamplerreductionmode)

# MTLSamplerReductionMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures how the sampler aggregates contributing samples to a final value.

## Declaration

```swift
enum MTLSamplerReductionMode
```

## Topics

### Enumeration Cases

- [MTLSamplerReductionMode.maximum](mtlsamplerreductionmode/maximum.md): A reduction mode that finds the maximum contributing sample value by separately evaluating each channel.
- [MTLSamplerReductionMode.minimum](mtlsamplerreductionmode/minimum.md): A reduction mode that finds the minimum contributing sample value by separately evaluating each channel.
- [MTLSamplerReductionMode.weightedAverage](mtlsamplerreductionmode/weightedaverage.md): A reduction mode that adds together the product of each contributing sample value by its weight.

### Initializers

- [init(rawValue:)](mtlsamplerreductionmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerState](mtlsamplerstate.md): An instance that defines how a texture should be sampled.
- [MTLSamplerDescriptor](mtlsamplerdescriptor.md): An object that you use to configure a texture sampler.
- [MTLSamplePosition](mtlsampleposition.md): A subpixel sample position for use in multisample antialiasing (MSAA).

# MTLSamplerReductionMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures how the sampler aggregates contributing samples to a final value.

## Declaration

```objectivec
enum MTLSamplerReductionMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [MTLSamplerReductionModeMaximum](mtlsamplerreductionmode/maximum.md): A reduction mode that finds the maximum contributing sample value by separately evaluating each channel.
- [MTLSamplerReductionModeMinimum](mtlsamplerreductionmode/minimum.md): A reduction mode that finds the minimum contributing sample value by separately evaluating each channel.
- [MTLSamplerReductionModeWeightedAverage](mtlsamplerreductionmode/weightedaverage.md): A reduction mode that adds together the product of each contributing sample value by its weight.

## See Also

### Texture samplers

- [Creating and sampling textures](creating-and-sampling-textures.md): Load image data into a texture and apply it to a quadrangle.
- [MTLSamplerState](mtlsamplerstate.md): An instance that defines how a texture should be sampled.
- [MTLSamplerDescriptor](mtlsamplerdescriptor.md): An object that you use to configure a texture sampler.
- [MTLSamplePosition](mtlsampleposition.md): A subpixel sample position for use in multisample antialiasing (MSAA).
