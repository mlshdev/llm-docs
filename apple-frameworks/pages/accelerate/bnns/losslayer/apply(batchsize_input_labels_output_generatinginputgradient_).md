> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/losslayer/apply(batchsize:input:labels:output:generatinginputgradient:)](https://developer.apple.com/documentation/accelerate/bnns/losslayer/apply(batchsize:input:labels:output:generatinginputgradient:))

# apply(batchSize:input:labels:output:generatingInputGradient:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the layer to a set of input objects, writing the result to a set of output objects.

> Use the BNNSGraph API instead.

## Declaration

```swift
func apply(batchSize: Int, input: BNNSNDArrayDescriptor, labels: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor) throws
```

## Parameters

- `batchSize`: The number of input-output pairs.
- `input`: The descriptor of the input.
- `labels`: The descriptor of the labels.
- `output`: The descriptor of the output.
- `inputGradient`: The descriptor of the input gradient.
