> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnarithmeticgradientnode](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnarithmeticgradientnode)

# MPSNNArithmeticGradientNode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of the base class for gradient arithmetic operators.

## Declaration

```swift
class MPSNNArithmeticGradientNode
```

## Topics

### Initializers

- [init(gradientImages:forwardFilter:isSecondarySourceFilter:)](mpsnnarithmeticgradientnode/init%28gradientimages_forwardfilter_issecondarysourcefilter_%29.md)
- [init(sourceGradient:sourceImage:gradientState:isSecondarySourceFilter:)](mpsnnarithmeticgradientnode/init%28sourcegradient_sourceimage_gradientstate_issecondarysourcefilter_%29.md)

### Instance Properties

- [bias](mpsnnarithmeticgradientnode/bias.md)
- [isSecondarySourceFilter](mpsnnarithmeticgradientnode/issecondarysourcefilter.md)
- [maximumValue](mpsnnarithmeticgradientnode/maximumvalue.md)
- [minimumValue](mpsnnarithmeticgradientnode/minimumvalue.md)
- [primaryScale](mpsnnarithmeticgradientnode/primaryscale.md)
- [secondaryScale](mpsnnarithmeticgradientnode/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpsnnarithmeticgradientnode/secondarystrideinfeaturechannels.md)
- [secondaryStrideInPixelsX](mpsnnarithmeticgradientnode/secondarystrideinpixelsx.md)
- [secondaryStrideInPixelsY](mpsnnarithmeticgradientnode/secondarystrideinpixelsy.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Inherited By

- [MPSNNAdditionGradientNode](mpsnnadditiongradientnode.md)
- [MPSNNMultiplicationGradientNode](mpsnnmultiplicationgradientnode.md)
- [MPSNNSubtractionGradientNode](mpsnnsubtractiongradientnode.md)

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
- [MPSNNBinaryArithmeticNode](mpsnnbinaryarithmeticnode.md): Virtual base class for basic arithmetic nodes.
- [MPSNNArithmeticGradientStateNode](mpsnnarithmeticgradientstatenode.md): A representation of the clamp mask used by gradient arithmetic operators.

# MPSNNArithmeticGradientNode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A representation of the base class for gradient arithmetic operators.

## Declaration

```objectivec
@interface MPSNNArithmeticGradientNode : MPSNNGradientFilterNode
```

## Topics

### Instance Properties

- [bias](mpsnnarithmeticgradientnode/bias.md)
- [isSecondarySourceFilter](mpsnnarithmeticgradientnode/issecondarysourcefilter.md)
- [maximumValue](mpsnnarithmeticgradientnode/maximumvalue.md)
- [minimumValue](mpsnnarithmeticgradientnode/minimumvalue.md)
- [primaryScale](mpsnnarithmeticgradientnode/primaryscale.md)
- [secondaryScale](mpsnnarithmeticgradientnode/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpsnnarithmeticgradientnode/secondarystrideinfeaturechannels.md)
- [secondaryStrideInPixelsX](mpsnnarithmeticgradientnode/secondarystrideinpixelsx.md)
- [secondaryStrideInPixelsY](mpsnnarithmeticgradientnode/secondarystrideinpixelsy.md)

### Instance Methods

- [initWithGradientImages:forwardFilter:isSecondarySourceFilter:](mpsnnarithmeticgradientnode/init%28gradientimages_forwardfilter_issecondarysourcefilter_%29.md)
- [initWithSourceGradient:sourceImage:gradientState:isSecondarySourceFilter:](mpsnnarithmeticgradientnode/init%28sourcegradient_sourceimage_gradientstate_issecondarysourcefilter_%29.md)

### Type Methods

- [nodeWithSourceGradient:sourceImage:gradientState:isSecondarySourceFilter:](mpsnnarithmeticgradientnode/nodewithsourcegradient_sourceimage_gradientstate_issecondarysourcefilter_.md)

## Relationships

### Inherits From

- [MPSNNGradientFilterNode](mpsnngradientfilternode.md)

### Inherited By

- [MPSNNAdditionGradientNode](mpsnnadditiongradientnode.md)
- [MPSNNMultiplicationGradientNode](mpsnnmultiplicationgradientnode.md)
- [MPSNNSubtractionGradientNode](mpsnnsubtractiongradientnode.md)

## See Also

### Arithmetic Layer Nodes

- [MPSNNAdditionNode](mpsnnadditionnode.md): A representation of an addition operator.
- [MPSNNAdditionGradientNode](mpsnnadditiongradientnode.md): A representation of a gradient addition operator.
- [MPSNNSubtractionNode](mpsnnsubtractionnode.md): A representation of an subtraction operator.
- [MPSNNSubtractionGradientNode](mpsnnsubtractiongradientnode.md): A representation of a gradient subtraction operator.
- [MPSNNMultiplicationNode](mpsnnmultiplicationnode.md): A representation of a multiplication operator.
- [MPSNNMultiplicationGradientNode](mpsnnmultiplicationgradientnode.md): A representation of a gradient multiplication operator.
- [MPSNNDivisionNode](mpsnndivisionnode.md): A representation of a division operator.
- [MPSNNBinaryArithmeticNode](mpsnnbinaryarithmeticnode.md): Virtual base class for basic arithmetic nodes.
- [MPSNNArithmeticGradientStateNode](mpsnnarithmeticgradientstatenode.md): A representation of the clamp mask used by gradient arithmetic operators.
