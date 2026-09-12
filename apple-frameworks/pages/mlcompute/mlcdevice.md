> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdevice](https://developer.apple.com/documentation/mlcompute/mlcdevice)

# MLCDevice (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An object that represents the CPU or one or more GPUs the framework uses to execute a neural network.

## Declaration

```swift
class MLCDevice
```

## Topics

### Creating Devices

- [init(type:)](mlcdevice/init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [init(type:selectsMultipleComputeDevices:)](mlcdevice/init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [MLCDeviceType](mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [init(gpuDevices:)](mlcdevice/init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpu()](mlcdevice/cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpu()](mlcdevice/gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [ane()](mlcdevice/ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.

### Inspecting Devices

- [type](mlcdevice/type.md): Deprecated. The type you specify when creating the device.
- [actualDeviceType](mlcdevice/actualdevicetype.md): Deprecated. The active device.
- [gpuDevices](mlcdevice/gpudevices.md): Deprecated. An array that contains the specific Metal devices you use to execute neural networks.

### Initializers

- [init(GPUDevices:)](mlcdevice/init%28gpudevices_%29-9w16l.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MLCDevice (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An object that represents the CPU or one or more GPUs the framework uses to execute a neural network.

## Declaration

```objectivec
@interface MLCDevice : NSObject
```

## Topics

### Creating Devices

- [deviceWithType:](mlcdevice/init%28type_%29.md): Deprecated. Creates a device of the type you specify.
- [deviceWithType:selectsMultipleComputeDevices:](mlcdevice/init%28type_selectsmultiplecomputedevices_%29.md): Deprecated. Creates a device that you can configure to use multiple compute devices.
- [MLCDeviceType](mlcdevicetype.md): Deprecated. A device type for execution of a neural network.
- [deviceWithGPUDevices:](mlcdevice/init%28gpudevices_%29-4mj85.md): Deprecated. Creates a device using the GPUs you specify.
- [cpuDevice](mlcdevice/cpu%28%29.md): Deprecated. Creates a device that uses the CPU.
- [gpuDevice](mlcdevice/gpu%28%29.md): Deprecated. Creates a device that uses a GPU, if one exists.
- [aneDevice](mlcdevice/ane%28%29.md): Deprecated. Creates a device that uses the Apple Neural Engine, if one exists.

### Inspecting Devices

- [type](mlcdevice/type.md): Deprecated. The type you specify when creating the device.
- [actualDeviceType](mlcdevice/actualdevicetype.md): Deprecated. The active device.
- [gpuDevices](mlcdevice/gpudevices.md): Deprecated. An array that contains the specific Metal devices you use to execute neural networks.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
