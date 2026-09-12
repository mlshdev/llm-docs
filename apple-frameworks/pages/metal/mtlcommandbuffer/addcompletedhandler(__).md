> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/addcompletedhandler(_:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/addcompletedhandler(_:))

# addCompletedHandler(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.

## Declaration

```swift
func addCompletedHandler(_ block: @escaping MTLCommandBufferHandler)
```

## Parameters

- `block`: A Swift closure or an Objective-C block that Metal calls after the GPU finishes running the commands in the command buffer.

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)
- [Preparing your Metal app to run in the background](../preparing-your-metal-app-to-run-in-the-background.md)
- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

You can register one or more completion handlers for the same command buffer. The GPU device’s driver (on the CPU) calls the completion handlers after the GPU finishes executing the command buffer.

> **Important**

>  You can only call this method before calling the command buffer’s [commit()](commit%28%29.md) method.

For example, you can use the command buffer’s [gpuEndTime](gpuendtime.md) and [gpuStartTime](gpustarttime.md) properties to calculate how much time the GPU spends running the command buffer.

**Swift**

```swift
commandBuffer.addCompletedHandler { commandBuffer in
    let start = commandBuffer.gpuStartTime
    let end = commandBuffer.gpuEndTime

    let gpuRuntimeDuration = end - start

    /* ... */
}
```

**Objective-C**

```objective-c
[commandBuffer addCompletedHandler:^(id<MTLCommandBuffer> commandBuffer) {
    CFTimeInterval start = commandBuffer.GPUStartTime;
    CFTimeInterval end = commandBuffer.GPUEndTime;

    CFTimeInterval gpuRuntimeDuration = end - start;

    /* ... */
}];
```

The completion handler is also a good place to check the [status](status.md) property to determine whether the GPU successfully completes the buffer’s commands. If the status is equal to [MTLCommandBufferStatus.error](../mtlcommandbufferstatus/error.md), you can investigate further by checking the [error](error.md) and log properties for more details about the issue. See [Command buffer debugging](../command-buffer-debugging.md) for more methods and properties that can help you isolate the issue.

> **Warning**

>  Avoid calling the [insertDebugCaptureBoundary()](../mtlcommandqueue/insertdebugcaptureboundary%28%29.md) method within the completion handler, which can cause a debug-time deadlock if you request GPU frame capture.

## See Also

### Registering state change handlers

- [addScheduledHandler(\_:)](addscheduledhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.
- [MTLCommandBufferHandler](../mtlcommandbufferhandler.md): A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.

# addCompletedHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.

## Declaration

```objectivec
- (void) addCompletedHandler:(MTLCommandBufferHandler) block;
```

## Parameters

- `block`: A Swift closure or an Objective-C block that Metal calls after the GPU finishes running the commands in the command buffer.

## Mentioned In

- [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)
- [Preparing your Metal app to run in the background](../preparing-your-metal-app-to-run-in-the-background.md)
- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

You can register one or more completion handlers for the same command buffer. The GPU device’s driver (on the CPU) calls the completion handlers after the GPU finishes executing the command buffer.

> **Important**

>  You can only call this method before calling the command buffer’s [commit](commit%28%29.md) method.

For example, you can use the command buffer’s [GPUEndTime](gpuendtime.md) and [GPUStartTime](gpustarttime.md) properties to calculate how much time the GPU spends running the command buffer.

**Swift**

```swift
commandBuffer.addCompletedHandler { commandBuffer in
    let start = commandBuffer.gpuStartTime
    let end = commandBuffer.gpuEndTime

    let gpuRuntimeDuration = end - start

    /* ... */
}
```

**Objective-C**

```objective-c
[commandBuffer addCompletedHandler:^(id<MTLCommandBuffer> commandBuffer) {
    CFTimeInterval start = commandBuffer.GPUStartTime;
    CFTimeInterval end = commandBuffer.GPUEndTime;

    CFTimeInterval gpuRuntimeDuration = end - start;

    /* ... */
}];
```

The completion handler is also a good place to check the [status](status.md) property to determine whether the GPU successfully completes the buffer’s commands. If the status is equal to [MTLCommandBufferStatusError](../mtlcommandbufferstatus/error.md), you can investigate further by checking the [error](error.md) and log properties for more details about the issue. See [Command buffer debugging](../command-buffer-debugging.md) for more methods and properties that can help you isolate the issue.

> **Warning**

>  Avoid calling the [insertDebugCaptureBoundary](../mtlcommandqueue/insertdebugcaptureboundary%28%29.md) method within the completion handler, which can cause a debug-time deadlock if you request GPU frame capture.

## See Also

### Registering state change handlers

- [addScheduledHandler:](addscheduledhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.
- [MTLCommandBufferHandler](../mtlcommandbufferhandler.md): A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.
