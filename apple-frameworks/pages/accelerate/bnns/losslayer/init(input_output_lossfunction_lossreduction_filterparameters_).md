> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/losslayer/init(input:output:lossfunction:lossreduction:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/losslayer/init(input:output:lossfunction:lossreduction:filterparameters:))

# init(input:output:lossFunction:lossReduction:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new loss layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, lossFunction: BNNS.LossFunction, lossReduction: BNNS.LossReduction, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `lossFunction`: The function that’s used to compute the loss.
- `lossReduction`: The function that’s used to reduce the computed loss.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input data type and output data type must be `float`. The output size must be `1`, unless the reduction is [BNNS.LossReduction.none](../lossreduction/none.md).
