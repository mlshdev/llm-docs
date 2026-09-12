> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcarithmeticoperation](https://developer.apple.com/documentation/mlcompute/mlcarithmeticoperation)

# MLCArithmeticOperation (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Constants that describe an arithmetic operation.

## Declaration

```swift
enum MLCArithmeticOperation
```

## Topics

### Basic Operations

- [MLCArithmeticOperation.add](mlcarithmeticoperation/add.md): Deprecated. Calculates the element-wise sum of the inputs.
- [MLCArithmeticOperation.subtract](mlcarithmeticoperation/subtract.md): Deprecated. Calculates the element-wise difference between the inputs.
- [MLCArithmeticOperation.multiply](mlcarithmeticoperation/multiply.md): Deprecated. Calculates the element-wise product of the inputs.
- [MLCArithmeticOperation.multiplyNoNaN](mlcarithmeticoperation/multiplynonan.md): Deprecated. Calculates the element-wise product of the inputs, and returns `0` when the result isn’t a number or infinity.
- [MLCArithmeticOperation.divide](mlcarithmeticoperation/divide.md): Deprecated. Calculates the element-wise division of the inputs.
- [MLCArithmeticOperation.divideNoNaN](mlcarithmeticoperation/dividenonan.md): Deprecated. Calculates the element-wise division of the inputs, and returns `0` if the denominator is `0`.
- [MLCArithmeticOperation.min](mlcarithmeticoperation/min.md): Deprecated. Calculates the element-wise minimum of the inputs.
- [MLCArithmeticOperation.max](mlcarithmeticoperation/max.md): Deprecated. Calculates the element-wise maximum the inputs.

### Rounding Operations

- [MLCArithmeticOperation.floor](mlcarithmeticoperation/floor.md): Deprecated. Calculates the element-wise floor of the inputs.
- [MLCArithmeticOperation.round](mlcarithmeticoperation/round.md): Deprecated. Calculates the element-wise rounding of the inputs.
- [MLCArithmeticOperation.ceil](mlcarithmeticoperation/ceil.md): Deprecated. Calculates the element-wise ceiling of the inputs.

### Trigonometric Operations

- [MLCArithmeticOperation.sin](mlcarithmeticoperation/sin.md): Deprecated. Calculates the element-wise sine of the input.
- [MLCArithmeticOperation.cos](mlcarithmeticoperation/cos.md): Deprecated. Calculates the element-wise cosine of the input.
- [MLCArithmeticOperation.tan](mlcarithmeticoperation/tan.md): Deprecated. Calculates the element-wise tangent of the input.
- [MLCArithmeticOperation.asin](mlcarithmeticoperation/asin.md): Deprecated. Calculates the element-wise inverse sine of the input.
- [MLCArithmeticOperation.acos](mlcarithmeticoperation/acos.md): Deprecated. Calculates the element-wise inverse cosine of the input.
- [MLCArithmeticOperation.atan](mlcarithmeticoperation/atan.md): Deprecated. Calculates the element-wise inverse tangent of the input.
- [MLCArithmeticOperation.sinh](mlcarithmeticoperation/sinh.md): Deprecated. Calculates the element-wise hyperbolic sine of the input.
- [MLCArithmeticOperation.cosh](mlcarithmeticoperation/cosh.md): Deprecated. Calculates the element-wise hyperbolic cosine of the input.
- [MLCArithmeticOperation.tanh](mlcarithmeticoperation/tanh.md): Deprecated. Calculates the element-wise hyperbolic tangent of the input.
- [MLCArithmeticOperation.asinh](mlcarithmeticoperation/asinh.md): Deprecated. Calculates the element-wise inverse hyperbolic sine of the input.
- [MLCArithmeticOperation.acosh](mlcarithmeticoperation/acosh.md): Deprecated. Calculates the element-wise inverse hyperbolic cosine of the input.
- [MLCArithmeticOperation.atanh](mlcarithmeticoperation/atanh.md): Deprecated. Calculates the element-wise inverse hyperbolic tangent of the input.

### Advanced Operations

- [MLCArithmeticOperation.sqrt](mlcarithmeticoperation/sqrt.md): Deprecated. Calculates the element-wise square root of the input.
- [MLCArithmeticOperation.rsqrt](mlcarithmeticoperation/rsqrt.md): Deprecated. Calculates the element-wise reciprocal of the square root of the input.
- [MLCArithmeticOperation.pow](mlcarithmeticoperation/pow.md): Deprecated. Calculates the element-wise first input raised to the power of the second input.
- [MLCArithmeticOperation.exp](mlcarithmeticoperation/exp.md): Deprecated. Calculates the element-wise result of the exponent raised to the power of the input.
- [MLCArithmeticOperation.exp2](mlcarithmeticoperation/exp2.md): Deprecated. Calculates the element-wise result of the number 2 raised to the power of the input.
- [MLCArithmeticOperation.log](mlcarithmeticoperation/log.md): Deprecated. Calculates the element-wise natural logarithm of the input.
- [MLCArithmeticOperation.log2](mlcarithmeticoperation/log2.md): Deprecated. Calculates the element-wise base 2 logarithm of the input.

### Debugging

- [debugDescription](mlcarithmeticoperation/debugdescription.md): A textual description of the arithmetic operation you use for debugging.

### Initializers

- [init(rawValue:)](mlcarithmeticoperation/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Arithmetic Layers

- [init(operation:)](mlcarithmeticlayer/init%28operation_%29.md): Deprecated. Creates an arithmetic layer with the operation you specify.

# MLCArithmeticOperation (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

Constants that describe an arithmetic operation.

## Declaration

```objectivec
enum MLCArithmeticOperation : int32_t;
```

## Topics

### Basic Operations

- [MLCArithmeticOperationAdd](mlcarithmeticoperation/add.md): Deprecated. Calculates the element-wise sum of the inputs.
- [MLCArithmeticOperationSubtract](mlcarithmeticoperation/subtract.md): Deprecated. Calculates the element-wise difference between the inputs.
- [MLCArithmeticOperationMultiply](mlcarithmeticoperation/multiply.md): Deprecated. Calculates the element-wise product of the inputs.
- [MLCArithmeticOperationMultiplyNoNaN](mlcarithmeticoperation/multiplynonan.md): Deprecated. Calculates the element-wise product of the inputs, and returns `0` when the result isn’t a number or infinity.
- [MLCArithmeticOperationDivide](mlcarithmeticoperation/divide.md): Deprecated. Calculates the element-wise division of the inputs.
- [MLCArithmeticOperationDivideNoNaN](mlcarithmeticoperation/dividenonan.md): Deprecated. Calculates the element-wise division of the inputs, and returns `0` if the denominator is `0`.
- [MLCArithmeticOperationMin](mlcarithmeticoperation/min.md): Deprecated. Calculates the element-wise minimum of the inputs.
- [MLCArithmeticOperationMax](mlcarithmeticoperation/max.md): Deprecated. Calculates the element-wise maximum the inputs.

### Rounding Operations

- [MLCArithmeticOperationFloor](mlcarithmeticoperation/floor.md): Deprecated. Calculates the element-wise floor of the inputs.
- [MLCArithmeticOperationRound](mlcarithmeticoperation/round.md): Deprecated. Calculates the element-wise rounding of the inputs.
- [MLCArithmeticOperationCeil](mlcarithmeticoperation/ceil.md): Deprecated. Calculates the element-wise ceiling of the inputs.

### Trigonometric Operations

- [MLCArithmeticOperationSin](mlcarithmeticoperation/sin.md): Deprecated. Calculates the element-wise sine of the input.
- [MLCArithmeticOperationCos](mlcarithmeticoperation/cos.md): Deprecated. Calculates the element-wise cosine of the input.
- [MLCArithmeticOperationTan](mlcarithmeticoperation/tan.md): Deprecated. Calculates the element-wise tangent of the input.
- [MLCArithmeticOperationAsin](mlcarithmeticoperation/asin.md): Deprecated. Calculates the element-wise inverse sine of the input.
- [MLCArithmeticOperationAcos](mlcarithmeticoperation/acos.md): Deprecated. Calculates the element-wise inverse cosine of the input.
- [MLCArithmeticOperationAtan](mlcarithmeticoperation/atan.md): Deprecated. Calculates the element-wise inverse tangent of the input.
- [MLCArithmeticOperationSinh](mlcarithmeticoperation/sinh.md): Deprecated. Calculates the element-wise hyperbolic sine of the input.
- [MLCArithmeticOperationCosh](mlcarithmeticoperation/cosh.md): Deprecated. Calculates the element-wise hyperbolic cosine of the input.
- [MLCArithmeticOperationTanh](mlcarithmeticoperation/tanh.md): Deprecated. Calculates the element-wise hyperbolic tangent of the input.
- [MLCArithmeticOperationAsinh](mlcarithmeticoperation/asinh.md): Deprecated. Calculates the element-wise inverse hyperbolic sine of the input.
- [MLCArithmeticOperationAcosh](mlcarithmeticoperation/acosh.md): Deprecated. Calculates the element-wise inverse hyperbolic cosine of the input.
- [MLCArithmeticOperationAtanh](mlcarithmeticoperation/atanh.md): Deprecated. Calculates the element-wise inverse hyperbolic tangent of the input.

### Advanced Operations

- [MLCArithmeticOperationSqrt](mlcarithmeticoperation/sqrt.md): Deprecated. Calculates the element-wise square root of the input.
- [MLCArithmeticOperationRsqrt](mlcarithmeticoperation/rsqrt.md): Deprecated. Calculates the element-wise reciprocal of the square root of the input.
- [MLCArithmeticOperationPow](mlcarithmeticoperation/pow.md): Deprecated. Calculates the element-wise first input raised to the power of the second input.
- [MLCArithmeticOperationExp](mlcarithmeticoperation/exp.md): Deprecated. Calculates the element-wise result of the exponent raised to the power of the input.
- [MLCArithmeticOperationExp2](mlcarithmeticoperation/exp2.md): Deprecated. Calculates the element-wise result of the number 2 raised to the power of the input.
- [MLCArithmeticOperationLog](mlcarithmeticoperation/log.md): Deprecated. Calculates the element-wise natural logarithm of the input.
- [MLCArithmeticOperationLog2](mlcarithmeticoperation/log2.md): Deprecated. Calculates the element-wise base 2 logarithm of the input.

### Debugging

- [MLCArithmeticOperationCount](mlcarithmeticoperation/mlcarithmeticoperationcount.md): The total number of arithmetic operations.
- [MLCArithmeticOperationDebugDescription](mlcarithmeticoperation/debugdescription.md): A textual description of the arithmetic operation you use for debugging.

## See Also

### Creating Arithmetic Layers

- [layerWithOperation:](mlcarithmeticlayer/init%28operation_%29.md): Deprecated. Creates an arithmetic layer with the operation you specify.
