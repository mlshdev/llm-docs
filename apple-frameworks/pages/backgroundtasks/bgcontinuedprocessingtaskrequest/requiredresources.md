> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/requiredresources](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/requiredresources)

# requiredResources (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An option that indicates any special system resources that the task requires.

## Declaration

```swift
var requiredResources: BGContinuedProcessingTaskRequest.Resources { get set }
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

To request background GPU support for the task, set this property to [gpu](resources/gpu.md). First, check whether the device supports background GPU use; see [supportedResources](../bgtaskscheduler/supportedresources.md).

The default value is [BGContinuedProcessingTaskRequestResourcesDefault](../bgcontinuedprocessingtaskrequestresources/bgcontinuedprocessingtaskrequestresourcesdefault.md).

## See Also

### Identifying resource dependencies

- [BGContinuedProcessingTaskRequest.Resources](resources.md): Options that specify additional system resources a background task needs.

# requiredResources (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An option that indicates any special system resources that the task requires.

## Declaration

```objectivec
@property (nonatomic) BGContinuedProcessingTaskRequestResources requiredResources;
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

To request background GPU support for the task, set this property to [BGContinuedProcessingTaskRequestResourcesGPU](resources/gpu.md). First, check whether the device supports background GPU use; see [supportedResources](../bgtaskscheduler/supportedresources.md).

The default value is [BGContinuedProcessingTaskRequestResourcesDefault](../bgcontinuedprocessingtaskrequestresources/bgcontinuedprocessingtaskrequestresourcesdefault.md).

## See Also

### Identifying resource dependencies

- [BGContinuedProcessingTaskRequestResources](resources.md): Options that specify additional system resources a background task needs.
