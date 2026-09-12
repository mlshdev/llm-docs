> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-1w21n/deviceusage(for:)](https://developer.apple.com/documentation/coreml/mlcomputeplan-1w21n/deviceusage(for:))

# deviceUsage(for:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Returns the anticipated compute devices that would be used for executing a NeuralNetwork layer.

## Declaration

```swift
func deviceUsage(for layer: MLModelStructure.NeuralNetwork.Layer) -> MLComputePlan.DeviceUsage?
```

## Parameters

- `layer`: A NeuralNetwork layer

<a id="return-value"></a>

## Return Value

The anticipated compute devices that would be used for evaluating the layer or `nil` if the usage couldn’t be determined.

## Mentioned In

- [Analyzing a Core ML model’s performance in Xcode](../analyzing-a-core-ml-model-s-performance-in-xcode.md)

## See Also

### Getting the device usage

- [deviceUsage(for:)](deviceusage%28for_%29-9em1q.md): Returns the anticipated compute devices that would be used for executing a NeuralNetwork layer.
- [deviceUsage(for:)](deviceusage%28for_%29-7cdlm.md): Returns the anticipated compute devices that would be used for executing a MLProgram operation.
- [MLComputePlan.DeviceUsage](deviceusage.md): The anticipated compute devices that would be used for executing a layer/operation.
