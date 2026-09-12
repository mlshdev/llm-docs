> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsreducefunctionnone](https://developer.apple.com/documentation/accelerate/bnnsreducefunctionnone)

# BNNSReduceFunctionNone (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reduction function that copies the input to the output.

## Declaration

```swift
var BNNSReduceFunctionNone: BNNSReduceFunction { get }
```

<a id="Discussion"></a>

## Discussion

BNNS provides this reduction function for use with some functions — such as [BNNSScatter(\_:\_:\_:\_:\_:\_:)](bnnsscatter%28____________%29.md) — to indicate that the operation copies the input to the output. [BNNSReduceFunctionNone](bnnsreducefunctionnone.md) isn’t supported by the BNNS reduction layer, use [BNNSCopy(\_:\_:\_:)](bnnscopy%28______%29.md) to perform a copy or conversion operation.

## See Also

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

# BNNSReduceFunctionNone (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reduction function that copies the input to the output.

## Declaration

```objectivec
BNNSReduceFunctionNone
```

<a id="Discussion"></a>

## Discussion

BNNS provides this reduction function for use with some functions — such as [BNNSScatter](bnnsscatter%28____________%29.md) — to indicate that the operation copies the input to the output. [BNNSReduceFunctionNone](bnnsreducefunctionnone.md) isn’t supported by the BNNS reduction layer, use [BNNSCopy](bnnscopy%28______%29.md) to perform a copy or conversion operation.

## See Also

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
