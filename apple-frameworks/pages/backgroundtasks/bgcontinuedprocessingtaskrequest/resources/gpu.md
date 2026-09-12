> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources/gpu](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/resources/gpu)

# gpu (Swift)

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An option that indicates a long-running task requires the GPU.

## Declaration

```swift
static var gpu: BGContinuedProcessingTaskRequest.Resources { get }
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

The system requires your app to have the [Background GPU Access](../../../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu.md) entitlement with a value of `true` to use the GPU in the background. To do that, enable the Background GPU Access capability on your app’s target. For more information about capabilities in Xcode, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

Not all devices support background GPU use. For more information, see [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md).

# BGContinuedProcessingTaskRequestResourcesGPU (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An option that indicates a long-running task requires the GPU.

## Declaration

```objectivec
BGContinuedProcessingTaskRequestResourcesGPU
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

The system requires your app to have the [Background GPU Access](../../../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu.md) entitlement with a value of `true` to use the GPU in the background. To do that, enable the Background GPU Access capability on your app’s target. For more information about capabilities in Xcode, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

Not all devices support background GPU use. For more information, see [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md).

## See Also

### Identiying a resource

- [BGContinuedProcessingTaskRequestResourcesDefault](../../bgcontinuedprocessingtaskrequestresources/bgcontinuedprocessingtaskrequestresourcesdefault.md): An option for a task with no additional required system resources.
