> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/reductionlayer/init(function:input:output:weights:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/reductionlayer/init(function:input:output:weights:filterparameters:))

# init(function:input:output:weights:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new reduction layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(function reductionFunction: BNNS.ReductionFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `reductionFunction`: The variable that specifies the reduction function.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `weights`: The descriptor of the weights.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The number of input dimensions must be equal to number of output dimensions, and equal to the number of weights dimensions. The reduction layer only supports `float`, with the exception of [BNNSReduceFunctionLogicalOr](../../bnnsreducefunctionlogicalor.md) and [BNNSReduceFunctionLogicalAnd](../../bnnsreducefunctionlogicaland.md) that support `float` and `BNNSDataTypeBoolean`.
