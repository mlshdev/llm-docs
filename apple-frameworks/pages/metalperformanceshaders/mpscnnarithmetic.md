> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnarithmetic](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnarithmetic)

# MPSCNNArithmetic (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for arithmetic operators.

## Declaration

```swift
class MPSCNNArithmetic
```

## Topics

### Instance Properties

- [bias](mpscnnarithmetic/bias.md)
- [maximumValue](mpscnnarithmetic/maximumvalue.md)
- [minimumValue](mpscnnarithmetic/minimumvalue.md)
- [primaryScale](mpscnnarithmetic/primaryscale.md)
- [primaryStrideInFeatureChannels](mpscnnarithmetic/primarystrideinfeaturechannels.md)
- [secondaryScale](mpscnnarithmetic/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpscnnarithmetic/secondarystrideinfeaturechannels.md)

### Instance Methods

- [encode(commandBuffer:primaryImage:secondaryImage:destinationState:destinationImage:)](mpscnnarithmetic/encode%28commandbuffer_primaryimage_secondaryimage_destinationstate_destinationimage_%29.md)
- [encodeBatch(commandBuffer:primaryImages:secondaryImages:destinationStates:destinationImages:)](mpscnnarithmetic/encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationstates_destinationimages_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

### Inherited By

- [MPSCNNAdd](mpscnnadd.md)
- [MPSCNNDivide](mpscnndivide.md)
- [MPSCNNMultiply](mpscnnmultiply.md)
- [MPSCNNSubtract](mpscnnsubtract.md)
- [MPSNNCompare](mpsnncompare.md)

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

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.

# MPSCNNArithmetic (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for arithmetic operators.

## Declaration

```objectivec
@interface MPSCNNArithmetic : MPSCNNBinaryKernel
```

## Topics

### Instance Properties

- [bias](mpscnnarithmetic/bias.md)
- [maximumValue](mpscnnarithmetic/maximumvalue.md)
- [minimumValue](mpscnnarithmetic/minimumvalue.md)
- [primaryScale](mpscnnarithmetic/primaryscale.md)
- [primaryStrideInFeatureChannels](mpscnnarithmetic/primarystrideinfeaturechannels.md)
- [secondaryScale](mpscnnarithmetic/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpscnnarithmetic/secondarystrideinfeaturechannels.md)

### Instance Methods

- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationState:destinationImage:](mpscnnarithmetic/encode%28commandbuffer_primaryimage_secondaryimage_destinationstate_destinationimage_%29.md)
- [encodeBatchToCommandBuffer:primaryImages:secondaryImages:destinationStates:destinationImages:](mpscnnarithmetic/encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationstates_destinationimages_%29.md)

## Relationships

### Inherits From

- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)

### Inherited By

- [MPSCNNAdd](mpscnnadd.md)
- [MPSCNNDivide](mpscnndivide.md)
- [MPSCNNMultiply](mpscnnmultiply.md)
- [MPSCNNSubtract](mpscnnsubtract.md)
- [MPSNNCompare](mpsnncompare.md)

## See Also

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.
