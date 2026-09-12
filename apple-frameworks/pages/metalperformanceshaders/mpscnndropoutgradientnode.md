> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndropoutgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndropoutgradientnode)

# MPSCNNDropoutGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient dropout filter.

## Declaration

```swift
class MPSCNNDropoutGradientNode
```

## Topics

### Initializers

- [init(sourceGradient:sourceImage:gradientState:keepProbability:seed:maskStrideInPixels:)](mpscnndropoutgradientnode/init%28sourcegradient_sourceimage_gradientstate_keepprobability_seed_maskstrideinpixels_%29.md)

### Instance Properties

- [keepProbability](mpscnndropoutgradientnode/keepprobability.md)
- [maskStrideInPixels](mpscnndropoutgradientnode/maskstrideinpixels.md)
- [seed](mpscnndropoutgradientnode/seed.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Dropout Layer Nodes

- [MPSCNNDropoutNode](mpscnndropoutnode.md): A representation of a dropout filter.

# MPSCNNDropoutGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a gradient dropout filter.

## Declaration

```objectivec
@interface MPSCNNDropoutGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [keepProbability](mpscnndropoutgradientnode/keepprobability.md)
- [maskStrideInPixels](mpscnndropoutgradientnode/maskstrideinpixels.md)
- [seed](mpscnndropoutgradientnode/seed.md)

### Instance Methods

- [initWithSourceGradient:sourceImage:gradientState:keepProbability:seed:maskStrideInPixels:](mpscnndropoutgradientnode/init%28sourcegradient_sourceimage_gradientstate_keepprobability_seed_maskstrideinpixels_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:keepProbability:seed:maskStrideInPixels:](mpscnndropoutgradientnode/nodewithsourcegradient_sourceimage_gradientstate_keepprobability_seed_maskstrideinpixels_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

## See Also

### Dropout Layer Nodes

- [MPSCNNDropoutNode](mpscnndropoutnode.md): A representation of a dropout filter.
