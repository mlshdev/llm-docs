> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsmatmul(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsmatmul(_:_:_:_:_:_:_:_:))

# BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a matrix multiplication operation directly to two input matrices.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSMatMul(_ transA: Bool, _ transB: Bool, _ alpha: Float, _ inputA: UnsafePointer<BNNSNDArrayDescriptor>, _ inputB: UnsafePointer<BNNSNDArrayDescriptor>, _ output: UnsafePointer<BNNSNDArrayDescriptor>, _ workspace: UnsafeMutableRawPointer?, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `transA`: A Boolean value that specifies whether the operation should treat `inputA` as transposed.
- `transB`: A Boolean value that specifies whether the operation should treat `inputB` as transposed.
- `alpha`: A value that the operation uses to scale the result.
- `inputA`: A pointer to the `inputA` matrix descriptor.
- `inputB`: A pointer to the `inputB` matrix descriptor.
- `output`: A pointer to the output matrix descriptor.
- `workspace`: An optional pointer to the workspace memory. Use [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmulworkspacesize%28______________%29.md) to calculate the workspace size that operation requires. [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md) doesn’t require any particular alignment for the workspace memory.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use this function to perform the operation `C = alpha * op(A) * op(B)` where `op` transposes the corresponding matrix if the appropriate transpose parameter is `true`. The function broadcasts dimensions that are absent on either input matrix. The matrix multiplication is always on the final two indices of each operand.

For example, the following arrays of values and descriptors for the matrix multiply inputs and outputs define a matrix multiplication operation without broadcasting. Note that the operation repeats the values in `inputBValues` along the third dimension.

```swift
let inputAValues: [Float] = [
    [ 24 values ]
]

let inputBValues: [Float] = [
    1, 2,
    3, 4,
    
    1, 2,
    3, 4,
    
    1, 2,
    3, 4
]

var inputADescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: inputAValues,
    shape: .imageCHW(3, 4, 2))

var inputBDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: inputBValues,
    shape: .tensor3DFirstMajor(3, 2, 2))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .imageCHW(inputADescriptor.shape.size.0,
                     inputADescriptor.shape.size.1,
                     inputBDescriptor.shape.size.1))
```

The [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md) function calculates the same result using a 2 x 2 matrix.

```swift
let inputBValues: [Float] = [
    1, 2,
    3, 4
]

var inputBDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: inputBValues,
    shape: .matrixFirstMajor(2, 2))
```

In both cases, the call to the matrix multiply function is the same.

```swift
BNNSMatMul(false, false,
           1,
           &inputADescriptor, &inputBDescriptor,
           &outputDescriptor,
           nil, nil)
```

