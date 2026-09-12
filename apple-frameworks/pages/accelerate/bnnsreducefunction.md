> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsreducefunction](https://developer.apple.com/documentation/accelerate/bnnsreducefunction)

# BNNSReduceFunction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe reduction functions.

## Declaration

```swift
struct BNNSReduceFunction
```

## Topics

### Reduction Functions

- [init(\_:)](bnnsreducefunction/init%28__%29.md)
- [init(rawValue:)](bnnsreducefunction/init%28rawvalue_%29.md)
- [rawValue](bnnsreducefunction/rawvalue.md)
- [BNNSReduceFunctionArgMax](bnnsreducefunctionargmax.md): A reduction function that computes the index of the maximum value.
- [BNNSReduceFunctionArgMin](bnnsreducefunctionargmin.md): A reduction function that computes the index of the minimum value.
- [BNNSReduceFunctionL1Norm](bnnsreducefunctionl1norm.md): A reduction function that computes the sum of the absolute value of each element.
- [BNNSReduceFunctionLogicalAnd](bnnsreducefunctionlogicaland.md): A reduction function that reduces a tensor to true if all elements are true.
- [BNNSReduceFunctionAll](bnnsreducefunctionall.md): An alias of the logical AND reduction function.
- [BNNSReduceFunctionLogicalOr](bnnsreducefunctionlogicalor.md): A reduction function that reduces a tensor to true if any element is true.
- [BNNSReduceFunctionLogSum](bnnsreducefunctionlogsum.md)
- [BNNSReduceFunctionAny](bnnsreducefunctionany.md): An alias of the logical OR reduction function.
- [BNNSReduceFunctionMax](bnnsreducefunctionmax.md): A reduction function that computes the maximum value.
- [BNNSReduceFunctionMean](bnnsreducefunctionmean.md): A reduction function that computes the mean value.
- [BNNSReduceFunctionMeanNonZero](bnnsreducefunctionmeannonzero.md): A reduction function that computes the mean value of nonzero elements.
- [BNNSReduceFunctionMin](bnnsreducefunctionmin.md): A reduction function that computes the minimum value.
- [BNNSReduceFunctionSum](bnnsreducefunctionsum.md): A reduction function that computes the sum of all values.
- [BNNSReduceFunctionSumLog](bnnsreducefunctionsumlog.md): A reduction function that computes the sum of the natural logarithm of all values.
- [BNNSReduceFunctionSumSquare](bnnsreducefunctionsumsquare.md): A reduction function that computes the sum of the square of all values.
- [BNNSReduceFunctionL2Norm](bnnsreducefunctionl2norm.md): A reduction function that computes the Euclidean norm.
- [BNNSReduceFunctionLogSumExp](bnnsreducefunctionlogsumexp.md): A reduction function that computes the logarithm of the sum of the exponentials of each element.
- [BNNSReduceFunctionNone](bnnsreducefunctionnone.md): A reduction function that copies the input to the output.
- [BNNSReduceFunctionProduct](bnnsreducefunctionproduct.md): A reduction function that computes the product of all values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Reduction layers

- [BNNS.ReductionLayer](bnns/reductionlayer.md): Deprecated. A layer object that wraps a reduction filter and manages its deinitialization.
- [applyReduction(\_:input:output:weights:filterParameters:)](bnns/applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.
- [BNNSLayerParametersReduction](bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction(\_:\_:)](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction(\_:\_:)](bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.

# BNNSReduceFunction (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe reduction functions.

## Declaration

```objectivec
typedef enum { ... } BNNSReduceFunction;
```

## Topics

### Reduction Functions

- [BNNSReduceFunctionArgMax](bnnsreducefunctionargmax.md): A reduction function that computes the index of the maximum value.
- [BNNSReduceFunctionArgMin](bnnsreducefunctionargmin.md): A reduction function that computes the index of the minimum value.
- [BNNSReduceFunctionL1Norm](bnnsreducefunctionl1norm.md): A reduction function that computes the sum of the absolute value of each element.
- [BNNSReduceFunctionLogicalAnd](bnnsreducefunctionlogicaland.md): A reduction function that reduces a tensor to true if all elements are true.
- [BNNSReduceFunctionAll](bnnsreducefunctionall.md): An alias of the logical AND reduction function.
- [BNNSReduceFunctionLogicalOr](bnnsreducefunctionlogicalor.md): A reduction function that reduces a tensor to true if any element is true.
- [BNNSReduceFunctionLogSum](bnnsreducefunctionlogsum.md)
- [BNNSReduceFunctionAny](bnnsreducefunctionany.md): An alias of the logical OR reduction function.
- [BNNSReduceFunctionMax](bnnsreducefunctionmax.md): A reduction function that computes the maximum value.
- [BNNSReduceFunctionMean](bnnsreducefunctionmean.md): A reduction function that computes the mean value.
- [BNNSReduceFunctionMeanNonZero](bnnsreducefunctionmeannonzero.md): A reduction function that computes the mean value of nonzero elements.
- [BNNSReduceFunctionMin](bnnsreducefunctionmin.md): A reduction function that computes the minimum value.
- [BNNSReduceFunctionSum](bnnsreducefunctionsum.md): A reduction function that computes the sum of all values.
- [BNNSReduceFunctionSumLog](bnnsreducefunctionsumlog.md): A reduction function that computes the sum of the natural logarithm of all values.
- [BNNSReduceFunctionSumSquare](bnnsreducefunctionsumsquare.md): A reduction function that computes the sum of the square of all values.
- [BNNSReduceFunctionL2Norm](bnnsreducefunctionl2norm.md): A reduction function that computes the Euclidean norm.
- [BNNSReduceFunctionLogSumExp](bnnsreducefunctionlogsumexp.md): A reduction function that computes the logarithm of the sum of the exponentials of each element.
- [BNNSReduceFunctionNone](bnnsreducefunctionnone.md): A reduction function that copies the input to the output.
- [BNNSReduceFunctionProduct](bnnsreducefunctionproduct.md): A reduction function that computes the product of all values.

## See Also

### Reduction layers

- [BNNSLayerParametersReduction](bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction](bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.
