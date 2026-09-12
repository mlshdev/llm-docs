> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/init(sequencelengths:sortedsequences:featurechannelcount:batchsize:randominitializertype:)](https://developer.apple.com/documentation/mlcompute/mlctensor/init(sequencelengths:sortedsequences:featurechannelcount:batchsize:randominitializertype:))

# init(sequenceLengths:sortedSequences:featureChannelCount:batchSize:randomInitializerType:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and random initializer type you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(sequenceLengths: [Int], sortedSequences: Bool, featureChannelCount: Int, batchSize: Int, randomInitializerType: MLCRandomInitializerType)
```

## Parameters

- `sequenceLengths`: An array that contains the variable lengths of sequences stored in the tensor.
- `sortedSequences`: A Boolean that indicates whether you provide the sequence lengths sorted in descending order.
- `featureChannelCount`: The number of feature channels.
- `batchSize`: The tensor batch size.
- `randomInitializerType`: The random initializer type you use to generate random data.

## See Also

### Creating Tensors by Specifying Sequence Lengths

- [init(sequenceLength:featureChannelCount:batchSize:)](init%28sequencelength_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sequence length, number of feature channels, and batch size you specify.
- [init(sequenceLength:featureChannelCount:batchSize:data:)](init%28sequencelength_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and data you specify.
- [init(sequenceLengths:sortedSequences:featureChannelCount:batchSize:data:)](init%28sequencelengths_sortedsequences_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and data you specify.
- [init(sequenceLength:featureChannelCount:batchSize:randomInitializerType:)](init%28sequencelength_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and random initializer type you specify.
