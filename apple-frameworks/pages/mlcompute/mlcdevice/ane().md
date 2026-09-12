> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdevice/ane()](https://developer.apple.com/documentation/mlcompute/mlcdevice/ane())

# ane() (Swift)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates a device that uses the Apple Neural Engine, if one exists.

## Declaration

```swift
class func ane() -> Self?
```

<a id="return-value"></a>

## Return Value

A device that uses the Apple Neural Engine, or `nil` if none exists.

<a id="Discussion"></a>

## Discussion

When you select this device, the system uses the Apple Neural Engine to execute valid layers. Layers that can’t execute on the Apple Neural Engine run on the `CPU` or `GPU`. The system doesn’t select the Apple Neural Engine if you use [MLCDeviceType.any](../mlcdevicetype/any.md).

This device applies to inference graphs only. It doesn’t work with a training graph or inference graph that shares layers with a training graph.

## See Also

### Creating Devices

- [init(type:)](init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [init(type:selectsMultipleComputeDevices:)](init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [MLCDeviceType](../mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [init(gpuDevices:)](init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpu()](cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpu()](gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.

# aneDevice (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

Creates a device that uses the Apple Neural Engine, if one exists.

## Declaration

```objectivec
+ (instancetype) aneDevice;
```

<a id="return-value"></a>

## Return Value

A device that uses the Apple Neural Engine, or `nil` if none exists.

<a id="Discussion"></a>

## Discussion

When you select this device, the system uses the Apple Neural Engine to execute valid layers. Layers that can’t execute on the Apple Neural Engine run on the `CPU` or `GPU`. The system doesn’t select the Apple Neural Engine if you use [MLCDeviceTypeAny](../mlcdevicetype/any.md).

This device applies to inference graphs only. It doesn’t work with a training graph or inference graph that shares layers with a training graph.

## See Also

### Creating Devices

- [deviceWithType:](init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [deviceWithType:selectsMultipleComputeDevices:](init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [MLCDeviceType](../mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [deviceWithGPUDevices:](init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpuDevice](cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpuDevice](gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
