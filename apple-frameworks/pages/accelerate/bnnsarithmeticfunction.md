> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticfunction](https://developer.apple.com/documentation/accelerate/bnnsarithmeticfunction)

# BNNSArithmeticFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define arithmetic operations.

## Declaration

```swift
struct BNNSArithmeticFunction
```

## Topics

### Unary Arithmetic Functions

- [BNNSArithmeticCeil](bnnsarithmeticceil.md): An operation that calculates the element-wise ceiling of its input.
- [BNNSArithmeticFloor](bnnsarithmeticfloor.md): An operation that calculates the element-wise floor of its input.
- [BNNSArithmeticSquareRoot](bnnsarithmeticsquareroot.md): An operation that calculates the element-wise square root of its input.
- [BNNSArithmeticReciprocalSquareRoot](bnnsarithmeticreciprocalsquareroot.md): An operation that calculates the element-wise reciprocal square root of its input.
- [BNNSArithmeticRound](bnnsarithmeticround.md): An operation that calculates the element-wise rounding of its input.
- [BNNSArithmeticAbs](bnnsarithmeticabs.md): An operation that calculates the element-wise absolute of its input.
- [BNNSArithmeticErf](bnnsarithmeticerf.md): An operation that calculates the element-wise error function of its input.
- [BNNSArithmeticNegate](bnnsarithmeticnegate.md): An operation that calculates the element-wise negation of its input.
- [BNNSArithmeticReciprocal](bnnsarithmeticreciprocal.md): An operation that calculates the element-wise reciprocal of its input.
- [BNNSArithmeticSign](bnnsarithmeticsign.md): An operation that calculates the element-wise sign of its input.
- [BNNSArithmeticSquare](bnnsarithmeticsquare.md): An operation that calculates the element-wise square of its input.

### Binary Arithmetic Functions

- [BNNSArithmeticAdd](bnnsarithmeticadd.md): An operation that calculates the element-wise sum of its two inputs.
- [BNNSArithmeticSubtract](bnnsarithmeticsubtract.md): An operation that calculates the element-wise difference of its two inputs.
- [BNNSArithmeticDivide](bnnsarithmeticdivide.md): An operation that calculates the element-wise division of its two inputs.
- [BNNSArithmeticDivideNoNaN](bnnsarithmeticdividenonan.md): An operation that calculates the element-wise division of its two inputs and returns zero if the divisor is zero, even if the first input is NaN or infinity.
- [BNNSArithmeticMultiply](bnnsarithmeticmultiply.md): An operation that calculates the element-wise product of its two inputs.
- [BNNSArithmeticMultiplyNoNaN](bnnsarithmeticmultiplynonan.md): An operation that calculates the element-wise product of its two inputs and returns zero, even if the first input is NaN or infinity.
- [BNNSArithmeticPow](bnnsarithmeticpow.md): An operation that calculates the element-wise first input raised to the power of its second input.
- [BNNSArithmeticMaximum](bnnsarithmeticmaximum.md): An operation that calculates the element-wise maximum of its two inputs.
- [BNNSArithmeticMinimum](bnnsarithmeticminimum.md): An operation that calculates the element-wise minimum of its two inputs.
- [BNNSArithmeticFloorDivide](bnnsarithmeticfloordivide.md): An operation that calculates the element-wise floor division of its inputs.
- [BNNSArithmeticTruncDivide](bnnsarithmetictruncdivide.md): An operation that calculates the element-wise truncated division of its inputs.
- [BNNSArithmeticTruncRemainder](bnnsarithmetictruncremainder.md): An operation that calculates the element-wise remainder of truncated division of its inputs.

### Ternary Arithmetic Functions

- [BNNSArithmeticMultiplyAdd](bnnsarithmeticmultiplyadd.md): An operation that calculates the element-wise fused multiply-add of its three inputs.
- [BNNSArithmeticSelect](bnnsarithmeticselect.md): An operation that selects elements from either its second or third input based on the corresponding value of its first input.

### Exponential and Logarithmic Functions

- [BNNSArithmeticExp](bnnsarithmeticexp.md): An operation that calculates the element-wise result of *e* raised to the power of its input.
- [BNNSArithmeticExp2](bnnsarithmeticexp2.md): An operation that calculates the element-wise result of 2 raised to the power of its input.
- [BNNSArithmeticLog](bnnsarithmeticlog.md): An operation that calculates the element-wise natural logarithm of its input.
- [BNNSArithmeticLog2](bnnsarithmeticlog2.md): An operation that calculates the element-wise base 2 logarithm of its input.

### Trigonometric Functions

- [BNNSArithmeticAcos](bnnsarithmeticacos.md): An operation that calculates the element-wise inverse cosine of its input.
- [BNNSArithmeticAcosh](bnnsarithmeticacosh.md): An operation that calculates the element-wise inverse hyperbolic cosine of its input.
- [BNNSArithmeticAsin](bnnsarithmeticasin.md): An operation that calculates the element-wise inverse sine of its input.
- [BNNSArithmeticAsinh](bnnsarithmeticasinh.md): An operation that calculates the element-wise inverse hyperbolic sine of its input.
- [BNNSArithmeticAtan](bnnsarithmeticatan.md): An operation that calculates the element-wise inverse tangent of its input.
- [BNNSArithmeticAtanh](bnnsarithmeticatanh.md): An operation that calculates the element-wise inverse hyperbolic tangent of its input.
- [BNNSArithmeticCos](bnnsarithmeticcos.md): An operation that calculates the element-wise cosine of its input.
- [BNNSArithmeticCosh](bnnsarithmeticcosh.md): An operation that calculates the element-wise hyperbolic cosine of its input.
- [BNNSArithmeticSin](bnnsarithmeticsin.md): An operation that calculates the element-wise sine of its input.
- [BNNSArithmeticSinh](bnnsarithmeticsinh.md): An operation that calculates the element-wise hyperbolic sine of its input.
- [BNNSArithmeticTan](bnnsarithmetictan.md): An operation that calculates the element-wise tangent of its input.
- [BNNSArithmeticTanh](bnnsarithmetictanh.md): An operation that calculates the element-wise hyperbolic tangent of its input.

### Raw Values

- [rawValue](bnnsarithmeticfunction/rawvalue.md)
- [init(\_:)](bnnsarithmeticfunction/init%28__%29.md)
- [init(rawValue:)](bnnsarithmeticfunction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Arithmetic layers

- [BNNS.UnaryArithmeticLayer](bnns/unaryarithmeticlayer.md): Deprecated. A layer object that wraps a unary arithmetic filter and manages its deinitialization.
- [BNNS.BinaryArithmeticLayer](bnns/binaryarithmeticlayer.md): Deprecated. A layer object that wraps a binary arithmetic filter and manages its deinitialization.
- [BNNS.TernaryArithmeticLayer](bnns/ternaryarithmeticlayer.md): Deprecated. A layer object that wraps a ternary arithmetic filter and manages its deinitialization.
- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic(\_:\_:)](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.

# BNNSArithmeticFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define arithmetic operations.

## Declaration

```objectivec
typedef enum { ... } BNNSArithmeticFunction;
```

## Topics

### Unary Arithmetic Functions

- [BNNSArithmeticCeil](bnnsarithmeticceil.md): An operation that calculates the element-wise ceiling of its input.
- [BNNSArithmeticFloor](bnnsarithmeticfloor.md): An operation that calculates the element-wise floor of its input.
- [BNNSArithmeticSquareRoot](bnnsarithmeticsquareroot.md): An operation that calculates the element-wise square root of its input.
- [BNNSArithmeticReciprocalSquareRoot](bnnsarithmeticreciprocalsquareroot.md): An operation that calculates the element-wise reciprocal square root of its input.
- [BNNSArithmeticRound](bnnsarithmeticround.md): An operation that calculates the element-wise rounding of its input.
- [BNNSArithmeticAbs](bnnsarithmeticabs.md): An operation that calculates the element-wise absolute of its input.
- [BNNSArithmeticErf](bnnsarithmeticerf.md): An operation that calculates the element-wise error function of its input.
- [BNNSArithmeticNegate](bnnsarithmeticnegate.md): An operation that calculates the element-wise negation of its input.
- [BNNSArithmeticReciprocal](bnnsarithmeticreciprocal.md): An operation that calculates the element-wise reciprocal of its input.
- [BNNSArithmeticSign](bnnsarithmeticsign.md): An operation that calculates the element-wise sign of its input.
- [BNNSArithmeticSquare](bnnsarithmeticsquare.md): An operation that calculates the element-wise square of its input.

### Binary Arithmetic Functions

- [BNNSArithmeticAdd](bnnsarithmeticadd.md): An operation that calculates the element-wise sum of its two inputs.
- [BNNSArithmeticSubtract](bnnsarithmeticsubtract.md): An operation that calculates the element-wise difference of its two inputs.
- [BNNSArithmeticDivide](bnnsarithmeticdivide.md): An operation that calculates the element-wise division of its two inputs.
- [BNNSArithmeticDivideNoNaN](bnnsarithmeticdividenonan.md): An operation that calculates the element-wise division of its two inputs and returns zero if the divisor is zero, even if the first input is NaN or infinity.
- [BNNSArithmeticMultiply](bnnsarithmeticmultiply.md): An operation that calculates the element-wise product of its two inputs.
- [BNNSArithmeticMultiplyNoNaN](bnnsarithmeticmultiplynonan.md): An operation that calculates the element-wise product of its two inputs and returns zero, even if the first input is NaN or infinity.
- [BNNSArithmeticPow](bnnsarithmeticpow.md): An operation that calculates the element-wise first input raised to the power of its second input.
- [BNNSArithmeticMaximum](bnnsarithmeticmaximum.md): An operation that calculates the element-wise maximum of its two inputs.
- [BNNSArithmeticMinimum](bnnsarithmeticminimum.md): An operation that calculates the element-wise minimum of its two inputs.
- [BNNSArithmeticFloorDivide](bnnsarithmeticfloordivide.md): An operation that calculates the element-wise floor division of its inputs.
- [BNNSArithmeticTruncDivide](bnnsarithmetictruncdivide.md): An operation that calculates the element-wise truncated division of its inputs.
- [BNNSArithmeticTruncRemainder](bnnsarithmetictruncremainder.md): An operation that calculates the element-wise remainder of truncated division of its inputs.

### Ternary Arithmetic Functions

- [BNNSArithmeticMultiplyAdd](bnnsarithmeticmultiplyadd.md): An operation that calculates the element-wise fused multiply-add of its three inputs.
- [BNNSArithmeticSelect](bnnsarithmeticselect.md): An operation that selects elements from either its second or third input based on the corresponding value of its first input.

### Exponential and Logarithmic Functions

- [BNNSArithmeticExp](bnnsarithmeticexp.md): An operation that calculates the element-wise result of *e* raised to the power of its input.
- [BNNSArithmeticExp2](bnnsarithmeticexp2.md): An operation that calculates the element-wise result of 2 raised to the power of its input.
- [BNNSArithmeticLog](bnnsarithmeticlog.md): An operation that calculates the element-wise natural logarithm of its input.
- [BNNSArithmeticLog2](bnnsarithmeticlog2.md): An operation that calculates the element-wise base 2 logarithm of its input.

### Trigonometric Functions

- [BNNSArithmeticAcos](bnnsarithmeticacos.md): An operation that calculates the element-wise inverse cosine of its input.
- [BNNSArithmeticAcosh](bnnsarithmeticacosh.md): An operation that calculates the element-wise inverse hyperbolic cosine of its input.
- [BNNSArithmeticAsin](bnnsarithmeticasin.md): An operation that calculates the element-wise inverse sine of its input.
- [BNNSArithmeticAsinh](bnnsarithmeticasinh.md): An operation that calculates the element-wise inverse hyperbolic sine of its input.
- [BNNSArithmeticAtan](bnnsarithmeticatan.md): An operation that calculates the element-wise inverse tangent of its input.
- [BNNSArithmeticAtanh](bnnsarithmeticatanh.md): An operation that calculates the element-wise inverse hyperbolic tangent of its input.
- [BNNSArithmeticCos](bnnsarithmeticcos.md): An operation that calculates the element-wise cosine of its input.
- [BNNSArithmeticCosh](bnnsarithmeticcosh.md): An operation that calculates the element-wise hyperbolic cosine of its input.
- [BNNSArithmeticSin](bnnsarithmeticsin.md): An operation that calculates the element-wise sine of its input.
- [BNNSArithmeticSinh](bnnsarithmeticsinh.md): An operation that calculates the element-wise hyperbolic sine of its input.
- [BNNSArithmeticTan](bnnsarithmetictan.md): An operation that calculates the element-wise tangent of its input.
- [BNNSArithmeticTanh](bnnsarithmetictanh.md): An operation that calculates the element-wise hyperbolic tangent of its input.

## See Also

### Arithmetic layers

- [BNNSDescriptorType](bnnsdescriptortype.md): Constants that describe the input and output types of an arithmetic operation.
- [BNNSArithmeticUnary](bnnsarithmeticunary.md): Deprecated. A structure that contains the input and output of an arithmetic operation with a single input.
- [BNNSArithmeticBinary](bnnsarithmeticbinary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with two inputs.
- [BNNSArithmeticTernary](bnnsarithmeticternary.md): Deprecated. A structure that contains the inputs and output of an arithmetic operation with three inputs.
- [BNNSLayerParametersArithmetic](bnnslayerparametersarithmetic.md): Deprecated. A structure that contains the parameters of an arithmetic layer.
- [BNNSFilterCreateLayerArithmetic](bnnsfiltercreatelayerarithmetic%28____%29.md): Deprecated. Returns a new arithmetic layer.
- [BNNSArithmeticFilterApplyBatch](bnnsarithmeticfilterapplybatch%28______________%29.md): Deprecated. Applies an arithmetic filter to a set of input objects, writing the result to a set of output objects.
- [BNNSArithmeticFilterApplyBackwardBatch](bnnsarithmeticfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies an arithmetic filter backward to generate input gradients.
