> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/shuffletype](https://developer.apple.com/documentation/accelerate/bnns/shuffletype)

# BNNS.ShuffleType

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Constants that specify a shuffle type.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum ShuffleType
```

## Topics

### Enumeration Cases

- [BNNS.ShuffleType.depthToSpaceNCHW](shuffletype/depthtospacenchw.md): Deprecated. The pixel shuffle for the NCHW format, equivalent to depth-to-space in Column Row Depth (CRD) mode.
- [BNNS.ShuffleType.spaceToDepthNCHW](shuffletype/spacetodepthnchw.md): Deprecated. The pixel shuffle for the NCHW format, equivalent to space-to-depth in Column Row Depth (CRD) mode.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Utility functions

- [copy(\_:to:filterParameters:)](copy%28__to_filterparameters_%29.md): Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.
- [transpose(input:output:firstTransposeAxis:secondTransposeAxis:filterParameters:)](transpose%28input_output_firsttransposeaxis_secondtransposeaxis_filterparameters_%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSCopy(\_:\_:\_:)](../bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSTranspose(\_:\_:\_:\_:\_:)](../bnnstranspose%28__________%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSGetPointer(\_:\_:)](../bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](../bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNS.GramLayer](gramlayer.md): Deprecated. A layer object that wraps a Gram matrix filter and manages its deinitialization.
- [BNNSLayerParametersGram](../bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram(\_:\_:)](../bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [clip(to:input:output:)](clip%28to_input_output_%29.md): Deprecated. Clips the input tensor to a closed range and writes the result to the output tensor.
- [clipByNorm(threshold:input:output:axes:)](clipbynorm%28threshold_input_output_axes_%29.md): Deprecated. Clips the input tensor to a Euclidean norm and writes the result to the output tensor.
- [clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)](clipbyglobalnorm%28threshold_inputs_outputs_globalnorm_%29.md): Deprecated. Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.
- [BNNSClipByValue(\_:\_:\_:\_:)](../bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm(\_:\_:\_:\_:)](../bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](../bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
