> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/asyncafter(walldeadline:qos:flags:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/asyncafter(walldeadline:qos:flags:execute:))

# asyncAfter(wallDeadline:qos:flags:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules a block for execution using the specified attributes, and returns immediately.

## Declaration

```swift
@preconcurrency func asyncAfter(wallDeadline: DispatchWallTime, qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], execute work: @escaping @Sendable () -> Void)
```

## Parameters

- `wallDeadline`: The time at which to schedule the block for execution. Specifying the current time is less efficient than calling the [async(execute:)](async%28execute_%29.md) method directly. Do not specify the value in [distantFuture](../dispatchwalltime/distantfuture.md); doing so is undefined.
- `qos`: The quality-of-service class to use when executing the block. This parameter determines the priority with which the block is scheduled and executed. For a list of possible values, see [DispatchQoS](../dispatchqos.md).
- `flags`: Additional attributes to apply when executing the block. For a list of possible values, see [DispatchWorkItemFlags](../dispatchworkitemflags.md).
- `work`: The block containing the work to perform. This block has no return value and no parameters.

## See Also

### Executing Tasks Asynchronously

- [async(execute:)](async%28execute_%29.md): Schedules a work item for immediate execution, and returns immediately.
- [asyncAfter(deadline:execute:)](asyncafter%28deadline_execute_%29.md): Schedules a work item for execution at the specified time, and returns immediately.
- [asyncAfter(deadline:qos:flags:execute:)](asyncafter%28deadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.
- [asyncAfter(wallDeadline:execute:)](asyncafter%28walldeadline_execute_%29.md): Schedules a work item for execution after the specified time, and returns immediately.
