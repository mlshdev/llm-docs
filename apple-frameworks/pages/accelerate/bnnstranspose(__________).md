> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnstranspose(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnstranspose(_:_:_:_:_:))

# BNNSTranspose(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Transposes a tensor by swapping two of its dimensions.

## Declaration

```swift
func BNNSTranspose(_ dest: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ src: UnsafePointer<BNNSNDArrayDescriptor>, _ axis0: Int, _ axis1: Int, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `dest`: The descriptor of the desination.
- `src`: The descriptor of the source.
- `axis0`: First transpose axis.
- `axis1`: Second transpose axis.
- `filter_params`: The filter runtime parameters.

## See Also

### Utility functions

- [copy(\_:to:filterParameters:)](bnns/copy%28__to_filterparameters_%29.md): Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.
- [transpose(input:output:firstTransposeAxis:secondTransposeAxis:filterParameters:)](bnns/transpose%28input_output_firsttransposeaxis_secondtransposeaxis_filterparameters_%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSCopy(\_:\_:\_:)](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSGetPointer(\_:\_:)](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNS.GramLayer](bnns/gramlayer.md): Deprecated. A layer object that wraps a Gram matrix filter and manages its deinitialization.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram(\_:\_:)](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [clip(to:input:output:)](bnns/clip%28to_input_output_%29.md): Deprecated. Clips the input tensor to a closed range and writes the result to the output tensor.
- [clipByNorm(threshold:input:output:axes:)](bnns/clipbynorm%28threshold_input_output_axes_%29.md): Deprecated. Clips the input tensor to a Euclidean norm and writes the result to the output tensor.
- [clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)](bnns/clipbyglobalnorm%28threshold_inputs_outputs_globalnorm_%29.md): Deprecated. Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.
- [BNNSClipByValue(\_:\_:\_:\_:)](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm(\_:\_:\_:\_:)](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](bnns/copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.

# BNNSTranspose (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Transposes a tensor by swapping two of its dimensions.

## Declaration

```objectivec
int BNNSTranspose(BNNSNDArrayDescriptor *dest, const BNNSNDArrayDescriptor *src, size_t axis0, size_t axis1, const BNNSFilterParameters *filter_params);
```

## Parameters

- `dest`: The descriptor of the desination.
- `src`: The descriptor of the source.
- `axis0`: First transpose axis.
- `axis1`: Second transpose axis.
- `filter_params`: The filter runtime parameters.

## See Also

### Utility functions

- [BNNSCopy](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSGetPointer](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [BNNSClipByValue](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
