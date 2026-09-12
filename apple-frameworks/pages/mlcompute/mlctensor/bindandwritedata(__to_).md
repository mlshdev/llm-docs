> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/bindandwritedata(_:to:)](https://developer.apple.com/documentation/mlcompute/mlctensor/bindandwritedata(_:to:))

# bindAndWriteData(\_:to:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.

## Declaration

```swift
func bindAndWriteData(_ data: MLCTensorData, to device: MLCDevice) -> Bool
```

## Parameters

- `data`: The data you want to associate with the tensor.
- `device`: The compute device.

<a id="return-value"></a>

## Return Value

`true` if the framework successfully associated the data with the tensor and copied it to the device; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

The caller must guarantee the lifetime of the underlying memory of `data` for the lifetime of the tensor.

Only use this method to update device memory for tensors that are typically layer parameters, such as weights and bias for convolution layers, or beta and gamma for normalization layers. A typical use case might be implementing your own optimizer and needing to update the device memory data for these tensors.

For input tensors, use [bindAndWriteData(\_:forInputs:to:batchSize:synchronous:)](../mlcgraph/bindandwritedata%28__forinputs_to_batchsize_synchronous_%29.md).

## See Also

### Managing Tensor Data

- [synchronizeData()](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData()](synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [copyDataFromDeviceMemory(toBytes:length:synchronizeWithDevice:)](copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindOptimizerData(\_:deviceData:)](bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.

# bindAndWriteData:toDevice: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.

## Declaration

```objectivec
- (BOOL) bindAndWriteData:(MLCTensorData *) data toDevice:(MLCDevice *) device;
```

## Parameters

- `data`: The data you want to associate with the tensor.
- `device`: The compute device.

<a id="return-value"></a>

## Return Value

`true` if the framework successfully associated the data with the tensor and copied it to the device; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

The caller must guarantee the lifetime of the underlying memory of `data` for the lifetime of the tensor.

Only use this method to update device memory for tensors that are typically layer parameters, such as weights and bias for convolution layers, or beta and gamma for normalization layers. A typical use case might be implementing your own optimizer and needing to update the device memory data for these tensors.

For input tensors, use [bindAndWriteData:forInputs:toDevice:batchSize:synchronous:](../mlcgraph/bindandwritedata%28__forinputs_to_batchsize_synchronous_%29.md).

## See Also

### Managing Tensor Data

- [synchronizeData](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData](synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [copyDataFromDeviceMemoryToBytes:length:synchronizeWithDevice:](copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindOptimizerData:deviceData:](bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.
