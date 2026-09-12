> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdevice/init(type:selectsmultiplecomputedevices:)](https://developer.apple.com/documentation/mlcompute/mlcdevice/init(type:selectsmultiplecomputedevices:))

# init(type:selectsMultipleComputeDevices:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a device that you can configure to use multiple compute devices.

## Declaration

```swift
convenience init?(type: MLCDeviceType, selectsMultipleComputeDevices: Bool)
```

## Parameters

- `type`: The device type.
- `selectsMultipleComputeDevices`: A Boolean that indicates whether to select multiple compute devices if the system supports it.

<a id="Discussion"></a>

## Discussion

For the `type` parameter, use [MLCDeviceType.any](../mlcdevicetype/any.md) unless you need to control device selection. This ensures that the framework selects the best device to execute the neural network.

## See Also

### Creating Devices

- [init(type:)](init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [MLCDeviceType](../mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [init(gpuDevices:)](init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpu()](cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpu()](gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [ane()](ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.

# deviceWithType:selectsMultipleComputeDevices: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Creates a device that you can configure to use multiple compute devices.

## Declaration

```objectivec
+ (instancetype) deviceWithType:(MLCDeviceType) type selectsMultipleComputeDevices:(BOOL) selectsMultipleComputeDevices;
```

## Parameters

- `type`: The device type.
- `selectsMultipleComputeDevices`: A Boolean that indicates whether to select multiple compute devices if the system supports it.

<a id="Discussion"></a>

## Discussion

For the `type` parameter, use [MLCDeviceTypeAny](../mlcdevicetype/any.md) unless you need to control device selection. This ensures that the framework selects the best device to execute the neural network.

## See Also

### Creating Devices

- [deviceWithType:](init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [MLCDeviceType](../mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [deviceWithGPUDevices:](init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpuDevice](cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpuDevice](gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [aneDevice](ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.
