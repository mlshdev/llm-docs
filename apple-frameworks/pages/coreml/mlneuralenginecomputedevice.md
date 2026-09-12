> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlneuralenginecomputedevice](https://developer.apple.com/documentation/coreml/mlneuralenginecomputedevice)

# MLNeuralEngineComputeDevice (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents a Neural Engine compute device.

## Declaration

```swift
class MLNeuralEngineComputeDevice
```

## Topics

### Getting the Total Core Count

- [totalCoreCount](mlneuralenginecomputedevice/totalcorecount.md): The total number of cores in the Neural Engine.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MLComputeDeviceProtocol](mlcomputedeviceprotocol.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compute devices

- [MLComputeDevice](mlcomputedevice.md): Compute devices for framework operations.
- [MLCPUComputeDevice](mlcpucomputedevice.md): An object that represents a CPU compute device.
- [MLGPUComputeDevice](mlgpucomputedevice.md): An object that represents a GPU compute device.
- [MLComputeDeviceProtocol](mlcomputedeviceprotocol.md): An interface that represents a compute device type.

# MLNeuralEngineComputeDevice (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents a Neural Engine compute device.

## Declaration

```objectivec
@interface MLNeuralEngineComputeDevice : NSObject
```

## Topics

### Getting the Total Core Count

- [totalCoreCount](mlneuralenginecomputedevice/totalcorecount.md): The total number of cores in the Neural Engine.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MLComputeDeviceProtocol](mlcomputedeviceprotocol.md)

## See Also

### Compute devices

- [MLCPUComputeDevice](mlcpucomputedevice.md): An object that represents a CPU compute device.
- [MLGPUComputeDevice](mlgpucomputedevice.md): An object that represents a GPU compute device.
- [MLComputeDeviceProtocol](mlcomputedeviceprotocol.md): An interface that represents a compute device type.
- [MLAllComputeDevices](mlallcomputedevices.md): Returns an array that contains all of the compute devices that are accessible.
