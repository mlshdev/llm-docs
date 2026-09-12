> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputedevice](https://developer.apple.com/documentation/coreml/mlcomputedevice)

# MLComputeDevice

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Compute devices for framework operations.

## Declaration

```swift
enum MLComputeDevice
```

## Topics

### Device types

- [MLComputeDevice.cpu(\_:)](mlcomputedevice/cpu%28__%29.md): A device that represents a CPU compute device.
- [MLComputeDevice.gpu(\_:)](mlcomputedevice/gpu%28__%29.md): A device that represents a GPU compute device.
- [MLComputeDevice.neuralEngine(\_:)](mlcomputedevice/neuralengine%28__%29.md): A device that represents a Neural Engine compute device.

### Getting all devices

- [allComputeDevices](mlcomputedevice/allcomputedevices.md): Returns an array that contains all of the compute devices that are accessible.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compute devices

- [MLCPUComputeDevice](mlcpucomputedevice.md): An object that represents a CPU compute device.
- [MLGPUComputeDevice](mlgpucomputedevice.md): An object that represents a GPU compute device.
- [MLNeuralEngineComputeDevice](mlneuralenginecomputedevice.md): An object that represents a Neural Engine compute device.
- [MLComputeDeviceProtocol](mlcomputedeviceprotocol.md): An interface that represents a compute device type.
