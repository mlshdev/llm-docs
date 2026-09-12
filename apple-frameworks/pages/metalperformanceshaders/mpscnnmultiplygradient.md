> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnmultiplygradient](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnmultiplygradient)

# MPSCNNMultiplyGradient (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient multiply operator.

## Declaration

```swift
class MPSCNNMultiplyGradient
```

## Topics

### Initializers

- [init(device:isSecondarySourceFilter:)](mpscnnmultiplygradient/init%28device_issecondarysourcefilter_%29.md)

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
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.

# MPSCNNMultiplyGradient (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A gradient multiply operator.

## Declaration

```objectivec
@interface MPSCNNMultiplyGradient : MPSCNNArithmeticGradient
```

## Topics

### Instance Methods

- [initWithDevice:isSecondarySourceFilter:](mpscnnmultiplygradient/init%28device_issecondarysourcefilter_%29.md)

## Relationships

### Inherits From

- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md)

## See Also

### Arithmetic Layers

- [MPSCNNAdd](mpscnnadd.md): An addition operator.
- [MPSCNNAddGradient](mpscnnaddgradient.md): A gradient addition operator.
- [MPSCNNSubtract](mpscnnsubtract.md): A subtraction operator.
- [MPSCNNSubtractGradient](mpscnnsubtractgradient.md): A gradient subtraction operator.
- [MPSCNNMultiply](mpscnnmultiply.md): A multiply operator.
- [MPSCNNDivide](mpscnndivide.md): A division operator.
- [MPSCNNArithmetic](mpscnnarithmetic.md): The base class for arithmetic operators.
- [MPSCNNArithmeticGradient](mpscnnarithmeticgradient.md): The base class for gradient arithmetic operators.
- [MPSCNNArithmeticGradientState](mpscnnarithmeticgradientstate.md): An object that stores the clamp mask used by gradient arithmetic operators.
