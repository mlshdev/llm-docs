> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/addscheduledhandler(_:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/addscheduledhandler(_:))

# addScheduledHandler(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.

## Declaration

```swift
func addScheduledHandler(_ block: @escaping MTLCommandBufferHandler)
```

## Parameters

- `block`: A Swift closure or an Objective-C block that Metal calls after it schedules the command buffer to run on the GPU.

## Mentioned In

- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

You can register one or more scheduling completion handlers for the same command buffer. The GPU device’s driver (on the CPU) calls the completion handlers after it finishes scheduling the command buffer to run on the GPU.

> **Important**

>  You can only call this method before calling the command buffer’s [commit()](commit%28%29.md) method.

The GPU device schedules each command buffer — along with tasks from other command buffers — after it identifies the command buffer’s dependencies. At that time, the GPU device sets the command buffer’s status to [MTLCommandBufferStatus.scheduled](../mtlcommandbufferstatus/scheduled.md) and calls your completion handler.

> **Note**

>  The command buffer’s [status](status.md) property may be equal to another (larger) value by the time your completion handler runs, including [MTLCommandBufferStatus.completed](../mtlcommandbufferstatus/completed.md).

You can use the command buffer’s [kernelEndTime](kernelendtime.md) and [kernelStartTime](kernelstarttime.md) properties to calculate how much time the CPU spends scheduling the command buffer.

**Swift**

```swift
commandBuffer.addScheduledHandler { commandBuffer in
    let start = commandBuffer.kernelStartTime
    let end = commandBuffer.kernelEndTime

    let scheduleDuration = end - start

    /* ... */
}
```

**Objective-C**

```objective-c
[commandBuffer addScheduledHandler:^(id<MTLCommandBuffer> commandBuffer) {
    CFTimeInterval start = commandBuffer.kernelStartTime;
    CFTimeInterval end = commandBuffer.kernelEndTime;

    CFTimeInterval scheduleDuration = end - start;

    /* ... */
}];

```

## See Also

### Registering state change handlers

- [addCompletedHandler(\_:)](addcompletedhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.
- [MTLCommandBufferHandler](../mtlcommandbufferhandler.md): A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.

# addScheduledHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.

## Declaration

```objectivec
- (void) addScheduledHandler:(MTLCommandBufferHandler) block;
```

## Parameters

- `block`: A Swift closure or an Objective-C block that Metal calls after it schedules the command buffer to run on the GPU.

## Mentioned In

- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

You can register one or more scheduling completion handlers for the same command buffer. The GPU device’s driver (on the CPU) calls the completion handlers after it finishes scheduling the command buffer to run on the GPU.

> **Important**

>  You can only call this method before calling the command buffer’s [commit](commit%28%29.md) method.

The GPU device schedules each command buffer — along with tasks from other command buffers — after it identifies the command buffer’s dependencies. At that time, the GPU device sets the command buffer’s status to [MTLCommandBufferStatusScheduled](../mtlcommandbufferstatus/scheduled.md) and calls your completion handler.

> **Note**

>  The command buffer’s [status](status.md) property may be equal to another (larger) value by the time your completion handler runs, including [MTLCommandBufferStatusCompleted](../mtlcommandbufferstatus/completed.md).

You can use the command buffer’s [kernelEndTime](kernelendtime.md) and [kernelStartTime](kernelstarttime.md) properties to calculate how much time the CPU spends scheduling the command buffer.

**Swift**

```swift
commandBuffer.addScheduledHandler { commandBuffer in
    let start = commandBuffer.kernelStartTime
    let end = commandBuffer.kernelEndTime

    let scheduleDuration = end - start

    /* ... */
}
```

**Objective-C**

```objective-c
[commandBuffer addScheduledHandler:^(id<MTLCommandBuffer> commandBuffer) {
    CFTimeInterval start = commandBuffer.kernelStartTime;
    CFTimeInterval end = commandBuffer.kernelEndTime;

    CFTimeInterval scheduleDuration = end - start;

    /* ... */
}];

```

## See Also

### Registering state change handlers

- [addCompletedHandler:](addcompletedhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.
- [MTLCommandBufferHandler](../mtlcommandbufferhandler.md): A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.
