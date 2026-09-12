> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/asyncafter(deadline:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/asyncafter(deadline:execute:))

# asyncAfter(deadline:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Schedules a work item for execution at the specified time, and returns immediately.

## Declaration

```swift
func asyncAfter(deadline: DispatchTime, execute: DispatchWorkItem)
```

## Parameters

- `deadline`: The time at which to schedule the work item for execution. Specifying the current time is less efficient than calling the [async(execute:)](async%28execute_%29.md) method directly. Do not specify the value in [distantFuture](../dispatchtime/distantfuture.md); doing so is undefined.
- `execute`: The work item containing the task to execute. For information on how to create this work item, see [DispatchWorkItem](../dispatchworkitem.md).

## See Also

### Executing Tasks Asynchronously

- [async(execute:)](async%28execute_%29.md): Schedules a work item for immediate execution, and returns immediately.
- [asyncAfter(deadline:qos:flags:execute:)](asyncafter%28deadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.
- [asyncAfter(wallDeadline:execute:)](asyncafter%28walldeadline_execute_%29.md): Schedules a work item for execution after the specified time, and returns immediately.
- [asyncAfter(wallDeadline:qos:flags:execute:)](asyncafter%28walldeadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.
