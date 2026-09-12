> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/normalizationlayer/init(type:input:output:beta:gamma:momentum:epsilon:activation:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/normalizationlayer/init(type:input:output:beta:gamma:momentum:epsilon:activation:filterparameters:))

# init(type:input:output:beta:gamma:momentum:epsilon:activation:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new normalization layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(type normalization: BNNS.NormalizationType, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, beta: BNNSNDArrayDescriptor, gamma: BNNSNDArrayDescriptor, momentum: Float = 0, epsilon: Float, activation: BNNS.ActivationFunction, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `normalization`: An enumeration that specifies the normalization type.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `beta`: The descriptor of the beta.
- `gamma`: The descriptor of the gamma.
- `momentum`: A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- `epsilon`: The epsilon in the computation of the standard deviation.
- `activation`: The activation function that the layer applies to the output.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The gamma and beta descriptors must match the shape of input up to the normalizaton axis. The input and output descriptors must have a layout of [BNNS.DataLayout.imageCHW](../datalayout/imagechw.md). The gamma, beta, moving mean, and moving variance descriptors must have a `size[0]` that’s the same as the number of input channels. All arrays must have a data type of `float`.
