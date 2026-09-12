> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnconvolutiondatasource/update(with:sourcestate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiondatasource/update(with:sourcestate:))

# update(with:sourceState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
optional func update(with gradientState: MPSCNNConvolutionGradientState, sourceState: MPSCNNConvolutionWeightsAndBiasesState) -> Bool
```

## See Also

### Instance Methods

- [biasTerms()](biasterms%28%29.md)
- [dataType()](datatype%28%29.md)
- [descriptor()](descriptor%28%29.md)
- [label()](label%28%29.md)
- [load()](load%28%29.md)
- [lookupTableForUInt8Kernel()](lookuptableforuint8kernel%28%29.md)
- [purge()](purge%28%29.md)
- [rangesForUInt8Kernel()](rangesforuint8kernel%28%29.md)
- [weights()](weights%28%29.md)
- [copy(with:device:)](copy%28with_device_%29.md)
- [kernelWeightsDataType()](kernelweightsdatatype%28%29.md)
- [update(with:gradientState:sourceState:)](update%28with_gradientstate_sourcestate_%29.md)
- [weightsLayout()](weightslayout%28%29.md)
- [weightsQuantizationType()](weightsquantizationtype%28%29.md)

# updateWithGradientState:sourceState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (BOOL) updateWithGradientState:(MPSCNNConvolutionGradientState *) gradientState sourceState:(MPSCNNConvolutionWeightsAndBiasesState *) sourceState;
```

## See Also

### Instance Methods

- [biasTerms](biasterms%28%29.md)
- [dataType](datatype%28%29.md)
- [descriptor](descriptor%28%29.md)
- [label](label%28%29.md)
- [load](load%28%29.md)
- [lookupTableForUInt8Kernel](lookuptableforuint8kernel%28%29.md)
- [purge](purge%28%29.md)
- [rangesForUInt8Kernel](rangesforuint8kernel%28%29.md)
- [weights](weights%28%29.md)
- [copyWithZone:device:](copy%28with_device_%29.md)
- [kernelWeightsDataType](kernelweightsdatatype%28%29.md)
- [updateWithCommandBuffer:gradientState:sourceState:](update%28with_gradientstate_sourcestate_%29.md)
- [weightsLayout](weightslayout%28%29.md)
- [weightsQuantizationType](weightsquantizationtype%28%29.md)
