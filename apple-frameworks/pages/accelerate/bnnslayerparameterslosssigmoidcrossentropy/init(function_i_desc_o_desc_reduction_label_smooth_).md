> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslosssigmoidcrossentropy/init(function:i_desc:o_desc:reduction:label_smooth:)](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslosssigmoidcrossentropy/init(function:i_desc:o_desc:reduction:label_smooth:))

# init(function:i_desc:o_desc:reduction:label_smooth:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new sigmoid cross entropy loss layer parameters structure from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(function: BNNSLossFunction, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, reduction: BNNSLossReductionFunction, label_smooth: Float)
```

## Parameters

- `function`: The function that’s used to compute loss.
- `i_desc`: The descriptor of the input.
- `o_desc`: The descriptor of the output.
- `reduction`: The function that’s used to reduce the computed loss.
- `label_smooth`: A value that defines the smoothing that the loss function applies to the labels.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input data type and output data type must be `float`. The output size must be `1`, unless the reduction is [BNNS.LossReduction.none](../bnns/lossreduction/none.md).

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated. Returns a new sigmoid cross entropy loss layer parameters structure.
