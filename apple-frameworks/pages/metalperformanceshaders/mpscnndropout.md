> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndropout](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndropout)

# MPSCNNDropout (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A dropout filter.

## Declaration

```swift
class MPSCNNDropout
```

## Topics

### Initializers

- [init(coder:device:)](mpscnndropout/init%28coder_device_%29.md)
- [init(device:keepProbability:seed:maskStrideInPixels:)](mpscnndropout/init%28device_keepprobability_seed_maskstrideinpixels_%29.md)

### Instance Properties

- [keepProbability](mpscnndropout/keepprobability.md)
- [maskStrideInPixels](mpscnndropout/maskstrideinpixels.md)
- [seed](mpscnndropout/seed.md)

### Instance Methods

- [resultState(sourceImage:sourceStates:destinationImage:)](mpscnndropout/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatch(sourceImage:sourceStates:destinationImage:)](mpscnndropout/resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnndropout/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatch(commandBuffer:sourceImage:sourceStates:destinationImage:)](mpscnndropout/temporaryresultstatebatch%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Dropout Layers

- [MPSCNNDropoutGradient](mpscnndropoutgradient.md): A gradient dropout filter.
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md): A class that stores the mask used by dropout and gradient dropout filters.

# MPSCNNDropout (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A dropout filter.

## Declaration

```objectivec
@interface MPSCNNDropout : MPSCNNKernel
```

## Topics

### Instance Properties

- [keepProbability](mpscnndropout/keepprobability.md)
- [maskStrideInPixels](mpscnndropout/maskstrideinpixels.md)
- [seed](mpscnndropout/seed.md)

### Instance Methods

- [initWithCoder:device:](mpscnndropout/init%28coder_device_%29.md)
- [initWithDevice:keepProbability:seed:maskStrideInPixels:](mpscnndropout/init%28device_keepprobability_seed_maskstrideinpixels_%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](mpscnndropout/resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatchForSourceImage:sourceStates:destinationImage:](mpscnndropout/resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnndropout/temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatchForCommandBuffer:sourceImage:sourceStates:destinationImage:](mpscnndropout/temporaryresultstatebatch%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSCNNKernel](mpscnnkernel.md)

## See Also

### Dropout Layers

- [MPSCNNDropoutGradient](mpscnndropoutgradient.md): A gradient dropout filter.
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md): A class that stores the mask used by dropout and gradient dropout filters.
