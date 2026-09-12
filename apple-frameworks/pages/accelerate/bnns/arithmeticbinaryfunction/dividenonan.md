> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/arithmeticbinaryfunction/dividenonan](https://developer.apple.com/documentation/accelerate/bnns/arithmeticbinaryfunction/dividenonan)

# BNNS.ArithmeticBinaryFunction.divideNoNaN

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An operation that calculates the element-wise division of its two inputs and returns zero if the second input is zero.

> Use the BNNSGraph API instead.

## Declaration

```swift
case divideNoNaN
```

## See Also

### Binary Arithmetic Functions

- [BNNS.ArithmeticBinaryFunction.add](add.md): Deprecated. An operation that calculates the element-wise sum of its two inputs.
- [BNNS.ArithmeticBinaryFunction.subtract](subtract.md): Deprecated. An operation that calculates the element-wise difference of its two inputs.
- [BNNS.ArithmeticBinaryFunction.divide](divide.md): Deprecated. An operation that calculates the element-wise division of its two inputs.
- [BNNS.ArithmeticBinaryFunction.multiply](multiply.md): Deprecated. An operation that calculates the element-wise product of its two inputs.
- [BNNS.ArithmeticBinaryFunction.multiplyNoNaN](multiplynonan.md): Deprecated. An operation that calculates the element-wise product of its two inputs and returns zero if the second input is zero, even if the first input is NaN or infinity.
- [BNNS.ArithmeticBinaryFunction.pow](pow.md): Deprecated. An operation that calculates the element-wise first input raised to the power of its second input.
- [BNNS.ArithmeticBinaryFunction.max](max.md): Deprecated. An operation that calculates the element-wise maximum of its two inputs.
- [BNNS.ArithmeticBinaryFunction.min](min.md): Deprecated. An operation that calculates the element-wise minimum of its two inputs.
