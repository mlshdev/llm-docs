> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/clipbynorm(threshold:input:output:axes:)](https://developer.apple.com/documentation/accelerate/bnns/clipbynorm(threshold:input:output:axes:))

# clipByNorm(threshold:input:output:axes:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Clips the input tensor to a Euclidean norm and writes the result to the output tensor.

> Use the BNNSGraph API instead.

## Declaration

```swift
static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]? = nil) throws
```

## Parameters

- `threshold`: The maximum Euclidean norm to clip the gradient to.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `axes`: The dimensions that the function uses to compute the Euclidean norm. Set to `0` to specify that the function computes the norm over all dimensions.

<a id="Discussion"></a>

## Discussion

Use this function to clip the values in an input tensor to a maximum Euclidean norm. The Euclidean norm is the square root of the sum of squares of the two tensors.

The function supports clipping across the entire tensor or by the norms of a dimension.

The following code clips the values on axis `1` to a Euclidean norm of `10`. The Euclidean norms of `[1, 2, 3]` and `[4, 5, 6]` are both less than `10` and function returns them unchanged. However, the Euclidean norm of `[7, 8, 9]` is greater than `10` and the function returns them scaled accordingly.

```swift
static func clipToNorm() {
    let inputValues: [Float] = [1, 2, 3,
                                4, 5, 6,
                                7, 8, 9]
    
    let input = BNNSNDArrayDescriptor.allocate(
        initializingFrom: inputValues,
        shape: .matrixRowMajor(3, 3))
    let output = BNNSNDArrayDescriptor.allocateUninitialized(
        scalarType: Float.self,
        shape: input.shape)
    
    try? BNNS.clipByNorm(threshold: 10,
                        input: input,
                        output: output,
                        axes: [1])
    
    // Prints `[1.0, 2.0, 3.0,
    //          4.0, 5.0, 6.0,
    //          5.0257072, 5.743665, 6.461623]`
    print(output.makeArray(of: Float.self)!)

    input.deallocate()
    output.deallocate()
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
- [clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)](clipbyglobalnorm%28threshold_inputs_outputs_globalnorm_%29.md): Deprecated. Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.
- [BNNSClipByValue(\_:\_:\_:\_:)](../bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm(\_:\_:\_:\_:)](../bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](../bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.
