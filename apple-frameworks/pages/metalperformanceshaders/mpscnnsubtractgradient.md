> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnsubtractgradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnsubtractgradient)

# MPSCNNSubtractGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient subtraction operator.

## Declaration

```swift
class MPSCNNSubtractGradient
```

## Topics

### Initializers

- [init(device:isSecondarySourceFilter:)](mpscnnsubtractgradient/init%28device_issecondarysourcefilter_%29.md)

## Relationships

### Inherits From

- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md)

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
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.

# MPSCNNSubtractGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient subtraction operator.

## Declaration

```objectivec
@interface MPSCNNSubtractGradient : MPSCNNArithmeticGradient
```

## Topics

### Instance Methods

- [initWithDevice:isSecondarySourceFilter:](mpscnnsubtractgradient/init%28device_issecondarysourcefilter_%29.md)

## Relationships

### Inherits From

- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md)

## See Also

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNMultiplyGradient](mpscnnmultiplygradient.md): A gradient multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.
