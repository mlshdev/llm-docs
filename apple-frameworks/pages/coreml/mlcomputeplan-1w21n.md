> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeplan-1w21n](https://developer.apple.com/documentation/coreml/mlcomputeplan-1w21n)

# MLComputePlan

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

A class representing the compute plan of a model.

## Declaration

```swift
class MLComputePlan
```

<a id="overview"></a>

## Overview

The application can use the compute plan to estimate the necessary cost and resources of the model before running the predictions.

```
// Load the compute plan of an ML Program model.
let computePlan = try await MLComputePlan.load(contentsOf: modelURL, configuration: configuration)
guard case let .program(program) = computePlan.modelStructure else {
   fatalError("Unexpected model type.")
}
 // Get the main function.
guard let mainFunction = program.functions["main"] else {
   fatalError("Missing main function.")
}

let operations = mainFunction.block.operations
for operation in operations {
   // Get the compute device usage for the operation.
   let computeDeviceUsage = computePlan.deviceUsage(for: operation)
   // Get the estimated cost of executing the operation.
   let estimatedCost = computePlan.estimatedCost(of: operation)
}
```

## Topics

### Loading a compute plan

- [load(asset:configuration:)](mlcomputeplan-1w21n/load%28asset_configuration_%29.md): Construct the compute plan of a model asynchronously given the model asset.
- [load(contentsOf:configuration:)](mlcomputeplan-1w21n/load%28contentsof_configuration_%29.md): Construct the compute plan of a model asynchronously given the location of its on-disk representation.

### Getting the model structure

- [modelStructure](mlcomputeplan-1w21n/modelstructure.md): The model structure.

### Getting the device usage

- [deviceUsage(for:)](mlcomputeplan-1w21n/deviceusage%28for_%29.md): Returns the anticipated compute devices that would be used for executing a NeuralNetwork layer.
- [deviceUsage(for:)](mlcomputeplan-1w21n/deviceusage%28for_%29-9em1q.md): Returns the anticipated compute devices that would be used for executing a NeuralNetwork layer.
- [deviceUsage(for:)](mlcomputeplan-1w21n/deviceusage%28for_%29-7cdlm.md): Returns the anticipated compute devices that would be used for executing a MLProgram operation.
- [MLComputePlan.DeviceUsage](mlcomputeplan-1w21n/deviceusage.md): The anticipated compute devices that would be used for executing a layer/operation.

### Getting the estimated cost

- [estimatedCost(of:)](mlcomputeplan-1w21n/estimatedcost%28of_%29.md): Returns the estimated cost of executing a MLProgram operation.
- [MLComputePlan.Cost](mlcomputeplan-1w21n/cost.md): A struct containing information on the estimated cost of executing a layer/operation.

## See Also

### Compute plan

- [MLModelStructure](mlmodelstructure-swift.enum.md): An enum representing the structure of a model.
- [MLComputePolicy](mlcomputepolicy.md): The compute policy determining what compute device, or compute devices, to execute ML workloads on.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29-8stx9.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29-6z33x.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
