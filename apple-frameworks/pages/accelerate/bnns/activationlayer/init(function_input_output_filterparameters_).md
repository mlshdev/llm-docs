> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/activationlayer/init(function:input:output:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/activationlayer/init(function:input:output:filterparameters:))

# init(function:input:output:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns a new activation layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(function activationFunction: BNNS.ActivationFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `activationFunction`: The activation function that the layer applies to the output.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input dimensions must be equal to the output dimensions. For activation types other than identity, the input and output must be `float`.
