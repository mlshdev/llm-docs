> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/embeddinglayer/init(input:output:dictionary:paddingindex:maximumnorm:normtype:scalesgradientbyfrequency:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/embeddinglayer/init(input:output:dictionary:paddingindex:maximumnorm:normtype:scalesgradientbyfrequency:filterparameters:))

# init(input:output:dictionary:paddingIndex:maximumNorm:normType:scalesGradientByFrequency:filterParameters:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Returns a new embedding layer.

> Use the BNNSGraph API instead.

## Declaration

```swift
convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, dictionary: BNNSNDArrayDescriptor, paddingIndex: Int, maximumNorm: Float, normType: BNNS.Norm, scalesGradientByFrequency: Bool, filterParameters: BNNSFilterParameters? = nil)
```

## Parameters

- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `dictionary`: The descriptor of the dictionary array.
- `paddingIndex`: The padding index. The operation returns a zero tensor for dictionary items with an index that corresponds to the padding index.
- `maximumNorm`: The maximum norm. If nonzero, the operation renormalizes any vector with a norm greater than `maximumNorm` during forward lookups
- `normType`: The norm type. If `normType` is nonzero, this value specifies the p-norm where p equals `norm_type`.
- `scalesGradientByFrequency`: A Boolean value that specifies that the operation scales calculated gradients based on the number of occurrence of the corresponding index in the input.
- `filterParameters`: The filter runtime parameters.

## See Also

### Related Documentation

- [BNNSFilterCreateLayerEmbedding(\_:\_:)](../../bnnsfiltercreatelayerembedding%28____%29.md): Deprecated. Returns a new embedding layer.

### Creating an Embedding Layer

- [BNNS.Norm](../norm.md): Deprecated. Constants that describe norm types.
