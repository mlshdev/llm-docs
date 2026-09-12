> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/synchronizeoptimizerdata()](https://developer.apple.com/documentation/mlcompute/mlctensor/synchronizeoptimizerdata())

# synchronizeOptimizerData() (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Synchronizes the optimizer data in host memory.

## Declaration

```swift
func synchronizeOptimizerData() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if synchronization is successful; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This method synchronizes the [optimizerData](optimizerdata.md) in host memory with latest contents in device memory.

Only call this method once the graph, with which you used this tensor, finishes execution; otherwise the results in device memory may not be up to date.

> **Important**

>  Don’t call this method from a completion callback when the device is a GPU.

## See Also

### Managing Tensor Data

- [synchronizeData()](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [copyDataFromDeviceMemory(toBytes:length:synchronizeWithDevice:)](copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindAndWriteData(\_:to:)](bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
- [bindOptimizerData(\_:deviceData:)](bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.

# synchronizeOptimizerData (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Synchronizes the optimizer data in host memory.

## Declaration

```objectivec
- (BOOL) synchronizeOptimizerData;
```

<a id="return-value"></a>

## Return Value

`true` if synchronization is successful; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This method synchronizes the [optimizerData](optimizerdata.md) in host memory with latest contents in device memory.

Only call this method once the graph, with which you used this tensor, finishes execution; otherwise the results in device memory may not be up to date.

> **Important**

>  Don’t call this method from a completion callback when the device is a GPU.

## See Also

### Managing Tensor Data

- [synchronizeData](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [copyDataFromDeviceMemoryToBytes:length:synchronizeWithDevice:](copydatafromdevicememory%28tobytes_length_synchronizewithdevice_%29.md): Deprecated. Copies tensor data from device memory to user-specified memory.
- [bindAndWriteData:toDevice:](bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
- [bindOptimizerData:deviceData:](bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.
