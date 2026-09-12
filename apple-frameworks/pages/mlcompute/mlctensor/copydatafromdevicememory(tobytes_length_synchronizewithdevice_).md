> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/copydatafromdevicememory(tobytes:length:synchronizewithdevice:)](https://developer.apple.com/documentation/mlcompute/mlctensor/copydatafromdevicememory(tobytes:length:synchronizewithdevice:))

# copyDataFromDeviceMemory(toBytes:length:synchronizeWithDevice:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Copies tensor data from device memory to user-specified memory.

## Declaration

```swift
func copyDataFromDeviceMemory(toBytes bytes: UnsafeMutableRawPointer, length: Int, synchronizeWithDevice: Bool) -> Bool
```

## Parameters

- `bytes`: The data to copy.
- `length`: The number of bytes you specify for the framework to copy.
- `synchronizeWithDevice`: A Boolean that indicates whether you choose to synchronize device memory if the device is a GPU.

<a id="return-value"></a>

## Return Value

`true` if successful; otherwise, `false` if the framework failed to copy or synchronize.

<a id="Discussion"></a>

## Discussion

When the device is a GPU, you may need to synchronize the device memory, that is, set `synchronizeWithDevice` to `true`. The framework ignores `synchronizeWithDevice` when the device is the CPU.

> **Important**

>  Only call this method once the graph, with which you used this tensor, finishes execution. Otherwise the results in device memory may not be up to date. When the device is a GPU, you must set `synchronizeWithDevice` to `false` when you call this method in a completion handler. If you specified a tensor for the outputs of a graph using `addOutputs`, set `synchronizeWithDevice` to `false`.

## See Also

### Managing Tensor Data

- [synchronizeData()](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData()](synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [bindAndWriteData(\_:to:)](bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
- [bindOptimizerData(\_:deviceData:)](bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.

# copyDataFromDeviceMemoryToBytes:length:synchronizeWithDevice: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Copies tensor data from device memory to user-specified memory.

## Declaration

```objectivec
- (BOOL) copyDataFromDeviceMemoryToBytes:(void *) bytes length:(NSUInteger) length synchronizeWithDevice:(BOOL) synchronizeWithDevice;
```

## Parameters

- `bytes`: The data to copy.
- `length`: The number of bytes you specify for the framework to copy.
- `synchronizeWithDevice`: A Boolean that indicates whether you choose to synchronize device memory if the device is a GPU.

<a id="return-value"></a>

## Return Value

`true` if successful; otherwise, `false` if the framework failed to copy or synchronize.

<a id="Discussion"></a>

## Discussion

When the device is a GPU, you may need to synchronize the device memory, that is, set `synchronizeWithDevice` to `true`. The framework ignores `synchronizeWithDevice` when the device is the CPU.

> **Important**

>  Only call this method once the graph, with which you used this tensor, finishes execution. Otherwise the results in device memory may not be up to date. When the device is a GPU, you must set `synchronizeWithDevice` to `false` when you call this method in a completion handler. If you specified a tensor for the outputs of a graph using `addOutputs`, set `synchronizeWithDevice` to `false`.

## See Also

### Managing Tensor Data

- [synchronizeData](synchronizedata%28%29.md): Deprecated. Synchronizes the data in host memory.
- [synchronizeOptimizerData](synchronizeoptimizerdata%28%29.md): Deprecated. Synchronizes the optimizer data in host memory.
- [bindAndWriteData:toDevice:](bindandwritedata%28__to_%29.md): Deprecated. Associates the given data to the tensor, and if the device is a GPU, also copies the data to the device memory.
- [bindOptimizerData:deviceData:](bindoptimizerdata%28__devicedata_%29.md): Deprecated. Associates the optimizer and device data buffers you specify to the tensor.
