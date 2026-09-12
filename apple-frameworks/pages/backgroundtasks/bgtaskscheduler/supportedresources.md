> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/supportedresources](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/supportedresources)

# supportedResources (Swift)

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Additional system resources that a continuous background task can request.

## Declaration

```swift
class var supportedResources: BGContinuedProcessingTaskRequest.Resources { get }
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

The [BGContinuedProcessingTaskRequest.Resources](../bgcontinuedprocessingtaskrequest/resources.md) enumeration indicates optional system resources that a specific [BGContinuedProcessingTaskRequest](../bgcontinuedprocessingtaskrequest.md) instance can request through its [requiredResources](../bgcontinuedprocessingtaskrequest/requiredresources.md) property.

Before requesting a resource, check this property to ensure that the device supports it.

# supportedResources (Objective-C)

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Additional system resources that a continuous background task can request.

## Declaration

```objectivec
@property (class, readonly) BGContinuedProcessingTaskRequestResources supportedResources;
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

The [BGContinuedProcessingTaskRequestResources](../bgcontinuedprocessingtaskrequest/resources.md) enumeration indicates optional system resources that a specific [BGContinuedProcessingTaskRequest](../bgcontinuedprocessingtaskrequest.md) instance can request through its [requiredResources](../bgcontinuedprocessingtaskrequest/requiredresources.md) property.

Before requesting a resource, check this property to ensure that the device supports it.
