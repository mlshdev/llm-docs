> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputedeviceprotocol](https://developer.apple.com/documentation/coreml/mlcomputedeviceprotocol)

# MLComputeDeviceProtocol (Swift)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An interface that represents a compute device type.

## Declaration

```swift
protocol MLComputeDeviceProtocol : NSObjectProtocol
```

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MLCPUComputeDevice](mlcpucomputedevice.md)
- [MLGPUComputeDevice](mlgpucomputedevice.md)
- [MLNeuralEngineComputeDevice](mlneuralenginecomputedevice.md)

## See Also

### Compute devices

- [MLComputeDevice](mlcomputedevice.md): Compute devices for framework operations.
- [MLCPUComputeDevice](mlcpucomputedevice.md): An object that represents a CPU compute device.
- [MLGPUComputeDevice](mlgpucomputedevice.md): An object that represents a GPU compute device.
- [MLNeuralEngineComputeDevice](mlneuralenginecomputedevice.md): An object that represents a Neural Engine compute device.

# MLComputeDeviceProtocol (Objective-C)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An interface that represents a compute device type.

## Declaration

```objectivec
@protocol MLComputeDeviceProtocol <NSObject>
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MLCPUComputeDevice](mlcpucomputedevice.md)
- [MLGPUComputeDevice](mlgpucomputedevice.md)
- [MLNeuralEngineComputeDevice](mlneuralenginecomputedevice.md)

## See Also

### Compute devices

- [MLCPUComputeDevice](mlcpucomputedevice.md): An object that represents a CPU compute device.
- [MLGPUComputeDevice](mlgpucomputedevice.md): An object that represents a GPU compute device.
- [MLNeuralEngineComputeDevice](mlneuralenginecomputedevice.md): An object that represents a Neural Engine compute device.
- [MLAllComputeDevices](mlallcomputedevices.md): Returns an array that contains all of the compute devices that are accessible.
