> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferhandler](https://developer.apple.com/documentation/metal/mtlcommandbufferhandler)

# MTLCommandBufferHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.

## Declaration

```swift
typealias MTLCommandBufferHandler = @Sendable (any MTLCommandBuffer) -> Void
```

## Parameters

- `commandBuffer`: The [MTLCommandBuffer](mtlcommandbuffer.md) instance that’s invoking the completion handler.

<a id="discussion"></a>

## Discussion

The [MTLCommandBuffer](mtlcommandbuffer.md) type uses this signature in its methods that register your completion handlers, including [addScheduledHandler(\_:)](mtlcommandbuffer/addscheduledhandler%28__%29.md) and [addCompletedHandler(\_:)](mtlcommandbuffer/addcompletedhandler%28__%29.md).

## See Also

### Registering state change handlers

- [addScheduledHandler(\_:)](mtlcommandbuffer/addscheduledhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.
- [addCompletedHandler(\_:)](mtlcommandbuffer/addcompletedhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.

# MTLCommandBufferHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a GPU device calls when it finishes scheduling a command buffer, or when the GPU finishes running it.

## Declaration

```objectivec
typedef void (^)(id<MTLCommandBuffer>) MTLCommandBufferHandler;
```

## Parameters

- `commandBuffer`: The [MTLCommandBuffer](mtlcommandbuffer.md) instance that’s invoking the completion handler.

<a id="discussion"></a>

## Discussion

The [MTLCommandBuffer](mtlcommandbuffer.md) type uses this signature in its methods that register your completion handlers, including [addScheduledHandler:](mtlcommandbuffer/addscheduledhandler%28__%29.md) and [addCompletedHandler:](mtlcommandbuffer/addcompletedhandler%28__%29.md).

## See Also

### Registering state change handlers

- [addScheduledHandler:](mtlcommandbuffer/addscheduledhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after it schedules the command buffer to run on the GPU.
- [addCompletedHandler:](mtlcommandbuffer/addcompletedhandler%28__%29.md): Registers a completion handler the GPU device calls immediately after the GPU finishes running the commands in the command buffer.
