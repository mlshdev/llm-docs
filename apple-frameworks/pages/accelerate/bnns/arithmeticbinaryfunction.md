> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/arithmeticbinaryfunction](https://developer.apple.com/documentation/accelerate/bnns/arithmeticbinaryfunction)

# BNNS.ArithmeticBinaryFunction

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that describe binary arithmetic functions.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum ArithmeticBinaryFunction
```

## Topics

### Binary Arithmetic Functions

- [BNNS.ArithmeticBinaryFunction.add](arithmeticbinaryfunction/add.md): Deprecated. An operation that calculates the element-wise sum of its two inputs.
- [BNNS.ArithmeticBinaryFunction.subtract](arithmeticbinaryfunction/subtract.md): Deprecated. An operation that calculates the element-wise difference of its two inputs.
- [BNNS.ArithmeticBinaryFunction.divide](arithmeticbinaryfunction/divide.md): Deprecated. An operation that calculates the element-wise division of its two inputs.
- [BNNS.ArithmeticBinaryFunction.divideNoNaN](arithmeticbinaryfunction/dividenonan.md): Deprecated. An operation that calculates the element-wise division of its two inputs and returns zero if the second input is zero.
- [BNNS.ArithmeticBinaryFunction.multiply](arithmeticbinaryfunction/multiply.md): Deprecated. An operation that calculates the element-wise product of its two inputs.
- [BNNS.ArithmeticBinaryFunction.multiplyNoNaN](arithmeticbinaryfunction/multiplynonan.md): Deprecated. An operation that calculates the element-wise product of its two inputs and returns zero if the second input is zero, even if the first input is NaN or infinity.
- [BNNS.ArithmeticBinaryFunction.pow](arithmeticbinaryfunction/pow.md): Deprecated. An operation that calculates the element-wise first input raised to the power of its second input.
- [BNNS.ArithmeticBinaryFunction.max](arithmeticbinaryfunction/max.md): Deprecated. An operation that calculates the element-wise maximum of its two inputs.
- [BNNS.ArithmeticBinaryFunction.min](arithmeticbinaryfunction/min.md): Deprecated. An operation that calculates the element-wise minimum of its two inputs.

### Enumeration Cases

- [BNNS.ArithmeticBinaryFunction.flooringDivide](arithmeticbinaryfunction/flooringdivide.md): Deprecated.
- [BNNS.ArithmeticBinaryFunction.truncatingDivide](arithmeticbinaryfunction/truncatingdivide.md): Deprecated.
- [BNNS.ArithmeticBinaryFunction.truncatingRemainder](arithmeticbinaryfunction/truncatingremainder.md): Deprecated.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
