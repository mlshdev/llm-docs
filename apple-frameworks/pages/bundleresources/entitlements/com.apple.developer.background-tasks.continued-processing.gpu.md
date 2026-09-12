> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu)

# Background GPU Access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The entitlement the system requires for a continuous background task to use the GPU.

## Details

`com.apple.developer.background-tasks.continued-processing.gpu`

<a id="discussion"></a>

## Discussion

This entitlement works with [BGContinuedProcessingTask](../../backgroundtasks/bgcontinuedprocessingtask.md), which allows your app’s critical work to complete even when the app goes into the background before the task finishes.

To enable GPU use in the task, add this entitlement to your app by adding the Background GPU Access capability to your target in Xcode. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

For more information about continuous background tasks, see [Performing long-running tasks on iOS and iPadOS](../../backgroundtasks/performing-long-running-tasks-on-ios-and-ipados.md).

## See Also

### Background tasks

- [Background Inference](com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.
