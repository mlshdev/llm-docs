> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdevice/cpu()](https://developer.apple.com/documentation/mlcompute/mlcdevice/cpu())

# cpu() (Swift)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a device that uses the CPU.

## Declaration

```swift
class func cpu() -> Self
```

<a id="return-value"></a>

## Return Value

A device that uses the CPU.

## See Also

### Creating Devices

- [init(type:)](init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [init(type:selectsMultipleComputeDevices:)](init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [MLCDeviceType](../mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [init(gpuDevices:)](init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [gpu()](gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [ane()](ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.

# cpuDevice (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a device that uses the CPU.

## Declaration

```objectivec
+ (instancetype) cpuDevice;
```

<a id="return-value"></a>

## Return Value

A device that uses the CPU.

## See Also

### Creating Devices

- [deviceWithType:](init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [deviceWithType:selectsMultipleComputeDevices:](init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [MLCDeviceType](../mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [deviceWithGPUDevices:](init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [gpuDevice](gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [aneDevice](ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.
