> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/bindandwritedata(_:forinputs:to:synchronous:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/bindandwritedata(_:forinputs:to:synchronous:))

# bindAndWriteData(\_:forInputs:to:synchronous:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.

## Declaration

```swift
func bindAndWriteData(_ inputsData: [String : MLCTensorData], forInputs inputTensors: [String : MLCTensor], to device: MLCDevice, synchronous: Bool) -> Bool
```

## Parameters

- `inputsData`: An array that contains the input data to write to device memory.
- `inputTensors`: The list of tensors to perform writes on.
- `device`: The compute device.
- `synchronous`: A Boolean value that indicates whether to execute the copy to the device synchronously.

<a id="return-value"></a>

## Return Value

`true` if the data is successfully associated with input tensors, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Use this method if you execute the forward, gradient, and optimizer updates independently. Write the inputs to device memory before the layer executes the forward pass. Similarly, write the inputs—typically the initial gradient tensor—to device memory before the layer executes the gradient pass.

Use asynchronous execution for better performance, except when testing or debugging.

> **Important**

>  You must guarantee the lifetime of the underlying memory of each value of `inputsData` for the entirety of each corresponding input tensor’s lifetime.

## See Also

### Associating Data with Input Tensors

- [bindAndWriteData(\_:forInputs:to:batchSize:synchronous:)](bindandwritedata%28__forinputs_to_batchsize_synchronous_%29.md): Deprecated. Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.

# bindAndWriteData:forInputs:toDevice:synchronous: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.

## Declaration

```objectivec
- (BOOL) bindAndWriteData:(NSDictionary<NSString *,MLCTensorData *> *) inputsData forInputs:(NSDictionary<NSString *,MLCTensor *> *) inputTensors toDevice:(MLCDevice *) device synchronous:(BOOL) synchronous;
```

## Parameters

- `inputsData`: An array that contains the input data to write to device memory.
- `inputTensors`: The list of tensors to perform writes on.
- `device`: The compute device.
- `synchronous`: A Boolean value that indicates whether to execute the copy to the device synchronously.

<a id="return-value"></a>

## Return Value

`true` if the data is successfully associated with input tensors, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Use this method if you execute the forward, gradient, and optimizer updates independently. Write the inputs to device memory before the layer executes the forward pass. Similarly, write the inputs—typically the initial gradient tensor—to device memory before the layer executes the gradient pass.

Use asynchronous execution for better performance, except when testing or debugging.

> **Important**

>  You must guarantee the lifetime of the underlying memory of each value of `inputsData` for the entirety of each corresponding input tensor’s lifetime.

## See Also

### Associating Data with Input Tensors

- [bindAndWriteData:forInputs:toDevice:batchSize:synchronous:](bindandwritedata%28__forinputs_to_batchsize_synchronous_%29.md): Deprecated. Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.
