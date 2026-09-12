> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources)

# BGContinuedProcessingTaskRequest.Resources (Swift)

**Framework:** Background Tasks  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Options that specify additional system resources a background task needs.

## Declaration

```swift
struct Resources
```

<a id="overview"></a>

## Overview

The following properties are of this type:

- Continuous Background Task request ([BGContinuedProcessingTaskRequest](../bgcontinuedprocessingtaskrequest.md)) property [requiredResources](requiredresources.md).
- [BGTaskScheduler](../bgtaskscheduler.md) property [supportedResources](../bgtaskscheduler/supportedresources.md).

## Topics

### Identiying a resource

- [gpu](resources/gpu.md): An option that indicates a long-running task requires the GPU.

### Creating a resource

- [init(rawValue:)](resources/init%28rawvalue_%29.md): Initializes a required resource for a Continuous Background Task by raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Identifying resource dependencies

- [requiredResources](requiredresources.md): An option that indicates any special system resources that the task requires.

# BGContinuedProcessingTaskRequestResources (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Options that specify additional system resources a background task needs.

## Declaration

```objectivec
enum BGContinuedProcessingTaskRequestResources : NSInteger;
```

<a id="overview"></a>

## Overview

The following properties are of this type:

- Continuous Background Task request ([BGContinuedProcessingTaskRequest](../bgcontinuedprocessingtaskrequest.md)) property [requiredResources](requiredresources.md).
- [BGTaskScheduler](../bgtaskscheduler.md) property [supportedResources](../bgtaskscheduler/supportedresources.md).

## Topics

### Identiying a resource

- [BGContinuedProcessingTaskRequestResourcesGPU](resources/gpu.md): An option that indicates a long-running task requires the GPU.
- [BGContinuedProcessingTaskRequestResourcesDefault](../bgcontinuedprocessingtaskrequestresources/bgcontinuedprocessingtaskrequestresourcesdefault.md): An option for a task with no additional required system resources.

## See Also

### Identifying resource dependencies

- [requiredResources](requiredresources.md): An option that indicates any special system resources that the task requires.
