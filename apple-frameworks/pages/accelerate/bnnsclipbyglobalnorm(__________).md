> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsclipbyglobalnorm(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsclipbyglobalnorm(_:_:_:_:_:))

# BNNSClipByGlobalNorm(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Clips a tensor’s values to a maximum global Euclidean norm.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSClipByGlobalNorm(_ dest: UnsafeMutablePointer<UnsafeMutablePointer<BNNSNDArrayDescriptor>>, _ src: UnsafeMutablePointer<UnsafePointer<BNNSNDArrayDescriptor>>, _ count: Int, _ max_norm: Float, _ use_norm: Float) -> Int32
```

## Parameters

- `dest`: An array of output descriptors.
- `src`: An array of input descriptors.
- `count`: The number of input and output descriptors.
- `max_norm`: The maximum global Euclidean norm.
- `use_norm`: An optional value for a known global Euclidean norm. Set to `0` to specify that the function computes the norm from the input descriptors.

<a id="Discussion"></a>

## Discussion

Use this function to clip the values in an array of input tensors to a maximum Euclidean norm. If you know the global norm of the input tensors, pass this value as the `use_norm`. Otherwise, pass `0` to specify that the function calculates the norm.

The Euclidean norm is the square root of the sum of squares of the two tensors. The following code clips the Euclidean norm of two input tensors to half of the global Euclidean norm:

```swift
static func clipToGlobalNorm() {
    
    let inputOneData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    _ = inputOneData.initialize(from: [1, 2, 3, 4])
    let inputOneDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                   layout: BNNSDataLayoutVector,
                                                   size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                   stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                   data: inputOneData.baseAddress!,
                                                   data_type: BNNSDataType.float,
                                                   table_data: nil,
                                                   table_data_type: BNNSDataType.float,
                                                   data_scale: 1, data_bias: 0)
    
    let inputTwoData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    _ = inputTwoData.initialize(from: [5, 6, 7, 8])
    let inputTwoDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                   layout: BNNSDataLayoutVector,
                                                   size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                   stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                   data: inputTwoData.baseAddress!,
                                                   data_type: BNNSDataType.float,
                                                   table_data: nil,
                                                   table_data_type: BNNSDataType.float,
                                                   data_scale: 1, data_bias: 0)
    
    let outputOneData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    let outputOneDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: outputOneData.baseAddress!,
                                                    data_type: BNNSDataType.float,
                                                    table_data: nil,
                                                    table_data_type: BNNSDataType.float,
                                                    data_scale: 1, data_bias: 0)
    
    let outputTwoData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    let outputTwoDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: outputTwoData.baseAddress!,
                                                    data_type: BNNSDataType.float,
                                                    table_data: nil,
                                                    table_data_type: BNNSDataType.float,
                                                    data_scale: 1, data_bias: 0)
    
    let inputs = [inputOneDescriptor, inputTwoDescriptor]
    var inputsPointers: [UnsafePointer<BNNSNDArrayDescriptor>] = inputs.map { input in
        var descriptor = input
        
        let inputPtr = UnsafeMutablePointer<BNNSNDArrayDescriptor>.allocate(capacity: 1)
        inputPtr.initialize(from: &descriptor, count: 1)
        
        return UnsafePointer(inputPtr)
    }
    
    let outputs = [outputOneDescriptor, outputTwoDescriptor]
    var outputsPointers: [UnsafeMutablePointer<BNNSNDArrayDescriptor>] = outputs.map { output in
        var descriptor = output
        
        let outputPtr = UnsafeMutablePointer<BNNSNDArrayDescriptor>.allocate(capacity: 1)
        outputPtr.initialize(from: &descriptor, count: 1)
        
        return outputPtr
    }
    
    BNNSClipByGlobalNorm(&outputsPointers,
                         &inputsPointers,
                         2,
                         0.5 * 14.2828568570857,
                         0)
    
    // Prints: `[0.5, 1.0, 1.5, 2.0]`
    print(Array(outputOneData))
    
    // Prints: `[2.5, 3.0, 3.5, 4.0]`
    print(Array(outputTwoData))
    
    inputOneData.deallocate()
    inputTwoData.deallocate()
    outputOneData.deallocate()
    outputTwoData.deallocate()
}
```

On return, `outputOne` contains the values `[0.5, 1.0, 1.5, 2.0]`, and `outputTwo` contains the values `[2.5, 3.0, 3.5, 4.0]`.

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
- [BNNSClipByNorm(\_:\_:\_:\_:)](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
- [copyBandPart(\_:to:lowerBandCount:upperBandCount:filterParameters:)](bnns/copybandpart%28__to_lowerbandcount_upperbandcount_filterparameters_%29.md): Deprecated. Copies the specified subdiagonals and superdiagonals of a matrix, and sets other elements to zero.

# BNNSClipByGlobalNorm (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Clips a tensor’s values to a maximum global Euclidean norm.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSClipByGlobalNorm(BNNSNDArrayDescriptor **dest, const BNNSNDArrayDescriptor **src, size_t count, float max_norm, float use_norm);
```

## Parameters

