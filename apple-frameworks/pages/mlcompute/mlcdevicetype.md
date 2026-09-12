> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdevicetype](https://developer.apple.com/documentation/mlcompute/mlcdevicetype)

# MLCDeviceType (Swift)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A device type for execution of a neural network.

## Declaration

```swift
enum MLCDeviceType
```

## Topics

### Device Types

- [MLCDeviceType.any](mlcdevicetype/any.md): Deprecated. A device type that represents either the CPU or GPU.
- [MLCDeviceType.cpu](mlcdevicetype/cpu.md): Deprecated. A device type that represents the CPU.
- [MLCDeviceType.gpu](mlcdevicetype/gpu.md): Deprecated. A device type that represents the GPU.
- [MLCDeviceType.ane](mlcdevicetype/ane.md): Deprecated. A device type that represents the Apple Neural Engine.

### Initializers

- [init(rawValue:)](mlcdevicetype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating Devices

- [init(type:)](mlcdevice/init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [init(type:selectsMultipleComputeDevices:)](mlcdevice/init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [init(gpuDevices:)](mlcdevice/init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpu()](mlcdevice/cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpu()](mlcdevice/gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [ane()](mlcdevice/ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.

# MLCDeviceType (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A device type for execution of a neural network.

## Declaration

```objectivec
enum MLCDeviceType : int32_t;
```

## Topics

### Device Types

- [MLCDeviceTypeAny](mlcdevicetype/any.md): Deprecated. A device type that represents either the CPU or GPU.
- [MLCDeviceTypeCPU](mlcdevicetype/cpu.md): Deprecated. A device type that represents the CPU.
- [MLCDeviceTypeGPU](mlcdevicetype/gpu.md): Deprecated. A device type that represents the GPU.
- [MLCDeviceTypeANE](mlcdevicetype/ane.md): Deprecated. A device type that represents the Apple Neural Engine.
- [MLCDeviceTypeCount](mlcdevicetype/mlcdevicetypecount.md): A number that represents the number of device types.

## See Also

### Creating Devices

- [deviceWithType:](mlcdevice/init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [deviceWithType:selectsMultipleComputeDevices:](mlcdevice/init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [deviceWithGPUDevices:](mlcdevice/init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpuDevice](mlcdevice/cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpuDevice](mlcdevice/gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [aneDevice](mlcdevice/ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.
