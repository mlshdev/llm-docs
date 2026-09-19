> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlcomputeplandeviceusage/preferredcomputedevice

# preferredComputeDevice

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The compute device that the framework prefers to execute the layer/operation.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) id<MLComputeDeviceProtocol> preferredComputeDevice;
```

## See Also

### Getting the compute device

- [supportedComputeDevices](supportedcomputedevices.md): The compute devices that can execute the layer/operation.
