> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/init(sequencelength:featurechannelcount:batchsize:data:)](https://developer.apple.com/documentation/mlcompute/mlctensor/init(sequencelength:featurechannelcount:batchsize:data:))

# init(sequenceLength:featureChannelCount:batchSize:data:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor with the sequence length, number of feature channels, batch size, and data you specify.

## Declaration

```swift
convenience init(sequenceLength: Int, featureChannelCount: Int, batchSize: Int, data: MLCTensorData?)
```

## Parameters

- `sequenceLength`: The length of sequences stored in the tensor.
- `featureChannelCount`: The number of feature channels.
- `batchSize`: The tensor batch size.
- `data`: The tensor data.

## See Also

### Creating Tensors by Specifying Sequence Lengths

- [init(sequenceLength:featureChannelCount:batchSize:)](init%28sequencelength_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sequence length, number of feature channels, and batch size you specify.
- [init(sequenceLengths:sortedSequences:featureChannelCount:batchSize:data:)](init%28sequencelengths_sortedsequences_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and data you specify.
- [init(sequenceLength:featureChannelCount:batchSize:randomInitializerType:)](init%28sequencelength_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and random initializer type you specify.
- [init(sequenceLengths:sortedSequences:featureChannelCount:batchSize:randomInitializerType:)](init%28sequencelengths_sortedsequences_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and random initializer type you specify.

# tensorWithSequenceLength:featureChannelCount:batchSize:data: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor with the sequence length, number of feature channels, batch size, and data you specify.

## Declaration

```objectivec
+ (instancetype) tensorWithSequenceLength:(NSUInteger) sequenceLength featureChannelCount:(NSUInteger) featureChannelCount batchSize:(NSUInteger) batchSize data:(MLCTensorData *) data;
```

## Parameters

- `sequenceLength`: The length of sequences stored in the tensor.
- `featureChannelCount`: The number of feature channels.
- `batchSize`: The tensor batch size.
- `data`: The tensor data.

## See Also

### Creating Tensors by Specifying Sequence Lengths

- [tensorWithSequenceLength:featureChannelCount:batchSize:](init%28sequencelength_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sequence length, number of feature channels, and batch size you specify.
- [tensorWithSequenceLengths:sortedSequences:featureChannelCount:batchSize:data:](tensorwithsequencelengths_sortedsequences_featurechannelcount_batchsize_data_.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and data you specify.
- [tensorWithSequenceLength:featureChannelCount:batchSize:randomInitializerType:](init%28sequencelength_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and random initializer type you specify.
- [tensorWithSequenceLengths:sortedSequences:featureChannelCount:batchSize:randomInitializerType:](tensorwithsequencelengths_sortedsequences_featurechannelcount_batchsize_randominitializertype_.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and random initializer type you specify.
