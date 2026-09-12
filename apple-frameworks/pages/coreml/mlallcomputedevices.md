> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlallcomputedevices](https://developer.apple.com/documentation/coreml/mlallcomputedevices)

# MLAllComputeDevices

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns an array that contains all of the compute devices that are accessible.

## Declaration

```objectivec
extern NSArray<id<MLComputeDeviceProtocol>> *MLAllComputeDevices();
```

## See Also

### Compute devices

- [MLCPUComputeDevice](mlcpucomputedevice.md): An object that represents a CPU compute device.
- [MLGPUComputeDevice](mlgpucomputedevice.md): An object that represents a GPU compute device.
- [MLNeuralEngineComputeDevice](mlneuralenginecomputedevice.md): An object that represents a Neural Engine compute device.
- [MLComputeDeviceProtocol](mlcomputedeviceprotocol.md): An interface that represents a compute device type.
