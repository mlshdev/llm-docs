> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcarithmeticoperation/multiplynonan](https://developer.apple.com/documentation/mlcompute/mlcarithmeticoperation/multiplynonan)

# MLCArithmeticOperation.multiplyNoNaN (Swift)

**Framework:** ML Compute  
**Kind:** Case  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Calculates the element-wise product of the inputs, and returns `0` when the result isn’t a number or infinity.

## Declaration

```swift
case multiplyNoNaN
```

<a id="Discussion"></a>

## Discussion

Returns `0` if `y` in `x * y` is zero, even if `x` isn’t a number (`NaN)` or infinity (`INF)`.

## See Also

### Basic Operations

- [MLCArithmeticOperation.add](add.md): Deprecated. Calculates the element-wise sum of the inputs.
- [MLCArithmeticOperation.subtract](subtract.md): Deprecated. Calculates the element-wise difference between the inputs.
- [MLCArithmeticOperation.multiply](multiply.md): Deprecated. Calculates the element-wise product of the inputs.
- [MLCArithmeticOperation.divide](divide.md): Deprecated. Calculates the element-wise division of the inputs.
- [MLCArithmeticOperation.divideNoNaN](dividenonan.md): Deprecated. Calculates the element-wise division of the inputs, and returns `0` if the denominator is `0`.
- [MLCArithmeticOperation.min](min.md): Deprecated. Calculates the element-wise minimum of the inputs.
- [MLCArithmeticOperation.max](max.md): Deprecated. Calculates the element-wise maximum the inputs.

# MLCArithmeticOperationMultiplyNoNaN (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+

Calculates the element-wise product of the inputs, and returns `0` when the result isn’t a number or infinity.

## Declaration

```objectivec
MLCArithmeticOperationMultiplyNoNaN
```

<a id="Discussion"></a>

## Discussion

Returns `0` if `y` in `x * y` is zero, even if `x` isn’t a number (`NaN)` or infinity (`INF)`.

## See Also

### Basic Operations

- [MLCArithmeticOperationAdd](add.md): Deprecated. Calculates the element-wise sum of the inputs.
- [MLCArithmeticOperationSubtract](subtract.md): Deprecated. Calculates the element-wise difference between the inputs.
- [MLCArithmeticOperationMultiply](multiply.md): Deprecated. Calculates the element-wise product of the inputs.
- [MLCArithmeticOperationDivide](divide.md): Deprecated. Calculates the element-wise division of the inputs.
- [MLCArithmeticOperationDivideNoNaN](dividenonan.md): Deprecated. Calculates the element-wise division of the inputs, and returns `0` if the denominator is `0`.
- [MLCArithmeticOperationMin](min.md): Deprecated. Calculates the element-wise minimum of the inputs.
- [MLCArithmeticOperationMax](max.md): Deprecated. Calculates the element-wise maximum the inputs.
