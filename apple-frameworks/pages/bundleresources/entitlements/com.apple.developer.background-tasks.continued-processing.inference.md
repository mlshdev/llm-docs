> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference)

# Background Inference

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An entitlement that lets a background task run inference on the Neural Engine.

## Details

`com.apple.developer.background-tasks.continued-processing.inference`

<a id="discussion"></a>

## Discussion

This entitlement works with [BGContinuedProcessingTask](../../backgroundtasks/bgcontinuedprocessingtask.md), which lets your app’s critical inference work finish on the Neural Engine even when your app moves to the background before the task completes.

The system also requires the entitlement for any Neural Engine access while your app is in the background, regardless of whether it’s running a continued background task. You can perform inference with Core AI, Core ML, or Metal Performance Shaders Graph.

## See Also

### Background tasks

- [Background GPU Access](com.apple.developer.background-tasks.continued-processing.gpu.md): The entitlement the system requires for a continuous background task to use the GPU.
