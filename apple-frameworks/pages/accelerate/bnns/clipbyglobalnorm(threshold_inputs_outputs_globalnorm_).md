> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:)](https://developer.apple.com/documentation/accelerate/bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:))

# clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func clipByGlobalNorm(threshold: Float, inputs: [BNNSNDArrayDescriptor], outputs: [BNNSNDArrayDescriptor], globalNorm: Float = 0) throws
```

## Parameters

- `threshold`: The maximum Euclidean norm to clip the gradient to.
- `inputs`: An array of input descriptors.
- `outputs`: An array of output descriptors.
- `globalNorm`: The global norm to use. Set to `0` to specify that the function computes the norm from the input descriptors.

<a id="Discussion"></a>

## Discussion

Use this function to clip the values in an array of input tensors to a maximum global Euclidean norm. If you know the global norm of the input tensors, pass this value as the `globalNorm`. Otherwise, pass `0` to specify that the function calculates the norm.

The Euclidean norm is the square root of the sum of squares of the two tensors. The following code clips the Euclidean norm of two input tensors to half of the global Euclidean norm:

```swift
static func clipToGlobalNorm() {
    let inputOne = BNNSNDArrayDescriptor.allocate(
        initializingFrom: [1, 2, 3, 4] as [Float],
        shape: .vector(4))
    let inputTwo = BNNSNDArrayDescriptor.allocate(
        initializingFrom: [5, 6, 7, 8] as [Float],
        shape: .vector(4))
    
    let outputOne = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: .vector(4))
    let outputTwo = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: .vector(4))
    
    try? BNNS.clipByGlobalNorm(threshold: 0.5 * 14.2828568570857,
                               inputs: [inputOne, inputTwo],
                               outputs: [outputOne, outputTwo])
    
    // Prints: `[0.5, 1.0, 1.5, 2.0]`
    print(outputOne.makeArray(of: Float.self)!)
    
    // Prints: `[2.5, 3.0, 3.5, 4.0]`
    print(outputTwo.makeArray(of: Float.self)!)

    inputOne.deallocate()
    inputTwo.deallocate()
    outputOne.deallocate()
    outputTwo.deallocate()
}
```

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
- [BNNSClipByValue(\_:\_:\_:\_:)](../bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm(\_:\_:\_:\_:)](../bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](../bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
