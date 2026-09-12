> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/applyintopk(k:input:testindices:output:axis:batchsize:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/applyintopk(k:input:testindices:output:axis:batchsize:filterparameters:))

# applyInTopK(k:input:testIndices:output:axis:batchSize:filterParameters:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies an in-top-k filter directly to an input.

## Declaration

```swift
static func applyInTopK(k: Int, input: BNNSNDArrayDescriptor, testIndices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, batchSize: Int, filterParameters: BNNSFilterParameters? = nil) throws
```

## Parameters

- `k`: The number of entries the operation finds.
- `input`: The descriptor of the input.
- `testIndices`: The descriptor of the test indices.
- `output`: The descriptor of the output.
- `axis`: The axis along which the operation finds top-k entries.
- `batchSize`: The number of input-output pairs to process.
- `filterParameters`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input data type must be `float`, the test indices data type must be `int32`, and the output data type must be `BNNSDataTypeBoolean`.

## See Also

### Related Documentation

- [BNNSDirectApplyInTopK(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../bnnsdirectapplyintopk%28____________________%29.md): Applies an in-top-k filter directly to an input.

### Top-k layers

- [applyTopK(k:input:bestValues:bestIndices:axis:batchSize:filterParameters:)](applytopk%28k_input_bestvalues_bestindices_axis_batchsize_filterparameters_%29.md): Applies a top-k filter directly to an input.
