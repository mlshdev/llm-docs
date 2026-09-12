> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnndropoutnode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnndropoutnode)

# MPSCNNDropoutNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a dropout filter.

## Declaration

```swift
class MPSCNNDropoutNode
```

## Topics

### Initializers

- [init(source:)](mpscnndropoutnode/init%28source_%29.md)
- [init(source:keepProbability:)](mpscnndropoutnode/init%28source_keepprobability_%29.md)
- [init(source:keepProbability:seed:maskStrideInPixels:)](mpscnndropoutnode/init%28source_keepprobability_seed_maskstrideinpixels_%29.md)

### Instance Properties

- [keepProbability](mpscnndropoutnode/keepprobability.md)
- [maskStrideInPixels](mpscnndropoutnode/maskstrideinpixels.md)
- [seed](mpscnndropoutnode/seed.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Dropout Layer Nodes

- [MPSCNNDropoutGradientNode](mpscnndropoutgradientnode.md): A representation of a gradient dropout filter.

# MPSCNNDropoutNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of a dropout filter.

## Declaration

```objectivec
@interface MPSCNNDropoutNode : MPSNNFilterNode
```

## Topics

### Instance Properties

- [keepProbability](mpscnndropoutnode/keepprobability.md)
- [maskStrideInPixels](mpscnndropoutnode/maskstrideinpixels.md)
- [seed](mpscnndropoutnode/seed.md)

### Instance Methods

- [initWithSource:](mpscnndropoutnode/init%28source_%29.md)
- [initWithSource:keepProbability:](mpscnndropoutnode/init%28source_keepprobability_%29.md)
- [initWithSource:keepProbability:seed:maskStrideInPixels:](mpscnndropoutnode/init%28source_keepprobability_seed_maskstrideinpixels_%29.md)

### Type Methods

- [nodeWithSource:](mpscnndropoutnode/nodewithsource_.md)
- [nodeWithSource:keepProbability:](mpscnndropoutnode/nodewithsource_keepprobability_.md)
- [nodeWithSource:keepProbability:seed:maskStrideInPixels:](mpscnndropoutnode/nodewithsource_keepprobability_seed_maskstrideinpixels_.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

## See Also

### Dropout Layer Nodes

- [MPSCNNDropoutGradientNode](mpscnndropoutgradientnode.md): A representation of a gradient dropout filter.
