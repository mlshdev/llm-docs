> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnarithmeticgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnarithmeticgradient)

# MPSCNNArithmeticGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for gradient arithmetic operators.

## Declaration

```swift
class MPSCNNArithmeticGradient
```

## Topics

### Instance Properties

- [bias](mpscnnarithmeticgradient/bias.md)
- [isSecondarySourceFilter](mpscnnarithmeticgradient/issecondarysourcefilter.md)
- [maximumValue](mpscnnarithmeticgradient/maximumvalue.md)
- [minimumValue](mpscnnarithmeticgradient/minimumvalue.md)
- [primaryScale](mpscnnarithmeticgradient/primaryscale.md)
- [secondaryScale](mpscnnarithmeticgradient/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpscnnarithmeticgradient/secondarystrideinfeaturechannels.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNAddGradient](mpscnnaddgradient.md)
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md)
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md)

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
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.

# MPSCNNArithmeticGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

The base class for gradient arithmetic operators.

## Declaration

```objectivec
@interface MPSCNNArithmeticGradient : MPSCNNGradientKernel
```

## Topics

### Instance Properties

- [bias](mpscnnarithmeticgradient/bias.md)
- [isSecondarySourceFilter](mpscnnarithmeticgradient/issecondarysourcefilter.md)
- [maximumValue](mpscnnarithmeticgradient/maximumvalue.md)
- [minimumValue](mpscnnarithmeticgradient/minimumvalue.md)
- [primaryScale](mpscnnarithmeticgradient/primaryscale.md)
- [secondaryScale](mpscnnarithmeticgradient/secondaryscale.md)
- [secondaryStrideInFeatureChannels](mpscnnarithmeticgradient/secondarystrideinfeaturechannels.md)

## Relationships

### Inherits From

- [MPSCNNGradientKernel](mpscnngradientkernel.md)

### Inherited By

- [MPSCNNAddGradient](mpscnnaddgradient.md)
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md)
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md)

## See Also

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.
