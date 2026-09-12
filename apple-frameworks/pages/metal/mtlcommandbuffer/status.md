> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/status](https://developer.apple.com/documentation/metal/mtlcommandbuffer/status)

# status (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The command buffer’s current state.

## Declaration

```swift
var status: MTLCommandBufferStatus { get }
```

## Mentioned In

- [Preparing your Metal app to run in the background](../preparing-your-metal-app-to-run-in-the-background.md)
- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

Each command buffer can be in any one of the following states:

| State | Meaning |
| --- | --- |
| [MTLCommandBufferStatus.notEnqueued](../mtlcommandbufferstatus/notenqueued.md) | A command buffer’s initial state, which indicates its command queue isn’t reserving a place for it. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can modify a command buffer in this state by encoding commands to it, or by adding a state change handler. |
| [MTLCommandBufferStatus.enqueued](../mtlcommandbufferstatus/enqueued.md) | A command buffer’s second state, which indicates its command queue is reserving a place for it. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can modify a command buffer in this state by encoding commands to it, or by adding a state change handler. |
| [MTLCommandBufferStatus.committed](../mtlcommandbufferstatus/committed.md) | A command buffer’s third state, which indicates the command queue is preparing to schedule the command buffer by resolving its dependencies. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can’t modify a command buffer in this state. |
| [MTLCommandBufferStatus.scheduled](../mtlcommandbufferstatus/scheduled.md) | A command buffer’s fourth state, which indicates the command buffer has its resources ready and is waiting for the GPU to run its commands. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can’t modify a command buffer in this state. |
| [MTLCommandBufferStatus.completed](../mtlcommandbufferstatus/completed.md) | A command buffer’s successful, final state, which indicates the GPU finished running the command buffer’s commands without any problems. |
| [MTLCommandBufferStatus.error](../mtlcommandbufferstatus/error.md) | A command buffer’s unsuccessful, final state, which indicates the GPU stopped running the buffer’s commands because of a runtime issue. |

The first two states ([MTLCommandBufferStatus.notEnqueued](../mtlcommandbufferstatus/notenqueued.md) and [MTLCommandBufferStatus.enqueued](../mtlcommandbufferstatus/enqueued.md)) both indicate that you can encode commands to the command buffer. You do this by creating an encoder that indirectly adds commands for a pass (see [Command encoder factory methods](../command-encoder-factory-methods.md)) to the command buffer. Command buffers also have some methods that directly encode commands between passes, such as [encodeSignalEvent(\_:value:)](encodesignalevent%28__value_%29.md) and [present(\_:)](present%28__%29.md).

Each command buffer’s state can only change to a state below it in the table, and ends its life cycle at either [MTLCommandBufferStatus.completed](../mtlcommandbufferstatus/completed.md) or [MTLCommandBufferStatus.error](../mtlcommandbufferstatus/error.md).

## See Also

### Troubleshooting a command buffer

- [MTLCommandBufferStatus](../mtlcommandbufferstatus.md): The discrete states for a command buffer that represent its life cycle stages.
- [Command buffer debugging](../command-buffer-debugging.md): Properties and methods for programmatically debugging runtime issues with a command buffer.

# status (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The command buffer’s current state.

## Declaration

```objectivec
@property (readonly) MTLCommandBufferStatus status;
```

## Mentioned In

- [Preparing your Metal app to run in the background](../preparing-your-metal-app-to-run-in-the-background.md)
- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

Each command buffer can be in any one of the following states:

| State | Meaning |
| --- | --- |
| [MTLCommandBufferStatusNotEnqueued](../mtlcommandbufferstatus/notenqueued.md) | A command buffer’s initial state, which indicates its command queue isn’t reserving a place for it. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can modify a command buffer in this state by encoding commands to it, or by adding a state change handler. |
| [MTLCommandBufferStatusEnqueued](../mtlcommandbufferstatus/enqueued.md) | A command buffer’s second state, which indicates its command queue is reserving a place for it. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can modify a command buffer in this state by encoding commands to it, or by adding a state change handler. |
| [MTLCommandBufferStatusCommitted](../mtlcommandbufferstatus/committed.md) | A command buffer’s third state, which indicates the command queue is preparing to schedule the command buffer by resolving its dependencies. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can’t modify a command buffer in this state. |
| [MTLCommandBufferStatusScheduled](../mtlcommandbufferstatus/scheduled.md) | A command buffer’s fourth state, which indicates the command buffer has its resources ready and is waiting for the GPU to run its commands. ![](https://developer.apple.com/images/com.apple.metal/spacer.png) You can’t modify a command buffer in this state. |
| [MTLCommandBufferStatusCompleted](../mtlcommandbufferstatus/completed.md) | A command buffer’s successful, final state, which indicates the GPU finished running the command buffer’s commands without any problems. |
| [MTLCommandBufferStatusError](../mtlcommandbufferstatus/error.md) | A command buffer’s unsuccessful, final state, which indicates the GPU stopped running the buffer’s commands because of a runtime issue. |

The first two states ([MTLCommandBufferStatusNotEnqueued](../mtlcommandbufferstatus/notenqueued.md) and [MTLCommandBufferStatusEnqueued](../mtlcommandbufferstatus/enqueued.md)) both indicate that you can encode commands to the command buffer. You do this by creating an encoder that indirectly adds commands for a pass (see [Command encoder factory methods](../command-encoder-factory-methods.md)) to the command buffer. Command buffers also have some methods that directly encode commands between passes, such as [encodeSignalEvent:value:](encodesignalevent%28__value_%29.md) and [presentDrawable:](present%28__%29.md).

Each command buffer’s state can only change to a state below it in the table, and ends its life cycle at either [MTLCommandBufferStatusCompleted](../mtlcommandbufferstatus/completed.md) or [MTLCommandBufferStatusError](../mtlcommandbufferstatus/error.md).

## See Also

### Troubleshooting a command buffer

- [MTLCommandBufferStatus](../mtlcommandbufferstatus.md): The discrete states for a command buffer that represent its life cycle stages.
- [Command buffer debugging](../command-buffer-debugging.md): Properties and methods for programmatically debugging runtime issues with a command buffer.
