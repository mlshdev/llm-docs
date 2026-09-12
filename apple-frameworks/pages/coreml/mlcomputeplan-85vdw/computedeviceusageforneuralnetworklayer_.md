> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-85vdw/computedeviceusageforneuralnetworklayer:](https://developer.apple.com/documentation/coreml/mlcomputeplan-85vdw/computedeviceusageforneuralnetworklayer:)

# computeDeviceUsageForNeuralNetworkLayer:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Returns the anticipated compute devices that would be used for executing a NeuralNetwork layer.

## Declaration

```objectivec
- (MLComputePlanDeviceUsage *) computeDeviceUsageForNeuralNetworkLayer:(MLModelStructureNeuralNetworkLayer *) layer;
```

## Parameters

- `layer`: A NeuralNetwork layer.

<a id="return-value"></a>

## Return Value

The anticipated compute devices that would be used for executing the layer or `nil` if the usage couldn’t be determined.

## See Also

### Getting the device usage

- [computeDeviceUsageForMLProgramOperation:](computedeviceusageformlprogramoperation_.md): Returns The anticipated compute devices that would be used for executing an ML Program operation.
- [MLComputePlanDeviceUsage](../mlcomputeplandeviceusage.md): The anticipated compute devices to use for executing a layer or operation.