- `dest`: An array of output descriptors.
- `src`: An array of input descriptors.
- `count`: The number of input and output descriptors.
- `max_norm`: The maximum global Euclidean norm.
- `use_norm`: An optional value for a known global Euclidean norm. Set to `0` to specify that the function computes the norm from the input descriptors.

<a id="Discussion"></a>

## Discussion

Use this function to clip the values in an array of input tensors to a maximum Euclidean norm. If you know the global norm of the input tensors, pass this value as the `use_norm`. Otherwise, pass `0` to specify that the function calculates the norm.

The Euclidean norm is the square root of the sum of squares of the two tensors. The following code clips the Euclidean norm of two input tensors to half of the global Euclidean norm:

```swift
static func clipToGlobalNorm() {
    
    let inputOneData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    _ = inputOneData.initialize(from: [1, 2, 3, 4])
    let inputOneDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                   layout: BNNSDataLayoutVector,
                                                   size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                   stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                   data: inputOneData.baseAddress!,
                                                   data_type: BNNSDataType.float,
                                                   table_data: nil,
                                                   table_data_type: BNNSDataType.float,
                                                   data_scale: 1, data_bias: 0)
    
    let inputTwoData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    _ = inputTwoData.initialize(from: [5, 6, 7, 8])
    let inputTwoDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                   layout: BNNSDataLayoutVector,
                                                   size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                   stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                   data: inputTwoData.baseAddress!,
                                                   data_type: BNNSDataType.float,
                                                   table_data: nil,
                                                   table_data_type: BNNSDataType.float,
                                                   data_scale: 1, data_bias: 0)
    
    let outputOneData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    let outputOneDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: outputOneData.baseAddress!,
                                                    data_type: BNNSDataType.float,
                                                    table_data: nil,
                                                    table_data_type: BNNSDataType.float,
                                                    data_scale: 1, data_bias: 0)
    
    let outputTwoData = UnsafeMutableBufferPointer<Float>.allocate(capacity: 4)
    let outputTwoDescriptor = BNNSNDArrayDescriptor(flags: BNNSNDArrayFlags(0),
                                                    layout: BNNSDataLayoutVector,
                                                    size: (4, 0, 0, 0, 0, 0, 0, 0),
                                                    stride: (0, 0, 0, 0, 0, 0, 0, 0),
                                                    data: outputTwoData.baseAddress!,
                                                    data_type: BNNSDataType.float,
                                                    table_data: nil,
                                                    table_data_type: BNNSDataType.float,
                                                    data_scale: 1, data_bias: 0)
    
    let inputs = [inputOneDescriptor, inputTwoDescriptor]
    var inputsPointers: [UnsafePointer<BNNSNDArrayDescriptor>] = inputs.map { input in
        var descriptor = input
        
        let inputPtr = UnsafeMutablePointer<BNNSNDArrayDescriptor>.allocate(capacity: 1)
        inputPtr.initialize(from: &descriptor, count: 1)
        
        return UnsafePointer(inputPtr)
    }
    
    let outputs = [outputOneDescriptor, outputTwoDescriptor]
    var outputsPointers: [UnsafeMutablePointer<BNNSNDArrayDescriptor>] = outputs.map { output in
        var descriptor = output
        
        let outputPtr = UnsafeMutablePointer<BNNSNDArrayDescriptor>.allocate(capacity: 1)
        outputPtr.initialize(from: &descriptor, count: 1)
        
        return outputPtr
    }
    
    BNNSClipByGlobalNorm(&outputsPointers,
                         &inputsPointers,
                         2,
                         0.5 * 14.2828568570857,
                         0)
    
    // Prints: `[0.5, 1.0, 1.5, 2.0]`
    print(Array(outputOneData))
    
    // Prints: `[2.5, 3.0, 3.5, 4.0]`
    print(Array(outputTwoData))
    
    inputOneData.deallocate()
    inputTwoData.deallocate()
    outputOneData.deallocate()
    outputTwoData.deallocate()
}
```

On return, `outputOne` contains the values `[0.5, 1.0, 1.5, 2.0]`, and `outputTwo` contains the values `[2.5, 3.0, 3.5, 4.0]`.

## See Also

### Utility functions

- [BNNSCopy](bnnscopy%28______%29.md): Copies the contents of an n-dimensional array descriptor to another of the same shape.
- [BNNSTranspose](bnnstranspose%28__________%29.md): Transposes a tensor by swapping two of its dimensions.
- [BNNSGetPointer](bnnsgetpointer%28____%29.md): Deprecated. Returns an n-dimensional array descriptor that contains a reference to a filter-data member.
- [BNNSPointerSpecifier](bnnspointerspecifier.md): Constants that specify which pointer the BNNS get filter function returns.
- [BNNSLayerParametersGram](bnnslayerparametersgram.md): Deprecated. A set of parameters that define a Gram matrix layer.
- [BNNSFilterCreateLayerGram](bnnsfiltercreatelayergram%28____%29.md): Deprecated. Returns a new Gram matrix layer.
- [BNNSClipByValue](bnnsclipbyvalue%28________%29.md): Deprecated. Clips a tensor’s values to the specified minimum and maximum values.
- [BNNSClipByNorm](bnnsclipbynorm%28________%29.md): Deprecated. Clips a tensor’s values to a maximum Euclidean norm.
