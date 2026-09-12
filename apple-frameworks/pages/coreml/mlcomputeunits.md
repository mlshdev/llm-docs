> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputeunits](https://developer.apple.com/documentation/coreml/mlcomputeunits)

# MLComputeUnits (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The set of processing-unit configurations the model can use to make predictions.

## Declaration

```swift
enum MLComputeUnits
```

<a id="overview"></a>

## Overview

Use this enumeration to set or inspect the processing units you allow a model to use when it makes a prediction.

Use `all` to allow the OS to select the best processing unit to use (including the neural engine, if available).

Use [MLComputeUnits.cpuOnly](mlcomputeunits/cpuonly.md) to restrict the model to the CPU, if your app might run in the background or runs other GPU intensive tasks.

## Topics

### Processing Unit Configurations

- [MLComputeUnits.all](mlcomputeunits/all.md): The option you choose to allow the model to use all compute units available, including the neural engine.
- [MLComputeUnits.cpuOnly](mlcomputeunits/cpuonly.md): The option you choose to limit the model to only use the CPU.
- [MLComputeUnits.cpuAndGPU](mlcomputeunits/cpuandgpu.md): The option you choose to allow the model to use both the CPU and GPU, but not the neural engine.
- [MLComputeUnits.cpuAndNeuralEngine](mlcomputeunits/cpuandneuralengine.md): The option you choose to allow the model to use both the CPU and neural engine, but not the GPU.

### Creating compute units

- [init(rawValue:)](mlcomputeunits/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Allowing access to processing units

- [computeUnits](mlmodelconfiguration/computeunits.md): The processing unit or units the model uses to make predictions.

# MLComputeUnits (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The set of processing-unit configurations the model can use to make predictions.

## Declaration

```objectivec
enum MLComputeUnits : NSInteger;
```

<a id="overview"></a>

## Overview

Use this enumeration to set or inspect the processing units you allow a model to use when it makes a prediction.

Use `all` to allow the OS to select the best processing unit to use (including the neural engine, if available).

Use [MLComputeUnitsCPUOnly](mlcomputeunits/cpuonly.md) to restrict the model to the CPU, if your app might run in the background or runs other GPU intensive tasks.

## Topics

### Processing Unit Configurations

- [MLComputeUnitsAll](mlcomputeunits/all.md): The option you choose to allow the model to use all compute units available, including the neural engine.
- [MLComputeUnitsCPUOnly](mlcomputeunits/cpuonly.md): The option you choose to limit the model to only use the CPU.
- [MLComputeUnitsCPUAndGPU](mlcomputeunits/cpuandgpu.md): The option you choose to allow the model to use both the CPU and GPU, but not the neural engine.
- [MLComputeUnitsCPUAndNeuralEngine](mlcomputeunits/cpuandneuralengine.md): The option you choose to allow the model to use both the CPU and neural engine, but not the GPU.

## See Also

### Allowing access to processing units

- [computeUnits](mlmodelconfiguration/computeunits.md): The processing unit or units the model uses to make predictions.