You may optionally pass a workspace to [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md). Call [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmulworkspacesize%28______________%29.md) to calculate the required workspace size for a set of parameters. If you pass `nil` to the [BNNSMatMul(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmul%28________________%29.md) workspace parameter, BNNS allocates and dellocates the workspace.

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul(\_:\_:\_:\_:\_:\_:\_:)](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNS.BroadcastMatrixMultiplyLayer](bnns/broadcastmatrixmultiplylayer.md): Deprecated. A layer object that wraps a broadcast matrix multiply filter and manages its deinitialization.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul(\_:\_:)](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize(\_:\_:\_:\_:\_:\_:\_:)](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
- [applyMatrixMultiplication(inputA:transposed:inputB:transposed:output:alpha:workspace:filterParameters:)](bnns/applymatrixmultiplication%28inputa_transposed_inputb_transposed_output_alpha_workspace_filterparameters_%29.md): Deprecated. Performs a matrix multiplication operation directly on two input matrices.
- [matrixMultiplicationWorkspaceSize(inputA:transposed:inputB:transposed:output:alpha:filterParameters:)](bnns/matrixmultiplicationworkspacesize%28inputa_transposed_inputb_transposed_output_alpha_filterparameters_%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.

# BNNSMatMul (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a matrix multiplication operation directly to two input matrices.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSMatMul(const _Bool transA, const _Bool transB, const float alpha, const BNNSNDArrayDescriptor *inputA, const BNNSNDArrayDescriptor *inputB, const BNNSNDArrayDescriptor *output, void *workspace, const BNNSFilterParameters *filter_params);
```

## Parameters

- `transA`: A Boolean value that specifies whether the operation should treat `inputA` as transposed.
- `transB`: A Boolean value that specifies whether the operation should treat `inputB` as transposed.
- `alpha`: A value that the operation uses to scale the result.
- `inputA`: A pointer to the `inputA` matrix descriptor.
- `inputB`: A pointer to the `inputB` matrix descriptor.
- `output`: A pointer to the output matrix descriptor.
- `workspace`: An optional pointer to the workspace memory. Use [BNNSMatMulWorkspaceSize](bnnsmatmulworkspacesize%28______________%29.md) to calculate the workspace size that operation requires. [BNNSMatMul](bnnsmatmul%28________________%29.md) doesn’t require any particular alignment for the workspace memory.
- `filter_params`: The filter runtime parameters.

<a id="Discussion"></a>

## Discussion

Use this function to perform the operation `C = alpha * op(A) * op(B)` where `op` transposes the corresponding matrix if the appropriate transpose parameter is `true`. The function broadcasts dimensions that are absent on either input matrix. The matrix multiplication is always on the final two indices of each operand.

For example, the following arrays of values and descriptors for the matrix multiply inputs and outputs define a matrix multiplication operation without broadcasting. Note that the operation repeats the values in `inputBValues` along the third dimension.

```swift
let inputAValues: [Float] = [
    [ 24 values ]
]

let inputBValues: [Float] = [
    1, 2,
    3, 4,
    
    1, 2,
    3, 4,
    
    1, 2,
    3, 4
]

var inputADescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: inputAValues,
    shape: .imageCHW(3, 4, 2))

var inputBDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: inputBValues,
    shape: .tensor3DFirstMajor(3, 2, 2))

var outputDescriptor = BNNSNDArrayDescriptor.allocateUninitialized(
    scalarType: Float.self,
    shape: .imageCHW(inputADescriptor.shape.size.0,
                     inputADescriptor.shape.size.1,
                     inputBDescriptor.shape.size.1))
```

The [BNNSMatMul](bnnsmatmul%28________________%29.md) function calculates the same result using a 2 x 2 matrix.

```swift
let inputBValues: [Float] = [
    1, 2,
    3, 4
]

var inputBDescriptor = BNNSNDArrayDescriptor.allocate(
    initializingFrom: inputBValues,
    shape: .matrixFirstMajor(2, 2))
```

In both cases, the call to the matrix multiply function is the same.

```swift
BNNSMatMul(false, false,
           1,
           &inputADescriptor, &inputBDescriptor,
           &outputDescriptor,
           nil, nil)
```

You may optionally pass a workspace to [BNNSMatMul](bnnsmatmul%28________________%29.md). Call [BNNSMatMulWorkspaceSize](bnnsmatmulworkspacesize%28______________%29.md) to calculate the required workspace size for a set of parameters. If you pass `nil` to the [BNNSMatMul](bnnsmatmul%28________________%29.md) workspace parameter, BNNS allocates and dellocates the workspace.

## See Also

### Matrix multiplication

- [BNNSDirectApplyBroadcastMatMul](bnnsdirectapplybroadcastmatmul%28______________%29.md): Deprecated. Applies a broadcast matrix multiplication operation directly to two input matrices.
- [BNNSLayerParametersBroadcastMatMul](bnnslayerparametersbroadcastmatmul.md): Deprecated. A set of parameters that define a broadcast matrix multiply layer.
- [BNNSFilterCreateLayerBroadcastMatMul](bnnsfiltercreatelayerbroadcastmatmul%28____%29.md): Deprecated. Returns a new broadcast matrix multiply layer.
- [BNNSMatMulWorkspaceSize](bnnsmatmulworkspacesize%28______________%29.md): Deprecated. Returns the workspace size that a matrix multiply operation requires.
