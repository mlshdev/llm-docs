> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbufferstatus](https://developer.apple.com/documentation/metal/mtlcommandbufferstatus)

# MTLCommandBufferStatus (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The discrete states for a command buffer that represent its life cycle stages.

## Declaration

```swift
enum MTLCommandBufferStatus
```

## Topics

### Command buffer states

- [MTLCommandBufferStatus.notEnqueued](mtlcommandbufferstatus/notenqueued.md): A command buffer’s initial state, which indicates its command queue isn’t reserving a place for it.
- [MTLCommandBufferStatus.enqueued](mtlcommandbufferstatus/enqueued.md): A command buffer’s second state, which indicates its command queue is reserving a place for it.
- [MTLCommandBufferStatus.committed](mtlcommandbufferstatus/committed.md): A command buffer’s third state, which indicates the command queue is preparing to schedule the command buffer by resolving its dependencies.
- [MTLCommandBufferStatus.scheduled](mtlcommandbufferstatus/scheduled.md): A command buffer’s fourth state, which indicates the command buffer has its resources ready and is waiting for the GPU to run its commands.
- [MTLCommandBufferStatus.completed](mtlcommandbufferstatus/completed.md): A command buffer’s successful, final state, which indicates the GPU finished running the command buffer’s commands without any problems.
- [MTLCommandBufferStatus.error](mtlcommandbufferstatus/error.md): A command buffer’s unsuccessful, final state, which indicates the GPU stopped running the buffer’s commands because of a runtime issue.

### Initializers

- [init(rawValue:)](mtlcommandbufferstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Troubleshooting a command buffer

- [status](mtlcommandbuffer/status.md): The command buffer’s current state.
- [Command buffer debugging](command-buffer-debugging.md): Properties and methods for programmatically debugging runtime issues with a command buffer.

# MTLCommandBufferStatus (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The discrete states for a command buffer that represent its life cycle stages.

## Declaration

```objectivec
enum MTLCommandBufferStatus : NSUInteger;
```

## Topics

### Command buffer states

- [MTLCommandBufferStatusNotEnqueued](mtlcommandbufferstatus/notenqueued.md): A command buffer’s initial state, which indicates its command queue isn’t reserving a place for it.
- [MTLCommandBufferStatusEnqueued](mtlcommandbufferstatus/enqueued.md): A command buffer’s second state, which indicates its command queue is reserving a place for it.
- [MTLCommandBufferStatusCommitted](mtlcommandbufferstatus/committed.md): A command buffer’s third state, which indicates the command queue is preparing to schedule the command buffer by resolving its dependencies.
- [MTLCommandBufferStatusScheduled](mtlcommandbufferstatus/scheduled.md): A command buffer’s fourth state, which indicates the command buffer has its resources ready and is waiting for the GPU to run its commands.
- [MTLCommandBufferStatusCompleted](mtlcommandbufferstatus/completed.md): A command buffer’s successful, final state, which indicates the GPU finished running the command buffer’s commands without any problems.
- [MTLCommandBufferStatusError](mtlcommandbufferstatus/error.md): A command buffer’s unsuccessful, final state, which indicates the GPU stopped running the buffer’s commands because of a runtime issue.

## See Also

### Troubleshooting a command buffer

- [status](mtlcommandbuffer/status.md): The command buffer’s current state.
- [Command buffer debugging](command-buffer-debugging.md): Properties and methods for programmatically debugging runtime issues with a command buffer.
