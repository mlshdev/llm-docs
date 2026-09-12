> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/tensorwithsequencelengths:sortedsequences:featurechannelcount:batchsize:randominitializertype:](https://developer.apple.com/documentation/mlcompute/mlctensor/tensorwithsequencelengths:sortedsequences:featurechannelcount:batchsize:randominitializertype:)

# tensorWithSequenceLengths:sortedSequences:featureChannelCount:batchSize:randomInitializerType:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and random initializer type you specify.

## Declaration

```objectivec
+ (instancetype) tensorWithSequenceLengths:(NSArray<NSNumber *> *) sequenceLengths sortedSequences:(BOOL) sortedSequences featureChannelCount:(NSUInteger) featureChannelCount batchSize:(NSUInteger) batchSize randomInitializerType:(MLCRandomInitializerType) randomInitializerType;
```

## Parameters

- `sequenceLengths`: An array of the variable lengths of sequences stored in the tensor.
- `sortedSequences`: A Boolean that indicates whether you provide the sequence lengths sorted in descending order.
- `featureChannelCount`: The number of feature channels.
- `batchSize`: The tensor batch size.
- `randomInitializerType`: The random initializer type you use to generate random data.

<a id="return-value"></a>

## Return Value

A tensor.

## See Also

### Creating Tensors by Specifying Sequence Lengths

- [tensorWithSequenceLength:featureChannelCount:batchSize:](init%28sequencelength_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sequence length, number of feature channels, and batch size you specify.
- [tensorWithSequenceLength:featureChannelCount:batchSize:data:](init%28sequencelength_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and data you specify.
- [tensorWithSequenceLengths:sortedSequences:featureChannelCount:batchSize:data:](tensorwithsequencelengths_sortedsequences_featurechannelcount_batchsize_data_.md): Deprecated. Creates a tensor with the sequence lengths, sorting indicator, number of feature channels, batch size, and data you specify.
- [tensorWithSequenceLength:featureChannelCount:batchSize:randomInitializerType:](init%28sequencelength_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sequence length, number of feature channels, batch size, and random initializer type you specify.
