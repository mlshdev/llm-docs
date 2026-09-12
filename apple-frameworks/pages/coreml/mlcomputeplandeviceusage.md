> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplandeviceusage](https://developer.apple.com/documentation/coreml/mlcomputeplandeviceusage)

# MLComputePlanDeviceUsage

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The anticipated compute devices to use for executing a layer or operation.

## Declaration

```objectivec
@interface MLComputePlanDeviceUsage : NSObject
```

## Topics

### Getting the compute device

- [preferredComputeDevice](mlcomputeplandeviceusage/preferredcomputedevice.md): The compute device that the framework prefers to execute the layer/operation.
- [supportedComputeDevices](mlcomputeplandeviceusage/supportedcomputedevices.md): The compute devices that can execute the layer/operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Compute plan

- [MLComputePlan](mlcomputeplan-85vdw.md): A class describing the plan for executing a model.
- [MLComputePlanCost](mlcomputeplancost.md): A class that represents the estimated cost of executing a layer or operation.
