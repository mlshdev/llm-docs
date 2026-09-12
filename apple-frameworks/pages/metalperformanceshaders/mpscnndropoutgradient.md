> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndropoutgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndropoutgradient)

# MPSCNNDropoutGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient dropout filter.

## Declaration

```swift
class MPSCNNDropoutGradient
```

## Topics

### Initializers

- [init(coder:device:)](mpscnndropoutgradient/init%28coder_device_%29.md)
- [init(device:keepProbability:seed:maskStrideInPixels:)](mpscnndropoutgradient/init%28device_keepprobability_seed_maskstrideinpixels_%29.md)

### Instance Properties

- [keepProbability](mpscnndropoutgradient/keepprobability.md)
- [maskStrideInPixels](mpscnndropoutgradient/maskstrideinpixels.md)
- [seed](mpscnndropoutgradient/seed.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

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

- [MPSCNNDropout](mpscnndropout.md): A dropout filter.
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md): A class that stores the mask used by dropout and gradient dropout filters.

# MPSCNNDropoutGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient dropout filter.

## Declaration

```objectivec
@interface MPSCNNDropoutGradient : MPSCNNGradientKernel
```

## Topics

### Instance Properties

- [keepProbability](mpscnndropoutgradient/keepprobability.md)
- [maskStrideInPixels](mpscnndropoutgradient/maskstrideinpixels.md)
- [seed](mpscnndropoutgradient/seed.md)

### Instance Methods

- [initWithCoder:device:](mpscnndropoutgradient/init%28coder_device_%29.md)
- [initWithDevice:keepProbability:seed:maskStrideInPixels:](mpscnndropoutgradient/init%28device_keepprobability_seed_maskstrideinpixels_%29.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

## See Also

### Dropout Layers

- [MPSCNNDropout](mpscnndropout.md): A dropout filter.
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md): A class that stores the mask used by dropout and gradient dropout filters.
