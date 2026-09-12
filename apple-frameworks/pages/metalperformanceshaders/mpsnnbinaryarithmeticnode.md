> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnbinaryarithmeticnode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnbinaryarithmeticnode)

# MPSNNBinaryArithmeticNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Virtual base class for basic arithmetic nodes.

## Declaration

```swift
class MPSNNBinaryArithmeticNode
```

## Topics

### Initializers

- [init(leftSource:rightSource:)](mpsnnbinaryarithmeticnode/init%28leftsource_rightsource_%29.md)
- [init(sources:)](mpsnnbinaryarithmeticnode/init%28sources_%29.md)

### Instance Properties

- [bias](mpsnnbinaryarithmeticnode/bias.md)
- [maximumValue](mpsnnbinaryarithmeticnode/maximumvalue.md)
- [minimumValue](mpsnnbinaryarithmeticnode/minimumvalue.md)
- [primaryScale](mpsnnbinaryarithmeticnode/primaryscale.md)
- [primaryStrideInFeatureChannels](mpsnnbinaryarithmeticnode/primarystrideinfeaturechannels.md)
- [primaryStrideInPixelsX](mpsnnbinaryarithmeticnode/primarystrideinpixelsx.md)
- [primaryStrideInPixelsY](mpsnnbinaryarithmeticnode/primarystrideinpixelsy.md)
- [secondaryScale](mpsnnbinaryarithmeticnode/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpsnnbinaryarithmeticnode/secondarystrideinfeaturechannels.md)
- [secondaryStrideInPixelsX](mpsnnbinaryarithmeticnode/secondarystrideinpixelsx.md)
- [secondaryStrideInPixelsY](mpsnnbinaryarithmeticnode/secondarystrideinpixelsy.md)

### Instance Methods

- [gradientClass()](mpsnnbinaryarithmeticnode/gradientclass%28%29.md)
- [gradientFilters(withSources:)](mpsnnbinaryarithmeticnode/gradientfilters%28withsources_%29.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSNNAdditionNode](mpsnnadditionnode.md)
- [MPSNNComparisonNode](mpsnncomparisonnode.md)
- [MPSNNDivisionNode](mpsnndivisionnode.md)
- [MPSNNMultiplicationNode](mpsnnmultiplicationnode.md)
- [MPSNNSubtractionNode](mpsnnsubtractionnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Arithmetic Layer Nodes

- [MPSNNAdditionNode](mpsnnadditionnode.md): A representation of an addition operator.
- [MPSNNAdditionGradientNode](mpsnnadditiongradientnode.md): A representation of a gradient addition operator.
- [MPSNNSubtractionNode](mpsnnsubtractionnode.md): A representation of an subtraction operator.
- [MPSNNSubtractionGradientNode](mpsnnsubtractiongradientnode.md): A representation of a gradient subtraction operator.
- [MPSNNMultiplicationNode](mpsnnmultiplicationnode.md): A representation of a multiplication operator.
- [MPSNNMultiplicationGradientNode](mpsnnmultiplicationgradientnode.md): A representation of a gradient multiplication operator.
- [MPSNNDivisionNode](mpsnndivisionnode.md): A representation of a division operator.
- [MPSNNArithmeticGradientNode](mpsnnarithmeticgradientnode.md): A representation of the base class for gradient arithmetic operators.
- [MPSNNArithmeticGradientStateNode](mpsnnarithmeticgradientstatenode.md): A representation of the clamp mask used by gradient arithmetic operators.

# MPSNNBinaryArithmeticNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Virtual base class for basic arithmetic nodes.

## Declaration

```objectivec
@interface MPSNNBinaryArithmeticNode : MPSNNFilterNode
```

## Topics

### Initializers

- [initWithLeftSource:rightSource:](mpsnnbinaryarithmeticnode/init%28leftsource_rightsource_%29.md)
- [initWithSources:](mpsnnbinaryarithmeticnode/init%28sources_%29.md)

### Type Methods

- [nodeWithLeftSource:rightSource:](mpsnnbinaryarithmeticnode/nodewithleftsource_rightsource_.md)
- [nodeWithSources:](mpsnnbinaryarithmeticnode/nodewithsources_.md)

### Instance Properties

- [bias](mpsnnbinaryarithmeticnode/bias.md)
- [maximumValue](mpsnnbinaryarithmeticnode/maximumvalue.md)
- [minimumValue](mpsnnbinaryarithmeticnode/minimumvalue.md)
- [primaryScale](mpsnnbinaryarithmeticnode/primaryscale.md)
- [primaryStrideInFeatureChannels](mpsnnbinaryarithmeticnode/primarystrideinfeaturechannels.md)
- [primaryStrideInPixelsX](mpsnnbinaryarithmeticnode/primarystrideinpixelsx.md)
- [primaryStrideInPixelsY](mpsnnbinaryarithmeticnode/primarystrideinpixelsy.md)
- [secondaryScale](mpsnnbinaryarithmeticnode/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpsnnbinaryarithmeticnode/secondarystrideinfeaturechannels.md)
- [secondaryStrideInPixelsX](mpsnnbinaryarithmeticnode/secondarystrideinpixelsx.md)
- [secondaryStrideInPixelsY](mpsnnbinaryarithmeticnode/secondarystrideinpixelsy.md)

### Instance Methods

- [gradientClass](mpsnnbinaryarithmeticnode/gradientclass%28%29.md)
- [gradientFiltersWithSources:](mpsnnbinaryarithmeticnode/gradientfilters%28withsources_%29.md)

## Relationships

### Inherits From

- [MPSNNFilterNode](mpsnnfilternode.md)

### Inherited By

- [MPSNNAdditionNode](mpsnnadditionnode.md)
- [MPSNNComparisonNode](mpsnncomparisonnode.md)
- [MPSNNDivisionNode](mpsnndivisionnode.md)
- [MPSNNMultiplicationNode](mpsnnmultiplicationnode.md)
- [MPSNNSubtractionNode](mpsnnsubtractionnode.md)

## See Also

### Arithmetic Layer Nodes

- [MPSNNAdditionNode](mpsnnadditionnode.md): A representation of an addition operator.
- [MPSNNAdditionGradientNode](mpsnnadditiongradientnode.md): A representation of a gradient addition operator.
- [MPSNNSubtractionNode](mpsnnsubtractionnode.md): A representation of an subtraction operator.
- [MPSNNSubtractionGradientNode](mpsnnsubtractiongradientnode.md): A representation of a gradient subtraction operator.
- [MPSNNMultiplicationNode](mpsnnmultiplicationnode.md): A representation of a multiplication operator.
- [MPSNNMultiplicationGradientNode](mpsnnmultiplicationgradientnode.md): A representation of a gradient multiplication operator.
- [MPSNNDivisionNode](mpsnndivisionnode.md): A representation of a division operator.
- [MPSNNArithmeticGradientNode](mpsnnarithmeticgradientnode.md): A representation of the base class for gradient arithmetic operators.
- [MPSNNArithmeticGradientStateNode](mpsnnarithmeticgradientstatenode.md): A representation of the clamp mask used by gradient arithmetic operators.
