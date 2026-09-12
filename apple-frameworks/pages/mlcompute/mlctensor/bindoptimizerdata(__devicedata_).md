> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/bindoptimizerdata(_:devicedata:)](https://developer.apple.com/documentation/mlcompute/mlctensor/bindoptimizerdata(_:devicedata:))

# bindOptimizerData(\_:deviceData:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the optimizer and device data buffers you specify to the tensor.

## Declaration

```swift
func bindOptimizerData(_ data: [MLCTensorData], deviceData: [MLCTensorOptimizerDeviceData]?) -> Bool
```

## Parameters

- `data`: An array that contains the optimizer data to associate with the tensor.
- `deviceData`: An array that contains the optimizer device data to associate with the tensor.

<a id="return-value"></a>

## Return Value

`true` if the framework successfully associated the data and device data with the tensor; otherwise, `false`.

## See Also

### Managing Tensor Data

- [synchronizeData()](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData()](synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [copyDataFromDeviceMemory(toBytes:length:synchronizeWithDevice:)](copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindAndWriteData(\_:to:)](bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.

# bindOptimizerData:deviceData: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Associates the optimizer and device data buffers you specify to the tensor.

## Declaration

```objectivec
- (BOOL) bindOptimizerData:(NSArray<MLCTensorData *> *) data deviceData:(NSArray<MLCTensorOptimizerDeviceData *> *) deviceData;
```

## Parameters

- `data`: An array that contains the optimizer data to associate with the tensor.
- `deviceData`: An array that contains the optimizer device data to associate with the tensor.

<a id="return-value"></a>

## Return Value

`true` if the framework successfully associated the data and device data with the tensor; otherwise, `false`.

## See Also

### Managing Tensor Data

- [synchronizeData](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData](synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [copyDataFromDeviceMemoryToBytes:length:synchronizeWithDevice:](copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindAndWriteData:toDevice:](bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
