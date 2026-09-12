> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-85vdw/computedeviceusageformlprogramoperation:](https://developer.apple.com/documentation/coreml/mlcomputeplan-85vdw/computedeviceusageformlprogramoperation:)

# computeDeviceUsageForMLProgramOperation:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Returns The anticipated compute devices that would be used for executing an ML Program operation.

## Declaration

```objectivec
- (MLComputePlanDeviceUsage *) computeDeviceUsageForMLProgramOperation:(MLModelStructureProgramOperation *) operation;
```

## Parameters

- `operation`: An ML Program operation.

<a id="return-value"></a>

## Return Value

The anticipated compute devices that would be used for executing the operation or `nil`if the usage couldn’t be determined.

## See Also

### Getting the device usage

- [computeDeviceUsageForNeuralNetworkLayer:](computedeviceusageforneuralnetworklayer_.md): Returns the anticipated compute devices that would be used for executing a NeuralNetwork layer.
- [MLComputePlanDeviceUsage](../mlcomputeplandeviceusage.md): The anticipated compute devices to use for executing a layer or operation.
