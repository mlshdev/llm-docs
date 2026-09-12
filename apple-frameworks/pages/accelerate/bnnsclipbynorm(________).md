> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsclipbynorm(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsclipbynorm(_:_:_:_:))

# BNNSClipByNorm(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Clips a tensor’s values to a maximum Euclidean norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSClipByNorm(_ dest: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ src: UnsafePointer<BNNSNDArrayDescriptor>, _ max_norm: Float, _ axis_flags: UInt32) -> Int32
```

## Parameters

- `dest`: The descriptor of the output.
- `src`: The descriptor of the input.
- `max_norm`: The maximum Euclidean norm.
- `axis_flags`: The dimensions that the function uses to compute the Euclidean norm. Set to `0` for the function to compute the norm over all dimensions.

<a id="Discussion"></a>

## Discussion

Use this function to clip the values in an input tensor to a maximum Euclidean norm. The Euclidean norm is the square root of the sum of squares of the two tensors.

The function supports clipping across the entire tensor or by the norms of the dimension you specify.

The following code clips the values on axis `0b0010` to a Euclidean norm of `10`. The Euclidean norms of `[1, 2, 3]` and `[4, 5, 6]` are both less than 10, and function returns them unchanged. However, the Euclidean norm of `[7, 8, 9]` is greater than 10, and the function returns them scaled accordingly.

```swift
static func clipToNorm() {
    
    let inputData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 9)
    _ = inputData.initialize(from: [1, 2, 3,
                                    4, 5, 6,
                                    7, 8, 9])
    
    var inputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                layout: BNNSDataLayoutRowMajorMatrix,
                                                size: (3, 3, 0, 0, 0, 0, 0, 0),
                                                stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                data: inputData.baseAddress!,
                                                data_type: BNNSDataType.float,
                                                table_data: nil,
                                                table_data_type: BNNSDataType.float,
                                                data_scale: 1, data_bias: 0)
    
    let outputData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 9)
    var outputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                 layout: BNNSDataLayoutRowMajorMatrix,
                                                 size: (3, 3, 0, 0, 0, 0, 0, 0),
                                                 stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                 data: outputData.baseAddress!,
                                                 data_type: BNNSDataType.float,
                                                 table_data: nil,
                                                 table_data_type: BNNSDataType.float,
                                                 data_scale: 1, data_bias: 0)
    
    BNNSClipByNorm(&outputDescriptor,
                    &inputDescriptor,
                    10,
                    0b0010)
    
    // Prints `[1.0, 2.0, 3.0,
    //          4.0, 5.0, 6.0,
    //          5.0257072, 5.743665, 6.461623]`
    print(Array(outputData))
    
    inputData.deallocate()
    outputData.deallocate()
}
```

## See Also

### Utility functions

- [copy(\_:to:filterParameters:)](bnns/copy%28__to_filterparameters_%29.md): Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.
- [transpose(input:output:firstTransposeAxis:secondTransposeAxis:filterParameters:)](bnns/transpose%28input_output_firsttransposeaxis_secondtransposeaxis_filterparameters_%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSCopy(\_:\_:\_:)](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSTranspose(\_:\_:\_:\_:\_:)](bnnstranspose%28__________%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSGetPointer(\_:\_:)](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNS.GramLayer](bnns/gramlayer.md): Deprecated. A layer object that wraps a Gram matrix filter and manages its deinitialization.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram(\_:\_:)](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [clip(to:input:output:)](bnns/clip%28to_input_output_%29.md): Deprecated. Clips the input tensor to a closed range and writes the result to the output tensor.
- [clipByNorm(threshold:input:output:axes:)](bnns/clipbynorm%28threshold_input_output_axes_%29.md): Deprecated. Clips the input tensor to a Euclidean norm and writes the result to the output tensor.
- [clipByGlobalNorm(threshold:inputs:outputs:globalNorm:)](bnns/clipbyglobalnorm%28threshold_inputs_outputs_globalnorm_%29.md): Deprecated. Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.
- [BNNSClipByValue(\_:\_:\_:\_:)](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:)](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](bnns/copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.

# BNNSClipByNorm (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Clips a tensor’s values to a maximum Euclidean norm.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSClipByNorm(BNNSNDArrayDescriptor *dest, const BNNSNDArrayDescriptor *src, float max_norm, uint32_t axis_flags);
```

## Parameters

- `dest`: The descriptor of the output.
- `src`: The descriptor of the input.
- `max_norm`: The maximum Euclidean norm.
- `axis_flags`: The dimensions that the function uses to compute the Euclidean norm. Set to `0` for the function to compute the norm over all dimensions.

<a id="Discussion"></a>

## Discussion

Use this function to clip the values in an input tensor to a maximum Euclidean norm. The Euclidean norm is the square root of the sum of squares of the two tensors.

The function supports clipping across the entire tensor or by the norms of the dimension you specify.

The following code clips the values on axis `0b0010` to a Euclidean norm of `10`. The Euclidean norms of `[1, 2, 3]` and `[4, 5, 6]` are both less than 10, and function returns them unchanged. However, the Euclidean norm of `[7, 8, 9]` is greater than 10, and the function returns them scaled accordingly.

```swift
static func clipToNorm() {
    
    let inputData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 9)
    _ = inputData.initialize(from: [1, 2, 3,
                                    4, 5, 6,
                                    7, 8, 9])
    
    var inputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                layout: BNNSDataLayoutRowMajorMatrix,
                                                size: (3, 3, 0, 0, 0, 0, 0, 0),
                                                stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                data: inputData.baseAddress!,
                                                data_type: BNNSDataType.float,
                                                table_data: nil,
                                                table_data_type: BNNSDataType.float,
                                                data_scale: 1, data_bias: 0)
    
    let outputData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 9)
    var outputDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                 layout: BNNSDataLayoutRowMajorMatrix,
                                                 size: (3, 3, 0, 0, 0, 0, 0, 0),
                                                 stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                 data: outputData.baseAddress!,
                                                 data_type: BNNSDataType.float,
                                                 table_data: nil,
                                                 table_data_type: BNNSDataType.float,
                                                 data_scale: 1, data_bias: 0)
    
    BNNSClipByNorm(&outputDescriptor,
                    &inputDescriptor,
                    10,
                    0b0010)
    
    // Prints `[1.0, 2.0, 3.0,
    //          4.0, 5.0, 6.0,
    //          5.0257072, 5.743665, 6.461623]`
    print(Array(outputData))
    
    inputData.deallocate()
    outputData.deallocate()
}
```

## See Also

### Utility functions

- [BNNSCopy](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSTranspose](bnnstranspose%28__________%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSGetPointer](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [BNNSClipByValue](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByGlobalNorm](bnnsclipbyglobalnorm%28__________%29.md): Deprecated. Clips a tensor’s values to a maximum global Euclidean norm.
